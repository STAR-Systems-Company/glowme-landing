require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { renderPage } = require('./render');
const { sendWelcome } = require('./mailer');

const app = express();
const PORT = process.env.PORT || 4000;

// Canonical site domain. The landing is currently served from
// glowme.studio; sitemap / robots.txt / image URLs all need to point
// here so Google's crawler can fetch them. The pre-launch product
// domain (glowme.com.ua) was previously hard-coded here, which broke
// indexing — Search Console reported "Заблокировано в robots.txt" /
// "Страница с переадресацией" because the sitemap URL it tried to
// fetch lived on a domain that didn't serve content yet.
// Override via env if you ever swap to a different canonical.
const DOMAIN = process.env.SITE_DOMAIN || 'https://glowme.studio';

// Behind nginx — trust proxy headers so req.ip / X-Forwarded-* are correct
app.set('trust proxy', true);

app.use(compression());
app.use('/public', express.static(path.join(__dirname, 'public'), {
  maxAge: '365d',
  immutable: true,
}));

// Robots.txt — explicit allow for major crawlers + image/asset access,
// sitemap pointer. Each user-agent group has BOTH Allow and an empty
// Disallow per the original RFC (some crawlers — and Google's URL
// Inspection in particular — flag groups with only `Allow:` as
// "rules undefined" and conservatively treat the URL as blocked).
app.get('/robots.txt', (_req, res) => {
  res.type('text/plain').send(`User-agent: *
Allow: /
Disallow:

User-agent: Googlebot
Allow: /
Disallow:

User-agent: Googlebot-Image
Allow: /public/images/
Disallow:

User-agent: Bingbot
Allow: /
Disallow:

User-agent: YandexBot
Allow: /
Disallow:

User-agent: Twitterbot
Allow: /
Disallow:

User-agent: facebookexternalhit
Allow: /
Disallow:

User-agent: LinkedInBot
Allow: /
Disallow:

User-agent: TelegramBot
Allow: /
Disallow:

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

Sitemap: ${DOMAIN}/sitemap.xml
Sitemap: ${DOMAIN}/sitemap-images.xml
`);
});

// Sitemap — main page with image sitemap extension
app.get('/sitemap.xml', (_req, res) => {
  const now = new Date().toISOString().slice(0, 10);
  const domain = DOMAIN;
  const images = [
    { loc: `${domain}/public/images/Image_9bk25v9bk25v9bk2.png`, title: 'AI фотосесія бізнес стиль — LinkedIn', caption: 'AI фотосесія в бізнес-стилі для LinkedIn та резюме' },
    { loc: `${domain}/public/images/Image_twx9rmtwx9rmtwx9.png`, title: 'Fashion AI фотосесія — editorial', caption: 'Fashion AI фотосесія в editorial стилі для Instagram' },
    { loc: `${domain}/public/images/Image_kxxuetkxxuetkxxu.png`, title: 'Студійний AI портрет', caption: 'Класичний AI портрет зі студійним світлом' },
    { loc: `${domain}/public/images/Image_4md6h84md6h84md6.png`, title: 'Casual AI фото', caption: 'Casual AI фотосесія для соцмереж' },
    { loc: `${domain}/public/og.svg`, title: 'GlowMe AI Фотосесія', caption: 'GlowMe — AI фотосесія онлайн' },
    { loc: `${domain}/public/logo.svg`, title: 'GlowMe лого', caption: 'Логотип GlowMe' },
  ];
  const imageTags = images.map(i => `    <image:image>
      <image:loc>${i.loc}</image:loc>
      <image:title>${i.title}</image:title>
      <image:caption>${i.caption}</image:caption>
    </image:image>`).join('\n');

  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${domain}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="uk-UA" href="${domain}/"/>
    <xhtml:link rel="alternate" hreflang="uk" href="${domain}/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}/"/>
${imageTags}
  </url>
</urlset>`);
});

// Dedicated image sitemap for Google Images
app.get('/sitemap-images.xml', (_req, res) => {
  const now = new Date().toISOString().slice(0, 10);
  const domain = DOMAIN;
  const images = [
    { loc: `${domain}/public/images/Image_9bk25v9bk25v9bk2.png`, title: 'AI фотосесія бізнес стиль — LinkedIn', caption: 'AI фотосесія в бізнес-стилі для LinkedIn та резюме, згенерована нейромережею GlowMe' },
    { loc: `${domain}/public/images/Image_twx9rmtwx9rmtwx9.png`, title: 'Fashion AI фотосесія — editorial', caption: 'Fashion AI фотосесія в editorial стилі для Instagram та модельного портфоліо' },
    { loc: `${domain}/public/images/Image_kxxuetkxxuetkxxu.png`, title: 'Студійний AI портрет', caption: 'Класичний студійний AI портрет зі студійним світлом' },
    { loc: `${domain}/public/images/Image_4md6h84md6h84md6.png`, title: 'Casual AI фото', caption: 'Casual AI фотосесія для соцмереж та сайтів знайомств' },
  ];
  const imageTags = images.map(i => `    <image:image>
      <image:loc>${i.loc}</image:loc>
      <image:title>${i.title}</image:title>
      <image:caption>${i.caption}</image:caption>
      <image:license>${domain}/</image:license>
    </image:image>`).join('\n');

  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${domain}/</loc>
    <lastmod>${now}</lastmod>
${imageTags}
  </url>
</urlset>`);
});

