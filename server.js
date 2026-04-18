const express = require('express');
const compression = require('compression');
const path = require('path');
const { renderPage } = require('./render');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(compression());
app.use('/public', express.static(path.join(__dirname, 'public'), {
  maxAge: '365d',
  immutable: true,
}));

// Robots.txt — explicit allow for major crawlers + image/asset access, sitemap pointer
app.get('/robots.txt', (_req, res) => {
  res.type('text/plain').send(`User-agent: *
Allow: /
Allow: /public/
Allow: /public/images/

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /public/images/

User-agent: Bingbot
Allow: /

User-agent: YandexBot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: TelegramBot
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

Sitemap: https://glowme.com.ua/sitemap.xml
Sitemap: https://glowme.com.ua/sitemap-images.xml
Host: https://glowme.com.ua
`);
});

// Sitemap — main page with image sitemap extension
app.get('/sitemap.xml', (_req, res) => {
  const now = new Date().toISOString().slice(0, 10);
  const domain = 'https://glowme.com.ua';
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
  const domain = 'https://glowme.com.ua';
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

// Subscribe
const fs = require('fs');
const SUBSCRIBERS_FILE = path.join(__dirname, 'subscribers.txt');

app.use(express.json());

app.post('/api/subscribe', (req, res) => {
  const email = (req.body.email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  const line = `${email}\t${new Date().toISOString()}\n`;
  fs.appendFileSync(SUBSCRIBERS_FILE, line, 'utf-8');
  console.log(`New subscriber: ${email}`);
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
