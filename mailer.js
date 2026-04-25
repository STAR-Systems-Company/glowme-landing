const nodemailer = require('nodemailer');

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURE,
  MAIL_USER,
  MAIL_PASSWORD,
  MAIL_FROM_NAME = 'GlowMe',
  MAIL_FROM_ADDRESS,
  SITE_URL = 'https://glowme.com.ua',
} = process.env;

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  if (!MAIL_HOST || !MAIL_USER || !MAIL_PASSWORD) {
    console.warn('[mailer] SMTP env vars missing — emails will be skipped');
    return null;
  }
  transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT) || 587,
    secure: String(MAIL_SECURE).toLowerCase() === 'true',
    auth: { user: MAIL_USER, pass: MAIL_PASSWORD },
    requireTLS: String(MAIL_SECURE).toLowerCase() !== 'true',
    tls: { minVersion: 'TLSv1.2' },
  });
  transporter.verify().then(
    () => console.log('[mailer] SMTP ready: %s:%s', MAIL_HOST, MAIL_PORT),
    (err) => console.error('[mailer] SMTP verify failed:', err.message)
  );
  return transporter;
}

function welcomeHtml() {
  const brandViolet = '#7c3aed';
  const brandPink = '#ec4899';
  return `<!doctype html>
<html lang="uk">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Вітаємо в GlowMe</title>
</head>
<body style="margin:0;padding:0;background:#f6f1ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e1b2e;">
  <div style="display:none!important;max-height:0;max-width:0;overflow:hidden;mso-hide:all;font-size:1px;line-height:1px;">Ви в списку перших 500 — промокод -30% і ранній доступ чекають вас.</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f6f1ff;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:22px;overflow:hidden;box-shadow:0 20px 60px -20px rgba(124,58,237,.35);">
          <tr>
            <td style="background:linear-gradient(135deg,${brandViolet} 0%,#a855f7 50%,${brandPink} 100%);padding:42px 36px 38px;text-align:center;color:#fff;">
              <div style="font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:#ffffff;font-weight:600;">Glow<span style="color:#f3e8ff;">·</span>Me</div>
              <h1 style="margin:14px 0 8px;font-size:30px;line-height:1.15;font-weight:800;letter-spacing:-.02em;">Дякуємо, що з нами ✨</h1>
              <p style="margin:0;font-size:15px;line-height:1.55;opacity:.95;max-width:440px;margin:0 auto;">Ви серед перших 500 — і це означає персональний промокод <b>−30%</b> та ранній доступ до бети.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:36px 36px 8px;">
              <p style="margin:0 0 14px;font-size:16px;line-height:1.65;">Привіт!</p>
              <p style="margin:0 0 18px;font-size:16px;line-height:1.65;">Ми готуємо запуск <b>GlowMe</b> — AI-фотосесії онлайн: ви завантажуєте 2 фото, обираєте віртуальну студію та отримуєте <b>25 професійних знімків у 4K</b> за 15 хвилин. Без фотографа, без поїздок, без обробки.</p>
              <p style="margin:0 0 22px;font-size:16px;line-height:1.65;">Як тільки ми відкриємо бету — ви першими отримаєте лист із запрошенням і вашим персональним промокодом.</p>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:8px 0 26px;">
                <tr>
                  <td style="background:linear-gradient(180deg,#faf7ff,#f4eeff);border:1px solid #ede9fe;border-radius:16px;padding:20px 22px;">
                    <div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:${brandViolet};font-weight:700;margin-bottom:10px;">Що ви отримуєте</div>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr><td style="padding:6px 0;font-size:15px;line-height:1.5;"><span style="color:#10b981;font-weight:700;">✓</span> &nbsp; Персональний промокод −30% на першу фотосесію</td></tr>
                      <tr><td style="padding:6px 0;font-size:15px;line-height:1.5;"><span style="color:#10b981;font-weight:700;">✓</span> &nbsp; Ранній доступ до бета-версії</td></tr>
                      <tr><td style="padding:6px 0;font-size:15px;line-height:1.5;"><span style="color:#10b981;font-weight:700;">✓</span> &nbsp; 25 фото у 4K, 4 студії на старті</td></tr>
                      <tr><td style="padding:6px 0;font-size:15px;line-height:1.5;"><span style="color:#10b981;font-weight:700;">✓</span> &nbsp; Жодного спаму — лише лист про запуск</td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin:0 auto 30px;">
                <tr>
                  <td style="border-radius:14px;background:linear-gradient(135deg,${brandViolet},#9333ea);box-shadow:0 8px 22px rgba(124,58,237,.4);">
                    <a href="${SITE_URL}" style="display:inline-block;padding:14px 30px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:.01em;">Перейти на glowme.com.ua →</a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 6px;font-size:14px;line-height:1.6;color:#6b7280;text-align:center;">До зустрічі на запуску. Залишайтеся у ритмі — далі буде яскраво.</p>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#6b7280;text-align:center;">— Команда GlowMe</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 36px 30px;border-top:1px solid #f1ebff;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#9ca3af;text-align:center;">
                Ви отримали цей лист, бо залишили email на <a href="${SITE_URL}" style="color:${brandViolet};text-decoration:none;">glowme.com.ua</a> для сповіщення про запуск.<br>
                Якщо це були не ви — просто проігноруйте лист, ми більше не напишемо.
              </p>
            </td>
          </tr>
        </table>
        <p style="margin:18px 0 0;font-size:11px;color:#a5a3b3;letter-spacing:.05em;">© ${new Date().getFullYear()} GlowMe · AI Photography · Ukraine</p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function welcomeText() {
  return [
    'Дякуємо, що з нами!',
    '',
    'Ви серед перших 500 — отже, на запуску GlowMe вас чекає:',
    '  • персональний промокод −30% на першу AI фотосесію',
    '  • ранній доступ до бета-версії',
    '  • 25 фото у 4K, 4 віртуальні студії на старті',
    '  • жодного спаму — лише лист про запуск',
    '',
    `Сайт: ${SITE_URL}`,
    '',
    '— Команда GlowMe',
  ].join('\n');
}

async function sendWelcome(email) {
  const tx = getTransporter();
  if (!tx) return { sent: false, reason: 'no-smtp-config' };
  const fromAddr = MAIL_FROM_ADDRESS || MAIL_USER;
  const fromDomain = fromAddr.split('@')[1] || 'glowme.studio';
  const info = await tx.sendMail({
    from: `"${MAIL_FROM_NAME}" <${fromAddr}>`,
    to: email,
    replyTo: fromAddr,
    sender: fromAddr,
    envelope: { from: fromAddr, to: email },
    messageId: `<welcome-${Date.now()}-${Math.random().toString(36).slice(2, 10)}@${fromDomain}>`,
    subject: 'Дякуємо! Ваш промокод −30% уже зарезервовано ✨',
    text: welcomeText(),
    html: welcomeHtml(),
    headers: {
      'List-Unsubscribe': `<mailto:${fromAddr}?subject=unsubscribe>`,
      'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      'X-Entity-Ref-ID': `glowme-welcome-${Date.now()}`,
      'Auto-Submitted': 'auto-generated',
      'Precedence': 'bulk',
    },
  });
  return { sent: true, messageId: info.messageId };
}

module.exports = { sendWelcome };