// humans.txt — small ranking signal + credibility
app.get('/humans.txt', (_req, res) => {
  res.type('text/plain').send(`/* TEAM */
Brand: GlowMe
Contact: hello@glowme.com.ua
Location: Ukraine

/* SITE */
Last update: ${new Date().toISOString().slice(0, 10)}
Language: Ukrainian
Tech: Node.js, Express, SSR, FLUX LoRA AI
`);
});

// Security.txt — RFC 9116
app.get('/.well-known/security.txt', (_req, res) => {
  res.type('text/plain').send(`Contact: mailto:security@glowme.com.ua
Expires: 2026-12-31T23:59:59.000Z
Preferred-Languages: uk, en
`);
});

// Subscribe — JSONL log + transactional welcome email
const SUBSCRIBERS_FILE = path.join(__dirname, 'subscribers.jsonl');
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const seenEmails = new Set();
try {
  if (fs.existsSync(SUBSCRIBERS_FILE)) {
    const data = fs.readFileSync(SUBSCRIBERS_FILE, 'utf-8');
    for (const line of data.split('\n')) {
      if (!line.trim()) continue;
      try {
        const rec = JSON.parse(line);
        if (rec.email) seenEmails.add(rec.email);
      } catch { /* ignore malformed line */ }
    }
    console.log(`[subscribe] loaded ${seenEmails.size} known subscribers`);
  }
} catch (err) {
  console.error('[subscribe] failed to load existing subscribers:', err.message);
}

// Sliding-window rate limiter (per IP). 5 requests / 10 min.
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const rateBuckets = new Map();
function rateLimitHit(key) {
  const now = Date.now();
  const cutoff = now - RATE_WINDOW_MS;
  const arr = (rateBuckets.get(key) || []).filter(t => t > cutoff);
  if (arr.length >= RATE_MAX) {
    rateBuckets.set(key, arr);
    return { limited: true, retryAfter: Math.ceil((arr[0] + RATE_WINDOW_MS - now) / 1000) };
  }
  arr.push(now);
  rateBuckets.set(key, arr);
  return { limited: false };
}
// Periodic cleanup so the map doesn't grow forever.
setInterval(() => {
  const cutoff = Date.now() - RATE_WINDOW_MS;
  for (const [k, arr] of rateBuckets) {
    const kept = arr.filter(t => t > cutoff);
    if (kept.length === 0) rateBuckets.delete(k);
    else rateBuckets.set(k, kept);
  }
}, RATE_WINDOW_MS).unref?.();

app.use(express.json({ limit: '8kb' }));

app.post('/api/subscribe', async (req, res) => {
  const fwd = req.headers['x-forwarded-for'];
  const ip = (Array.isArray(fwd) ? fwd[0] : (fwd || '').split(',')[0].trim()) || req.ip || req.socket.remoteAddress || 'unknown';

  const rl = rateLimitHit(ip);
  if (rl.limited) {
    res.set('Retry-After', String(rl.retryAfter));
    return res.status(429).json({ error: 'too_many_requests' });
  }

  const email = String(req.body?.email || '').trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  // Duplicate — respond success to the user, do not store, do not resend.
  if (seenEmails.has(email)) {
    console.log('[subscribe] dup %s from %s', email, ip);
    return res.json({ ok: true });
  }

  const now = new Date();
  const record = {
    id: crypto.randomBytes(8).toString('hex'),
    email,
    timestamp: now.toISOString(),
    epoch_ms: now.getTime(),
    date: now.toISOString().slice(0, 10),
    time: now.toISOString().slice(11, 19),
    source: 'landing',
    page: req.body?.page || '/',
    ip,
    user_agent: req.headers['user-agent'] || null,
    referer: req.headers['referer'] || req.headers['referrer'] || null,
    accept_language: req.headers['accept-language'] || null,
    origin: req.headers['origin'] || null,
    host: req.headers['host'] || null,
    utm: {
      source: req.body?.utm_source || null,
      medium: req.body?.utm_medium || null,
      campaign: req.body?.utm_campaign || null,
      term: req.body?.utm_term || null,
      content: req.body?.utm_content || null,
    },
    email_sent: false,
    email_message_id: null,
    email_error: null,
  };

  try {
    const result = await sendWelcome(email);
    record.email_sent = !!result.sent;
    record.email_message_id = result.messageId || null;
    if (!result.sent) record.email_error = result.reason || 'unknown';
  } catch (err) {
    record.email_error = err.message || String(err);
    console.error('[subscribe] welcome email failed for %s: %s', email, record.email_error);
  }

  try {
    fs.appendFileSync(SUBSCRIBERS_FILE, JSON.stringify(record) + '\n', 'utf-8');
  } catch (err) {
    console.error('[subscribe] failed to persist record:', err.message);
    return res.status(500).json({ error: 'storage_failed' });
  }

  seenEmails.add(email);
  console.log('[subscribe] NEW %s (mail=%s)', email, record.email_sent);

  res.json({ ok: true });
});

// Main page
app.get('/', (_req, res) => {
  const html = renderPage();
  res.set({
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'interest-cohort=(), browsing-topics=()',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'Link': '</public/images/Image_9bk25v9bk25v9bk2.png>; rel=preload; as=image; fetchpriority=high',
    'Vary': 'Accept-Encoding',
  });
  res.send(html);
});

// 404
app.use((_req, res) => {
  res.status(404).send(renderPage());
});

app.listen(PORT, () => {
  console.log(`GlowMe Landing running on http://localhost:${PORT}`);
});
