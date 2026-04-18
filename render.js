/**
 * SSR render for GlowMe AI Photography landing page.
 * Everything is inline — zero external CSS/JS blocking requests.
 */

const DOMAIN = 'https://glowme.com.ua';
const BRAND = 'GlowMe';
const TITLE = 'GlowMe \u2014 AI \u0424\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F \u041E\u043D\u043B\u0430\u0439\u043D | 25 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0438\u0445 \u0444\u043E\u0442\u043E \u0437\u0430 15 \u0445\u0432\u0438\u043B\u0438\u043D';
const DESC = '\u041F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0430 AI \u0444\u043E\u0442\u043E\u0441\u0435\u0441\u0456\u044F \u0431\u0435\u0437 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0430 \u0456 \u0441\u0442\u0443\u0434\u0456\u0457. \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0442\u0435 2 \u0444\u043E\u0442\u043E \u2014 \u043E\u0442\u0440\u0438\u043C\u0430\u0439\u0442\u0435 25 \u0441\u0442\u0443\u0434\u0456\u0439\u043D\u0438\u0445 \u0437\u043D\u0456\u043C\u043A\u0456\u0432 \u0443 4K. \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0430 AI-\u043C\u043E\u0434\u0435\u043B\u044C \u0434\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0433\u043E \u043A\u043B\u0456\u0454\u043D\u0442\u0430. \u041E\u043F\u043B\u0430\u0442\u0430 \u0432 \u0433\u0440\u0438\u0432\u043D\u044F\u0445.';

// Use Unicode escapes to avoid encoding issues - let me just use the strings directly
// since Node.js handles UTF-8 fine

function renderPage() {
  return `<!DOCTYPE html>
<html lang="uk">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="format-detection" content="telephone=no">
<meta name="color-scheme" content="light">
<title>AI Фотосесія Онлайн — 25 професійних фото за 15 хв | GlowMe</title>
<meta name="description" content="AI фотосесія онлайн: 25 студійних фото у 4K за 15 хвилин. Завантажте 2 фото — нейромережа створить ваш персональний фотошут. Ціна від 499 ₴. Оплата в гривнях.">
<meta name="keywords" content="AI фотосесія, нейрофотосесія, AI портрет, фотосесія онлайн, ШІ фотосесія, AI фото, нейрофото, фото для LinkedIn, фото для резюме, AI генератор фото, персональна AI модель, фотосесія без фотографа, professional AI photoshoot, AI headshot Україна">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="bingbot" content="index, follow">
<meta name="yandex" content="index, follow">
<link rel="canonical" href="${DOMAIN}/">
<meta name="theme-color" content="#7c3aed">
<meta name="author" content="GlowMe">
<meta name="publisher" content="GlowMe">
<meta name="application-name" content="GlowMe">
<meta name="apple-mobile-web-app-title" content="GlowMe">
<meta name="geo.region" content="UA">
<meta name="geo.placename" content="Ukraine">
<meta name="geo.country" content="Ukraine">
<meta name="ICBM" content="50.4501, 30.5234">
<meta name="rating" content="general">
<meta name="distribution" content="global">
<meta name="revisit-after" content="7 days">
<meta property="og:type" content="website">
<meta property="og:url" content="${DOMAIN}/">
<meta property="og:title" content="AI Фотосесія Онлайн — 25 професійних фото за 15 хв | GlowMe">
<meta property="og:description" content="Професійна AI фотосесія без фотографа. 25 студійних знімків у 4K за 15 хвилин. Персональна AI-модель. Ціна від 499 ₴.">
<meta property="og:image" content="${DOMAIN}/public/og.svg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="GlowMe — AI фотосесія онлайн, 25 професійних фото за 15 хвилин">
<meta property="og:locale" content="uk_UA">
<meta property="og:locale:alternate" content="en_US">
<meta property="og:locale:alternate" content="ru_UA">
<meta property="og:site_name" content="GlowMe">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AI Фотосесія Онлайн — 25 фото за 15 хв | GlowMe">
<meta name="twitter:description" content="Професійна AI фотосесія без фотографа. 25 студійних знімків у 4K. Від 499 ₴.">
<meta name="twitter:image" content="${DOMAIN}/public/og.svg">
<meta name="twitter:image:alt" content="GlowMe AI Фотосесія — приклади результатів">
<link rel="icon" type="image/svg+xml" href="/public/favicon.svg">
<link rel="apple-touch-icon" href="/public/favicon.svg">
<link rel="alternate" hreflang="uk-UA" href="${DOMAIN}/">
<link rel="alternate" hreflang="uk" href="${DOMAIN}/">
<link rel="alternate" hreflang="x-default" href="${DOMAIN}/">
<link rel="preload" as="image" href="/public/images/Image_9bk25v9bk25v9bk2.png" fetchpriority="high">
<link rel="preload" as="image" href="/public/images/Image_kxxuetkxxuetkxxu.png">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
${structuredData()}
<style>${css()}</style>
</head>
<body>
${header()}
${hero()}
${stats()}
${howItWorks()}
${styles()}
${useCases()}
${advantages()}
${comparison()}
${faq()}
${seoContent()}
${cta()}
${footer()}
<script>${js()}</script>
</body>
</html>`;
}

function structuredData() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${DOMAIN}/#organization`,
    "name": "GlowMe",
    "legalName": "GlowMe AI Photography",
    "url": DOMAIN,
    "logo": {
      "@type": "ImageObject",
      "url": `${DOMAIN}/public/logo.svg`,
      "width": 512,
      "height": 512
    },
    "image": `${DOMAIN}/public/og.svg`,
    "description": "Професійна AI фотосесія онлайн. 25 фото за 15 хвилин, персональна AI-модель, 4K якість.",
    "email": "hello@glowme.com.ua",
    "foundingDate": "2025",
    "knowsAbout": ["AI Photography", "Neural Networks", "FLUX LoRA", "Photo Generation", "Portrait AI"],
    "areaServed": [
      { "@type": "Country", "name": "Ukraine" },
      { "@type": "Country", "name": "Poland" },
      { "@type": "Country", "name": "Germany" }
    ],
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@glowme.com.ua",
      "availableLanguage": ["Ukrainian", "Russian", "English"]
    }
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${DOMAIN}/#service`,
    "serviceType": "AI Photo Session",
    "name": "AI Фотосесія онлайн — 25 професійних фото",
    "alternateName": ["Нейрофотосесія", "AI фотошут", "ШІ фотосесія"],
    "description": "Завантажте 2 фото — отримайте 25 професійних знімків у 4K за 15 хвилин. Персональна AI-модель для кожного клієнта, різні стилі та пози.",
    "provider": { "@id": `${DOMAIN}/#organization` },
    "areaServed": { "@type": "Country", "name": "UA" },
    "audience": {
      "@type": "Audience",
      "audienceType": "Приватні особи, бізнес, фрілансери, креатори"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "UAH",
      "lowPrice": "499",
      "highPrice": "1999",
      "offerCount": "3",
      "availability": "https://schema.org/PreOrder",
      "priceValidUntil": "2026-12-31"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Тарифи AI фотосесії",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basic — 25 AI фото" }, "price": "499", "priceCurrency": "UAH" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pro — 25 AI фото + 4K апскейл" }, "price": "999", "priceCurrency": "UAH" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium — всі стилі + пріоритет" }, "price": "1999", "priceCurrency": "UAH" }
      ]
    }
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${DOMAIN}/#product`,
    "name": "AI Фотосесія GlowMe — 25 професійних фото",
    "description": "Персональна AI-фотосесія онлайн. Завантажте 2 фото — отримайте 25 студійних знімків у 4K якості. Без фотографа, без студії, без очікування.",
    "brand": { "@type": "Brand", "name": "GlowMe" },
    "category": "AI Photography Service",
    "image": [
      `${DOMAIN}/public/images/Image_9bk25v9bk25v9bk2.png`,
      `${DOMAIN}/public/images/Image_kxxuetkxxuetkxxu.png`,
      `${DOMAIN}/public/images/Image_twx9rmtwx9rmtwx9.png`,
      `${DOMAIN}/public/images/Image_4md6h84md6h84md6.png`
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "UAH",
      "lowPrice": "499",
      "highPrice": "1999",
      "offerCount": "3",
      "availability": "https://schema.org/PreOrder",
      "seller": { "@id": `${DOMAIN}/#organization` }
    }
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GlowMe AI Photography",
    "applicationCategory": "PhotoApplication",
    "applicationSubCategory": "AI Photo Generator",
    "operatingSystem": "Web, iOS, Android, Telegram",
    "offers": {
      "@type": "Offer",
      "price": "499",
      "priceCurrency": "UAH"
    },
    "featureList": [
      "Персональна AI-модель за 2 фото",
      "25 професійних знімків у 4K",
      "Десятки стилів та віртуальних студій",
      "Telegram-бот",
      "Оплата в гривнях",
      "Результат за 15 хвилин"
    ]
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Як зробити AI фотосесію на GlowMe за 15 хвилин",
    "description": "Покроковий процес створення 25 професійних AI фото",
    "totalTime": "PT15M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "UAH", "value": "499" },
    "supply": [
      { "@type": "HowToSupply", "name": "Портрет обличчя" },
      { "@type": "HowToSupply", "name": "Фото в повний зріст" }
    ],
    "tool": [{ "@type": "HowToTool", "name": "GlowMe AI платформа" }],
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Завантажте 2 фото", "text": "Завантажте портрет обличчя та фото в повний зріст на платформу GlowMe", "url": `${DOMAIN}/#how` },
      { "@type": "HowToStep", "position": 2, "name": "Оберіть стиль фотосесії", "text": "Виберіть віртуальну студію: бізнес, fashion, портрет, casual або кілька одразу", "url": `${DOMAIN}/#styles` },
      { "@type": "HowToStep", "position": 3, "name": "AI навчається на вас", "text": "Нейромережа створює персональну AI-модель за вашими фото за 10 хвилин", "url": `${DOMAIN}/#how` },
      { "@type": "HowToStep", "position": 4, "name": "Отримайте 25 фото", "text": "AI генерує 25 професійних знімків у 4K якості — різні пози, світло та ракурси", "url": `${DOMAIN}/#how` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems().map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${DOMAIN}/#website`,
    "name": "GlowMe",
    "alternateName": "GlowMe AI Photography",
    "url": DOMAIN,
    "description": "Професійна AI фотосесія онлайн — 25 фото за 15 хвилин",
    "inLanguage": "uk-UA",
    "publisher": { "@id": `${DOMAIN}/#organization` },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${DOMAIN}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Головна", "item": DOMAIN },
      { "@type": "ListItem", "position": 2, "name": "AI Фотосесія", "item": `${DOMAIN}/#service` }
    ]
  };

  const imageGallery = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Приклади AI фотосесій GlowMe",
    "description": "Галерея згенерованих AI фото у різних стилях — бізнес, fashion, портрет, casual",
    "image": [
      { "@type": "ImageObject", "contentUrl": `${DOMAIN}/public/images/Image_9bk25v9bk25v9bk2.png`, "name": "Бізнес AI фото", "caption": "AI фотосесія в бізнес стилі для LinkedIn" },
      { "@type": "ImageObject", "contentUrl": `${DOMAIN}/public/images/Image_twx9rmtwx9rmtwx9.png`, "name": "Fashion AI фото", "caption": "Editorial AI фотосесія для Instagram" },
      { "@type": "ImageObject", "contentUrl": `${DOMAIN}/public/images/Image_kxxuetkxxuetkxxu.png`, "name": "Студійний AI портрет", "caption": "Класичний AI портрет" },
      { "@type": "ImageObject", "contentUrl": `${DOMAIN}/public/images/Image_4md6h84md6h84md6.png`, "name": "Casual AI фото", "caption": "Природна AI фотосесія для соцмереж" }
    ]
  };

  return [org, website, service, product, software, howTo, faqSchema, breadcrumb, imageGallery]
    .map(d => `<script type="application/ld+json">${JSON.stringify(d)}</script>`)
    .join('\n');
}

function faqItems() {
  return [
    { q: "Що таке AI фотосесія і як вона працює?", a: "AI фотосесія (нейрофотосесія) — це онлайн-сервіс, який створює професійні знімки за допомогою штучного інтелекту. Ви завантажуєте 2 своїх фото, нейромережа FLUX LoRA навчається на вашій зовнішності і генерує 25 унікальних фото у 4K в обраних стилях. Все відбувається автоматично — без фотографа, студії та виїзду з дому." },
    { q: "Скільки коштує AI фотосесія в GlowMe?", a: "Ціна AI фотосесії в Україні стартує від 499 ₴ за пакет із 25 фото. Тариф Pro — 999 ₴ (додається 4K апскейл), Premium — 1999 ₴ (всі стилі + пріоритетна черга). Оплата в гривнях через LiqPay або міжнародні картки через Stripe." },
    { q: "Скільки часу займає AI фотосесія?", a: "Увесь процес AI фотосесії займає 15–20 хвилин: близько 10 хвилин AI навчається на ваших фото (створює персональну LoRA-модель), далі 5–10 хвилин на генерацію всіх 25 знімків у різних позах та стилях." },
    { q: "Скільки фото потрібно завантажити для AI фотосесії?", a: "Всього 2 фото: одне портретне (обличчя в анфас, добре освітлення) та одне в повний зріст. Цього достатньо, щоб AI створив точну персональну модель і згенерував 25 різних фото." },
    { q: "Яка якість AI фотографій — чи підходять для друку?", a: "Всі фото генеруються в роздільній здатності 4K (близько 2048×2560 px) з AI апскейлом через ESRGAN. Якість достатня для друку у форматі до A3, для LinkedIn, Instagram, рекламних банерів та професійних портфоліо." },
    { q: "Чим GlowMe відрізняється від Remini, Lensa або HeadshotPro?", a: "GlowMe створює персональну AI-модель саме для вас (через FLUX LoRA тренування), а не накладає загальні фільтри як Remini чи Lensa. На відміну від HeadshotPro, ми генеруємо не лише портрети, а й фото в повний зріст та динамічні пози — 25 різноманітних кадрів проти одного типу знімків." },
    { q: "Які способи оплати AI фотосесії підтримуються?", a: "Оплата в гривнях через LiqPay: Visa, Mastercard, Google Pay, Apple Pay, миттєва оплата через Приват24 чи monobank. Також доступний Stripe для іноземних карток (USD, EUR). Telegram-замовлення — через LiqPay в боті." },
    { q: "Чи безпечні мої фото? Де зберігаються дані?", a: "Ваші фото зберігаються на захищеному сервері в Європейському Союзі (Hetzner, Німеччина). Ми не передаємо дані третім сторонам, не публікуємо ваші знімки і не використовуємо для навчання загальних моделей. Фото автоматично видаляються через 30 днів після завершення заявки." },
    { q: "Чи можна замовити AI фотосесію через Telegram?", a: "Так. GlowMe має повнофункціональний Telegram-бот, у якому можна завантажити фото, обрати стиль віртуальної студії, оплатити та отримати 25 готових фото — без виходу з месенджера. Ідеально для швидкого замовлення зі смартфона." },
    { q: "Для чого підходять AI фото від GlowMe?", a: "Для LinkedIn та резюме (бізнес-стиль), Instagram та соцмереж (fashion, casual), сайтів знайомств (tinder, badoo), бізнес-сайтів і портфоліо, подарунків, акторських карток і маркетингових матеріалів. 25 різних фото — це контент на місяці вперед." },
    { q: "Чи можна зробити AI фотосесію для чоловіка?", a: "Так, GlowMe працює однаково добре для чоловіків, жінок і представників non-binary. Бізнес-стиль особливо популярний серед чоловіків: LinkedIn-портрет у костюмі, корпоративне фото для сайту компанії, фото для резюме." },
    { q: "Скільки стилів фотосесії можна обрати?", a: "На старті доступні 4 основні стилі: Бізнес (LinkedIn, резюме), Fashion (editorial для Instagram), Портрет (класична студія) та Casual (природне фото для соцмереж). Кожні 2 тижні додаємо нові стилі — від атмосферного noir до fantasy-образів." },
    { q: "Що робити, якщо результат не сподобається?", a: "Ми даємо безкоштовну доробку: якщо 5+ фото з 25 виявились невдалими, AI перегенерує їх за нашим рахунком. Також діє повернення коштів протягом 7 днів, якщо результат не відповідає заявленій якості." },
    { q: "Коли запускається GlowMe?", a: "Публічний запуск GlowMe — найближчими тижнями. Залиште email у формі підписки — ви серед перших дізнаєтесь про старт і отримаєте персональний промокод на знижку 30% на першу AI фотосесію." }
  ];
}

// ── Sections ────────────────────────────────────────────────────────────────

function header() {
  return `<header class="hdr">
  <nav class="container hdr__nav">
    <a href="/" class="hdr__logo" aria-label="GlowMe">
      <span class="hdr__logo-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
      </span>
      <span class="hdr__logo-text">GlowMe</span>
    </a>
    <div class="hdr__links">
      <a href="#how">Як це працює</a>
      <a href="#styles">Стилі</a>
      <a href="#faq">FAQ</a>
    </div>
  </nav>
</header>`;
}

function hero() {
  return `<section class="hero" id="hero">
  <div class="hero__bg" aria-hidden="true">
    <div class="hero__blob hero__blob--1"></div>
    <div class="hero__blob hero__blob--2"></div>
    <div class="hero__blob hero__blob--3"></div>
  </div>
  <div class="container hero__inner">
    <div class="hero__content">
      <div class="hero__badge">
        <span class="hero__badge-dot"></span>
        Скоро запуск · Early bird −30%
      </div>
      <h1 class="hero__title">
        <span class="grad">25 професійних фото</span><br>
        за 15 хвилин. <br class="hero__br">Без фотографа.
      </h1>
      <p class="hero__sub">
        Завантажте лише <strong>2 фото</strong> — отримайте повноцінну фотосесію у&nbsp;4K. Персональна AI-модель створює саме ваш образ, у різних позах, стилях і світлі.
      </p>
      <div class="hero__actions">
        <a href="#cta" class="btn btn--lg btn--shine">Забронювати знижку 30%</a>
        <a href="#how" class="btn btn--lg btn--ghost">Як це працює →</a>
      </div>
      <ul class="hero__trust-row">
        <li><span class="hero__trust-check">&check;</span>Оплата в гривнях</li>
        <li><span class="hero__trust-check">&check;</span>Дані в ЄС</li>
        <li><span class="hero__trust-check">&check;</span>Telegram-бот</li>
      </ul>
    </div>
    <div class="hero__preview" aria-hidden="true">
      <figure class="hero__card hero__card--1">
        <img src="/public/images/Image_9bk25v9bk25v9bk2.png" alt="AI фотосесія для LinkedIn — бізнес портрет чоловіка у костюмі, згенерований нейромережею GlowMe" loading="eager" decoding="async" fetchpriority="high" width="300" height="400">
        <figcaption>Бізнес</figcaption>
      </figure>
      <figure class="hero__card hero__card--2">
        <img src="/public/images/Image_kxxuetkxxuetkxxu.png" alt="AI студійний портрет дівчини — приклад нейрофотосесії GlowMe з професійним світлом" loading="eager" decoding="async" width="300" height="400">
        <figcaption>Портрет</figcaption>
      </figure>
      <figure class="hero__card hero__card--3">
        <img src="/public/images/Image_twx9rmtwx9rmtwx9.png" alt="Fashion AI фотосесія — editorial знімок для Instagram та портфоліо, створено штучним інтелектом" loading="lazy" decoding="async" width="300" height="400">
        <figcaption>Fashion</figcaption>
      </figure>
      <figure class="hero__card hero__card--4">
        <img src="/public/images/Image_4md6h84md6h84md6.png" alt="Casual AI фото дівчини в кафе — природний стиль нейрофотосесії для соцмереж" loading="lazy" decoding="async" width="300" height="400">
        <figcaption>Casual</figcaption>
      </figure>
      <div class="hero__float-badge">
        <span class="hero__float-num">4K</span>
        <span class="hero__float-lbl">якість</span>
      </div>
    </div>
  </div>
</section>`;
}

function stats() {
  return `<section class="stats">
  <div class="container stats__grid">
    <div class="stats__item">
      <div class="stats__num">15</div>
      <div class="stats__label">хвилин на фотосесію</div>
    </div>
    <div class="stats__item">
      <div class="stats__num">25</div>
      <div class="stats__label">фото у кожній сесії</div>
    </div>
    <div class="stats__item">
      <div class="stats__num">4K</div>
      <div class="stats__label">якість кожного знімка</div>
    </div>
    <div class="stats__item">
      <div class="stats__num">2</div>
      <div class="stats__label">фото для старту</div>
    </div>
  </div>
</section>`;
}

function howItWorks() {
  const steps = [
    { n: '01', icon: '&#x1F4F7;', title: 'Завантажте 2 фото', desc: 'Портрет обличчя та фото в повний зріст. Цього достатньо для AI.' },
    { n: '02', icon: '&#x1F3A8;', title: 'Оберіть стиль', desc: 'Бізнес, fashion, casual, арт — десятки віртуальних студій на вибір.' },
    { n: '03', icon: '&#x1F9E0;', title: 'AI навчається', desc: 'Нейромережа створює персональну модель спеціально для вас.' },
    { n: '04', icon: '&#x2728;', title: '25 фото готові', desc: '5 категорій: повний зріст, портрети, крупний план, динаміка, атмосфера.' },
  ];
  return `<section class="how" id="how">
  <div class="container">
    <h2 class="section-title">Як це працює</h2>
    <p class="section-sub">Від завантаження до готових фото — 4 простих кроки</p>
    <div class="how__grid">
      ${steps.map(s => `<article class="how__step">
        <div class="how__num">${s.n}</div>
        <div class="how__icon">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </article>`).join('')}
    </div>
  </div>
</section>`;
}

function styles() {
  const items = [
    { name: 'Бізнес', desc: 'Для LinkedIn, резюме, корпоративних профілів та бізнес-сайтів', img: '/public/images/Image_9bk25v9bk25v9bk2.png', tag: 'LinkedIn · Резюме', alt: 'AI фотосесія в бізнес-стилі — професійне фото для LinkedIn, резюме та корпоративного профілю' },
    { name: 'Fashion', desc: 'Глянцевий editorial стиль для Instagram та портфоліо', img: '/public/images/Image_twx9rmtwx9rmtwx9.png', tag: 'Instagram · Editorial', alt: 'Fashion AI фотосесія в editorial стилі — глянцеве фото для Instagram та модельного портфоліо' },
    { name: 'Портрет', desc: 'Класичні студійні портрети з професійним світлом', img: '/public/images/Image_kxxuetkxxuetkxxu.png', tag: 'Студія · Класика', alt: 'Студійний AI портрет — класична фотосесія з професійним студійним світлом, створена нейромережею' },
    { name: 'Casual', desc: 'Природний стиль для соцмереж, сайтів знайомств та блогів', img: '/public/images/Image_4md6h84md6h84md6.png', tag: 'Соцмережі · Блог', alt: 'Casual AI фотосесія — природне фото для соцмереж, сайтів знайомств та блогу' },
  ];
  return `<section class="styles" id="styles">
  <div class="container">
    <div class="section-eyebrow">Каталог віртуальних студій</div>
    <h2 class="section-title">Стилі <span class="grad">фотосесій</span></h2>
    <p class="section-sub">Оберіть свій стиль або спробуйте кілька. Кожен стиль — окрема віртуальна студія з унікальним світлом та обстановкою.</p>
    <div class="styles__grid">
      ${items.map((s, i) => `<article class="styles__card" style="--delay:${i * 80}ms">
        <div class="styles__preview">
          <img src="${s.img}" alt="${s.alt}" loading="lazy" decoding="async" width="400" height="500">
          <div class="styles__shine"></div>
          <span class="styles__tag">${s.tag}</span>
        </div>
        <div class="styles__body">
          <h3>${s.name}</h3>
          <p>${s.desc}</p>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>`;
}

function useCases() {
  const items = [
    { icon: '&#x1F4BC;', title: 'LinkedIn & резюме', desc: 'Вигравайте конкурс резюме з першого погляду' },
    { icon: '&#x1F4F8;', title: 'Instagram контент', desc: '25 фото = місяць постів без знімань' },
    { icon: '&#x1F495;', title: 'Сайти знайомств', desc: 'Профіль, на який хочеться натиснути' },
    { icon: '&#x1F310;', title: 'Ваш сайт і бренд', desc: 'Особистий бренд, який запам\'ятовується' },
    { icon: '&#x1F381;', title: 'Незвичний подарунок', desc: 'Фотосесія за 15 хвилин — просто WOW' },
    { icon: '&#x1F3AD;', title: 'Ваше портфоліо', desc: 'Для акторів, моделей, креаторів' },
  ];
  return `<section class="use">
  <div class="container">
    <div class="section-eyebrow">Сценарії використання</div>
    <h2 class="section-title">Для чого ваші <span class="grad">нові фото</span></h2>
    <p class="section-sub">Одна фотосесія GlowMe замінює десятки звичайних. Ось лише частина того, де вони стануть у пригоді.</p>
    <div class="use__grid">
      ${items.map(u => `<article class="use__card">
        <div class="use__icon">${u.icon}</div>
        <h3>${u.title}</h3>
        <p>${u.desc}</p>
      </article>`).join('')}
    </div>
  </div>
</section>`;
}

function advantages() {
  const items = [
    { icon: '&#x1F3AF;', title: 'Персональна AI-модель', desc: 'Не фільтр, не шаблон. Нейромережа навчається саме на вас і зберігає вашу унікальність.' },
    { icon: '&#x1F4B0;', title: 'У 5 разів дешевше', desc: 'Студійна фотосесія від 3000 грн. AI фотосесія від 499 грн з кращим результатом за обсягом.' },
    { icon: '&#x26A1;', title: 'Готово за 15 хвилин', desc: 'Не потрібно їхати в студію, чекати обробку тижнями. Завантажили — отримали.' },
    { icon: '&#x1F4F1;', title: 'Telegram-бот', desc: 'Замовляйте прямо в Telegram. Завантажте фото, оберіть стиль — бот зробить все сам.' },
    { icon: '&#x1F512;', title: 'Повна приватність', desc: 'Фото на захищеному сервері в ЄС. Не передаємо дані, не використовуємо для загальних моделей.' },
    { icon: '&#x1F4B3;', title: 'Оплата в гривнях', desc: 'LiqPay, Visa, Mastercard, Google Pay, Apple Pay. Без конвертації, без зайвих комісій.' },
  ];
  return `<section class="adv">
  <div class="container">
    <h2 class="section-title">Чому GlowMe</h2>
    <p class="section-sub">Не просто ще один AI-фільтр. Повноцінна фотосесія нового покоління.</p>
    <div class="adv__grid">
      ${items.map(a => `<article class="adv__card">
        <div class="adv__icon">${a.icon}</div>
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
      </article>`).join('')}
    </div>
  </div>
</section>`;
}

function comparison() {
  const yes = '<span class="cmp__yes" aria-label="так"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>';
  const no = '<span class="cmp__no" aria-label="ні"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>';
  const partial = '<span class="cmp__partial" aria-label="частково">~</span>';
  const rows = [
    { f: '25 різноманітних фото', glowme: yes, remini: no, hsp: no },
    { f: 'Персональна AI-модель', glowme: yes, remini: no, hsp: no },
    { f: 'Повний зріст, не тільки обличчя', glowme: yes, remini: no, hsp: partial },
    { f: '4K якість з апскейлом', glowme: yes, remini: no, hsp: yes },
    { f: 'Контрольовані пози', glowme: yes, remini: no, hsp: no },
    { f: 'Оплата в гривнях', glowme: yes, remini: no, hsp: no },
    { f: 'Telegram-бот', glowme: yes, remini: no, hsp: no },
  ];
  return `<section class="cmp">
  <div class="container">
    <div class="section-eyebrow">Чесне порівняння</div>
    <h2 class="section-title">GlowMe <span class="grad">vs інші сервіси</span></h2>
    <p class="section-sub">Ми не приховуємо — ось як ми стоїмо проти популярних альтернатив.</p>
    <div class="cmp__grid">
      <div class="cmp__col cmp__col--label" aria-hidden="true">
        <div class="cmp__head"></div>
        ${rows.map(r => `<div class="cmp__row-label">${r.f}</div>`).join('')}
        <div class="cmp__row-label cmp__row-price">Ціна</div>
      </div>
      <div class="cmp__col cmp__col--hl">
        <div class="cmp__badge-top">&#x2B50; Найкращий вибір</div>
        <div class="cmp__head">
          <div class="cmp__head-name">GlowMe</div>
          <div class="cmp__head-sub">AI фотосесія нового покоління</div>
        </div>
        ${rows.map(r => `<div class="cmp__row"><span class="cmp__row-m">${r.f}</span>${r.glowme}</div>`).join('')}
        <div class="cmp__row cmp__row-price"><span class="cmp__row-m">Ціна</span><span class="cmp__price cmp__price--hl">від 499 ₴</span></div>
      </div>
      <div class="cmp__col">
        <div class="cmp__head">
          <div class="cmp__head-name">Remini / Lensa</div>
          <div class="cmp__head-sub">AI фільтри для селфі</div>
        </div>
        ${rows.map(r => `<div class="cmp__row"><span class="cmp__row-m">${r.f}</span>${r.remini}</div>`).join('')}
        <div class="cmp__row cmp__row-price"><span class="cmp__row-m">Ціна</span><span class="cmp__price">$3–8</span></div>
      </div>
      <div class="cmp__col">
        <div class="cmp__head">
          <div class="cmp__head-name">HeadshotPro</div>
          <div class="cmp__head-sub">Хедшоти для LinkedIn</div>
        </div>
        ${rows.map(r => `<div class="cmp__row"><span class="cmp__row-m">${r.f}</span>${r.hsp}</div>`).join('')}
        <div class="cmp__row cmp__row-price"><span class="cmp__row-m">Ціна</span><span class="cmp__price">$29–49</span></div>
      </div>
    </div>
  </div>
</section>`;
}


function faq() {
  const items = faqItems();
  return `<section class="faq" id="faq">
  <div class="container">
    <h2 class="section-title">Часті питання</h2>
    <div class="faq__list">
      ${items.map((f, i) => `<details class="faq__item"${i === 0 ? ' open' : ''}>
        <summary class="faq__q">${f.q}</summary>
        <div class="faq__a">${f.a}</div>
      </details>`).join('')}
    </div>
  </div>
</section>`;
}

function cta() {
  return `<section class="cta" id="cta">
  <div class="cta__bg" aria-hidden="true"></div>
  <div class="container cta__inner">
    <div class="cta__coming">
      <span class="cta__pulse"></span>
      Запуск — вже скоро
    </div>
    <h2>Заберіть <span class="cta__hl">−30%</span> на першу фотосесію</h2>
    <p>GlowMe стартує зовсім скоро. Залиште email і станьте серед перших 500 клієнтів, які отримають персональний промокод на знижку <strong>30%</strong> та доступ до бета-версії.</p>
    <div class="cta__form">
      <input type="email" placeholder="your@email.com" class="cta__input" aria-label="Email для сповіщення про запуск">
      <button class="btn btn--lg btn--shine" type="button" onclick="handleSubscribe(this)">Забронювати знижку</button>
    </div>
    <ul class="cta__bullets">
      <li><span class="cta__bullet-ic">&check;</span>Персональний промокод −30%</li>
      <li><span class="cta__bullet-ic">&check;</span>Ранній доступ до бети</li>
      <li><span class="cta__bullet-ic">&check;</span>Без спаму — тільки запуск</li>
    </ul>
  </div>
</section>`;
}

function seoContent() {
  return `<section class="seo" aria-label="Про AI фотосесію GlowMe">
  <div class="container seo__inner">
    <h2>AI Фотосесія онлайн в Україні — як нейромережа створює професійні фото</h2>
    <p><strong>AI фотосесія</strong> — це новий формат професійної фотозйомки без фотографа і студії. На платформі <strong>GlowMe</strong> ви отримуєте 25 унікальних знімків у <strong>4K якості</strong> за 15 хвилин, просто завантаживши 2 своїх фото. Наша нейромережа навчається саме на вашій зовнішності (через технологію <em>FLUX LoRA</em>), тож усі фото виглядають природно та зберігають ваші риси — на відміну від AI-фільтрів на кшталт Remini чи Lensa.</p>

    <h3>Чому AI фотосесія вигідніша за звичайну</h3>
    <p>Традиційна студійна фотосесія в Україні коштує від 3000 ₴ і триває 2–3 години, плюс тиждень на обробку. <strong>Нейрофотосесія від GlowMe</strong> коштує від 499 ₴ і готова за 15 хвилин. Ви отримуєте більше різноманіття: повний зріст, крупний план, динамічні пози, різні стилі й віртуальні студії — усе в одному пакеті. Це ідеально для <strong>LinkedIn-профілю, резюме, Instagram-контенту, сайтів знайомств і бізнес-портфоліо</strong>.</p>

    <h3>Які стилі AI фотосесій доступні</h3>
    <p>GlowMe пропонує чотири основні стилі на старті: <strong>Бізнес</strong> (корпоративні хедшоти для LinkedIn та CV), <strong>Fashion</strong> (глянцевий editorial для Instagram), <strong>Портрет</strong> (класика зі студійним світлом) та <strong>Casual</strong> (природний стиль для соцмереж). Кожен стиль — окрема віртуальна студія з унікальним світлом, обстановкою та гардеробом. Після запуску плануємо додавати по 2 нові стилі щомісяця: fantasy, noir, vintage, sport та інші.</p>

    <h3>Безпека та приватність ваших фото</h3>
    <p>Усі завантажені фото зберігаються на захищених серверах у <strong>Європейському Союзі (Німеччина)</strong> відповідно до GDPR. Ми не передаємо ваші дані третім сторонам, не публікуємо результати і не використовуємо ваші знімки для навчання загальних моделей. Персональна AI-модель, створена для вас, видаляється через 30 днів після завершення заявки або на вашу вимогу.</p>

    <h3>Оплата AI фотосесії в гривнях</h3>
    <p>GlowMe приймає оплату в гривнях через <strong>LiqPay</strong>: Visa, Mastercard, Google Pay, Apple Pay, Приват24, monobank. Для іноземних клієнтів доступний <strong>Stripe</strong> (USD, EUR). Замовити можна на сайті або прямо в <strong>Telegram-боті</strong> — без установки додатків.</p>
  </div>
</section>`;
}

function footer() {
  return `<footer class="ftr">
  <div class="container ftr__inner">
    <div class="ftr__brand">
      <div class="hdr__logo">
        <span class="hdr__logo-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
        </span>
        <span class="hdr__logo-text">GlowMe</span>
      </div>
      <p>&copy; ${new Date().getFullYear()} GlowMe. AI Фотосесія нового покоління.</p>
    </div>
    <div class="ftr__links">
      <a href="#how">Як це працює</a>
      <a href="#styles">Стилі</a>
      <a href="#faq">FAQ</a>
    </div>
    <div class="ftr__links">
      <a href="mailto:hello@glowme.com.ua">hello@glowme.com.ua</a>
    </div>
  </div>
</footer>`;
}

// ── CSS ─────────────────────────────────────────────────────────────────────

function css() {
  return `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--c-bg:#faf9ff;--c-text:#1e1b2e;--c-muted:#6b7280;--c-violet:#7c3aed;--c-violet-d:#6d28d9;--c-violet-l:#ede9fe;--c-pink:#ec4899;--c-border:#e5e7eb;--c-white:#fff;--radius:14px;--radius-lg:22px;--max-w:1200px;--shadow-brand:0 20px 60px -20px rgba(124,58,237,.45)}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:var(--c-text);background:var(--c-bg);line-height:1.6;font-size:16px;overflow-x:hidden}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.container{max-width:var(--max-w);margin:0 auto;padding:0 20px}
.section-eyebrow{display:block;text-align:center;font-size:.78rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--c-violet);margin-bottom:12px}
.section-title{font-size:clamp(1.9rem,4.2vw,2.75rem);font-weight:800;text-align:center;margin-bottom:.6rem;letter-spacing:-.02em}
.section-sub{color:var(--c-muted);text-align:center;max-width:620px;margin:0 auto 3rem;font-size:1.05rem}
.grad{background:linear-gradient(135deg,var(--c-violet) 0%,#a855f7 50%,var(--c-pink) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}

.btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 28px;border-radius:var(--radius);font-weight:600;font-size:.95rem;border:none;cursor:pointer;transition:all .25s cubic-bezier(.4,0,.2,1);background:linear-gradient(135deg,var(--c-violet),#9333ea);color:#fff;text-decoration:none;box-shadow:0 4px 14px rgba(124,58,237,.35);overflow:hidden}
.btn:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgba(124,58,237,.45)}
.btn--outline{background:transparent;border:2px solid var(--c-violet);color:var(--c-violet);box-shadow:none}
.btn--outline:hover{background:var(--c-violet-l)}
.btn--ghost{background:transparent;color:var(--c-text);box-shadow:none;border:1px solid var(--c-border)}
.btn--ghost:hover{background:var(--c-white);border-color:var(--c-violet);color:var(--c-violet)}
.btn--lg{padding:15px 34px;font-size:1rem}
.btn--shine::before{content:"";position:absolute;top:0;left:-120%;width:60%;height:100%;background:linear-gradient(110deg,transparent 25%,rgba(255,255,255,.55) 50%,transparent 75%);transform:skewX(-20deg);animation:shine 3.2s ease-in-out infinite}
@keyframes shine{0%,40%{left:-120%}70%,100%{left:160%}}

/* Header */
.hdr{position:sticky;top:0;z-index:100;background:rgba(250,249,255,.8);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--c-border)}
.hdr__nav{display:flex;align-items:center;justify-content:space-between;height:64px}
.hdr__logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.2rem}
.hdr__logo-icon{width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--c-violet),var(--c-pink));color:#fff;border-radius:10px;box-shadow:0 4px 14px rgba(124,58,237,.35)}
.hdr__links{display:flex;align-items:center;gap:26px;font-size:.9rem;font-weight:500}
.hdr__links a:not(.btn):hover{color:var(--c-violet)}

/* Hero */
.hero{position:relative;padding:90px 0 80px;background:linear-gradient(180deg,#f6f1ff 0%,var(--c-bg) 100%);overflow:hidden}
.hero__bg{position:absolute;inset:0;z-index:0;pointer-events:none}
.hero__blob{position:absolute;border-radius:50%;filter:blur(80px);opacity:.55}
.hero__blob--1{width:420px;height:420px;background:#c4b5fd;top:-120px;left:-120px;animation:float 14s ease-in-out infinite}
.hero__blob--2{width:360px;height:360px;background:#fbcfe8;top:40%;right:-100px;animation:float 18s ease-in-out infinite reverse}
.hero__blob--3{width:280px;height:280px;background:#a7f3d0;bottom:-80px;left:30%;opacity:.3;animation:float 22s ease-in-out infinite}
@keyframes float{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(40px,-30px) scale(1.08)}}
.hero__inner{position:relative;z-index:1;display:grid;grid-template-columns:1.05fr 1fr;gap:60px;align-items:center}
.hero__content{max-width:560px}
.hero__badge{display:inline-flex;align-items:center;gap:8px;padding:7px 16px;border-radius:50px;background:#fff;color:var(--c-violet);font-size:.82rem;font-weight:700;margin-bottom:22px;border:1px solid rgba(124,58,237,.2);box-shadow:0 4px 14px rgba(124,58,237,.12)}
.hero__badge-dot{width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 0 0 rgba(16,185,129,.6);animation:pulse-dot 2s infinite}
@keyframes pulse-dot{0%{box-shadow:0 0 0 0 rgba(16,185,129,.6)}70%{box-shadow:0 0 0 8px rgba(16,185,129,0)}100%{box-shadow:0 0 0 0 rgba(16,185,129,0)}}
.hero__title{font-size:clamp(2.2rem,5.2vw,3.5rem);font-weight:800;line-height:1.1;margin-bottom:22px;letter-spacing:-.025em}
.hero__sub{font-size:1.08rem;color:#4a4759;line-height:1.7;margin-bottom:28px;max-width:500px}
.hero__actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px}
.hero__trust-row{list-style:none;display:flex;gap:22px;flex-wrap:wrap;font-size:.88rem;color:var(--c-muted);font-weight:500}
.hero__trust-row li{display:flex;align-items:center;gap:6px}
.hero__trust-check{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#dcfce7;color:#059669;font-size:.7rem;font-weight:700}

/* Hero preview collage */
.hero__preview{position:relative;height:520px}
.hero__card{position:absolute;border-radius:var(--radius-lg);overflow:hidden;box-shadow:0 25px 60px -15px rgba(30,27,46,.35);transition:transform .4s cubic-bezier(.4,0,.2,1);background:#fff}
.hero__card img{width:100%;height:100%;object-fit:cover}
.hero__card figcaption{position:absolute;bottom:10px;left:10px;padding:4px 12px;border-radius:50px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);font-size:.72rem;font-weight:700;color:var(--c-violet);letter-spacing:.5px}
.hero__card--1{width:45%;height:58%;top:0;left:5%;transform:rotate(-5deg);z-index:2;animation:floatCard 8s ease-in-out infinite}
.hero__card--2{width:44%;height:56%;top:12%;right:2%;transform:rotate(4deg);z-index:3;animation:floatCard 9s ease-in-out infinite .8s}
.hero__card--3{width:42%;height:52%;bottom:5%;left:0%;transform:rotate(3deg);z-index:1;animation:floatCard 10s ease-in-out infinite .4s}
.hero__card--4{width:46%;height:44%;bottom:0;right:5%;transform:rotate(-4deg);z-index:2;animation:floatCard 11s ease-in-out infinite 1.2s}
@keyframes floatCard{0%,100%{transform:rotate(var(--r,-5deg)) translateY(0)}50%{transform:rotate(var(--r,-5deg)) translateY(-10px)}}
.hero__card--1{--r:-5deg}.hero__card--2{--r:4deg}.hero__card--3{--r:3deg}.hero__card--4{--r:-4deg}
.hero__card:hover{transform:rotate(0) scale(1.04);z-index:10}
.hero__float-badge{position:absolute;top:45%;left:50%;transform:translate(-50%,-50%) rotate(-8deg);z-index:5;background:linear-gradient(135deg,var(--c-violet),var(--c-pink));color:#fff;padding:14px 18px;border-radius:50%;width:90px;height:90px;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:var(--shadow-brand);animation:wobble 4s ease-in-out infinite}
@keyframes wobble{0%,100%{transform:translate(-50%,-50%) rotate(-8deg)}50%{transform:translate(-50%,-50%) rotate(4deg)}}
.hero__float-num{font-size:1.5rem;font-weight:800;line-height:1}
.hero__float-lbl{font-size:.7rem;font-weight:600;opacity:.95;margin-top:2px}

/* Stats */
.stats{padding:40px 0;border-top:1px solid var(--c-border);border-bottom:1px solid var(--c-border);background:var(--c-white)}
.stats__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center}
.stats__num{font-size:clamp(2.2rem,4.4vw,3rem);font-weight:800;background:linear-gradient(135deg,var(--c-violet),var(--c-pink));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-.02em}
.stats__label{color:var(--c-muted);font-size:.88rem;font-weight:500}

/* How it works */
.how{padding:90px 0}
.how__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.how__step{position:relative;background:var(--c-white);border:1px solid var(--c-border);border-radius:var(--radius);padding:32px 24px 24px;text-align:center;transition:all .3s cubic-bezier(.4,0,.2,1)}
.how__step::before{content:"";position:absolute;inset:0;border-radius:var(--radius);padding:1px;background:linear-gradient(135deg,var(--c-violet),var(--c-pink));-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0;transition:opacity .3s}
.how__step:hover{transform:translateY(-4px);box-shadow:0 14px 40px rgba(124,58,237,.15)}
.how__step:hover::before{opacity:1}
.how__num{position:absolute;top:14px;right:18px;font-size:.85rem;font-weight:800;color:var(--c-violet);opacity:.3;letter-spacing:.5px}
.how__icon{font-size:2.2rem;margin-bottom:14px;display:inline-block;width:56px;height:56px;line-height:56px;background:linear-gradient(135deg,var(--c-violet-l),#fce7f3);border-radius:16px}
.how__step h3{font-size:1.05rem;font-weight:700;margin-bottom:8px}
.how__step p{color:var(--c-muted);font-size:.88rem;line-height:1.55}

/* Styles */
.styles{padding:90px 0;background:var(--c-white);position:relative}
.styles__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.styles__card{position:relative;border-radius:var(--radius-lg);overflow:hidden;transition:all .35s cubic-bezier(.4,0,.2,1);background:var(--c-white);box-shadow:0 4px 18px rgba(30,27,46,.06);border:1px solid transparent}
.styles__card:hover{transform:translateY(-8px);box-shadow:0 25px 60px -15px rgba(124,58,237,.3);border-color:rgba(124,58,237,.2)}
.styles__preview{position:relative;aspect-ratio:4/5;overflow:hidden;background:#f4f0ff}
.styles__preview img{width:100%;height:100%;object-fit:cover;transition:transform .6s cubic-bezier(.4,0,.2,1)}
.styles__card:hover .styles__preview img{transform:scale(1.06)}
.styles__shine{position:absolute;inset:0;background:linear-gradient(120deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);transform:translateX(-120%);transition:transform .8s cubic-bezier(.4,0,.2,1);pointer-events:none}
.styles__card:hover .styles__shine{transform:translateX(120%)}
.styles__tag{position:absolute;top:14px;left:14px;padding:5px 12px;border-radius:50px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);font-size:.72rem;font-weight:700;color:var(--c-violet);letter-spacing:.3px}
.styles__body{padding:20px 20px 22px}
.styles__body h3{font-size:1.15rem;font-weight:800;margin-bottom:6px;letter-spacing:-.01em}
.styles__body p{color:var(--c-muted);font-size:.88rem;line-height:1.55}

/* Use cases */
.use{padding:90px 0;background:linear-gradient(180deg,var(--c-bg) 0%,#f4f0ff 100%)}
.use__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.use__card{background:var(--c-white);border:1px solid var(--c-border);border-radius:var(--radius);padding:26px 22px;transition:all .3s;display:flex;gap:14px;align-items:flex-start}
.use__card:hover{transform:translateY(-3px);border-color:rgba(124,58,237,.35);box-shadow:0 12px 30px rgba(124,58,237,.1)}
.use__icon{flex-shrink:0;width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--c-violet-l),#fce7f3);border-radius:12px;font-size:1.4rem}
.use__card h3{font-size:1rem;font-weight:700;margin-bottom:4px}
.use__card p{color:var(--c-muted);font-size:.87rem;line-height:1.5}

/* Advantages */
.adv{padding:90px 0}
.adv__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.adv__card{background:var(--c-white);border:1px solid var(--c-border);border-radius:var(--radius);padding:30px 26px;transition:all .3s;position:relative;overflow:hidden}
.adv__card::after{content:"";position:absolute;top:-40px;right:-40px;width:120px;height:120px;background:radial-gradient(circle,rgba(124,58,237,.12),transparent 70%);opacity:0;transition:opacity .3s}
.adv__card:hover{border-color:var(--c-violet);box-shadow:0 14px 40px rgba(124,58,237,.12);transform:translateY(-3px)}
.adv__card:hover::after{opacity:1}
.adv__icon{font-size:2rem;margin-bottom:14px;display:inline-block;width:54px;height:54px;line-height:54px;text-align:center;background:linear-gradient(135deg,var(--c-violet-l),#fce7f3);border-radius:14px}
.adv__card h3{font-size:1.05rem;font-weight:700;margin-bottom:8px}
.adv__card p{color:var(--c-muted);font-size:.88rem;line-height:1.55}

/* Comparison */
.cmp{padding:90px 0;background:linear-gradient(180deg,#f4f0ff 0%,var(--c-white) 100%)}
.cmp__grid{display:grid;grid-template-columns:1.3fr 1.1fr 1fr 1fr;max-width:1100px;margin:0 auto;align-items:stretch;gap:0;padding-top:20px}
.cmp__col{display:flex;flex-direction:column;position:relative;padding:0 20px;border-radius:var(--radius-lg);background:var(--c-white);border:1px solid var(--c-border);margin-left:-1px}
.cmp__col--label{background:transparent;padding-right:0;padding-left:4px;border:none}
.cmp__col--hl{background:linear-gradient(180deg,#fff 0%,#faf7ff 100%);border:2px solid transparent;background-clip:padding-box;position:relative;z-index:2;box-shadow:0 25px 60px -15px rgba(124,58,237,.3)}
.cmp__col--hl::before{content:"";position:absolute;inset:-2px;border-radius:var(--radius-lg);padding:2px;background:linear-gradient(135deg,var(--c-violet),var(--c-pink));-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
.cmp__badge-top{position:absolute;top:-16px;left:50%;transform:translateX(-50%);padding:6px 18px;border-radius:50px;background:linear-gradient(135deg,var(--c-violet),var(--c-pink));color:#fff;font-size:.72rem;font-weight:800;letter-spacing:.5px;text-transform:uppercase;white-space:nowrap;box-shadow:0 8px 20px rgba(124,58,237,.4);z-index:3}
.cmp__head{height:108px;padding:20px 0 18px;text-align:center;border-bottom:1px solid var(--c-border);display:flex;flex-direction:column;justify-content:center;box-sizing:border-box}
.cmp__col--label .cmp__head{border-bottom-color:transparent}
.cmp__head-name{font-size:1.1rem;font-weight:800;letter-spacing:-.01em}
.cmp__col--hl .cmp__head-name{background:linear-gradient(135deg,var(--c-violet),var(--c-pink));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.cmp__head-sub{font-size:.78rem;color:var(--c-muted);margin-top:4px;font-weight:500}
.cmp__row{display:flex;align-items:center;justify-content:center;height:56px;font-size:.9rem;border-top:1px solid var(--c-border);box-sizing:border-box}
.cmp__head + .cmp__row{border-top-color:transparent}
.cmp__row-label{display:flex;align-items:center;height:56px;font-weight:600;font-size:.92rem;color:var(--c-text);padding-right:16px;border-top:1px solid var(--c-border);box-sizing:border-box}
.cmp__head + .cmp__row-label{border-top-color:transparent}
.cmp__row-m{display:none;flex:1;font-weight:600;font-size:.85rem;color:var(--c-text);padding-right:10px}
.cmp__row-price{font-weight:700}
.cmp__price{font-size:1rem;font-weight:800;color:var(--c-text)}
.cmp__price--hl{font-size:1.25rem;background:linear-gradient(135deg,var(--c-violet),var(--c-pink));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.cmp__yes{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);color:#fff;box-shadow:0 4px 10px rgba(16,185,129,.35)}
.cmp__col--hl .cmp__yes{background:linear-gradient(135deg,var(--c-violet),var(--c-pink));box-shadow:0 4px 12px rgba(124,58,237,.4)}
.cmp__no{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:#fee2e2;color:#dc2626;opacity:.85}
.cmp__partial{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:#fef3c7;color:#b45309;font-weight:800;font-size:1rem;line-height:1}

/* FAQ */
.faq{padding:80px 0;background:var(--c-white)}
.faq__list{max-width:760px;margin:0 auto}
.faq__item{border:1px solid var(--c-border);border-radius:var(--radius);margin-bottom:8px;overflow:hidden;transition:all .2s}
.faq__item[open]{border-color:var(--c-violet);box-shadow:0 4px 20px rgba(124,58,237,.08)}
.faq__q{padding:18px 24px;font-weight:600;font-size:.95rem;cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between}
.faq__q::after{content:'+';font-size:1.4rem;color:var(--c-violet);font-weight:300;transition:transform .2s}
.faq__item[open] .faq__q::after{transform:rotate(45deg)}
.faq__q::-webkit-details-marker{display:none}
.faq__a{padding:0 24px 18px;color:var(--c-muted);font-size:.9rem;line-height:1.7}

/* CTA */
.cta{position:relative;padding:100px 0;background:linear-gradient(135deg,#4c1d95 0%,var(--c-violet) 45%,var(--c-pink) 100%);color:#fff;text-align:center;overflow:hidden}
.cta__bg{position:absolute;inset:0;background-image:radial-gradient(circle at 20% 20%,rgba(255,255,255,.18),transparent 40%),radial-gradient(circle at 80% 80%,rgba(255,255,255,.12),transparent 40%);pointer-events:none}
.cta__inner{position:relative;z-index:1;max-width:620px;margin:0 auto}
.cta__inner h2{font-size:clamp(1.75rem,4.4vw,2.6rem);font-weight:800;margin-bottom:14px;letter-spacing:-.02em;line-height:1.15}
.cta__hl{background:linear-gradient(135deg,#fef3c7,#fde68a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:900}
.cta__inner p{opacity:.92;font-size:1.05rem;margin-bottom:28px;line-height:1.65}
.cta__inner p strong{color:#fef3c7}
.cta__form{display:flex;gap:8px;max-width:520px;margin:0 auto 22px}
.cta__input{flex:1;padding:15px 22px;border:2px solid rgba(255,255,255,.35);border-radius:var(--radius);background:rgba(255,255,255,.12);color:#fff;font-size:.95rem;outline:none;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);transition:all .25s}
.cta__input::placeholder{color:rgba(255,255,255,.65)}
.cta__input:focus{border-color:#fff;background:rgba(255,255,255,.18)}
.cta .btn{background:#fff;color:var(--c-violet);flex-shrink:0;box-shadow:0 6px 20px rgba(0,0,0,.2)}
.cta .btn:hover{background:#fef3c7;color:#4c1d95;box-shadow:0 10px 30px rgba(0,0,0,.25)}
.cta__bullets{list-style:none;display:flex;gap:24px;flex-wrap:wrap;justify-content:center;font-size:.88rem;opacity:.95;font-weight:500}
.cta__bullets li{display:flex;align-items:center;gap:6px}
.cta__bullet-ic{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.25);font-size:.75rem;font-weight:700}
.cta__coming{display:inline-flex;align-items:center;gap:8px;padding:7px 20px;border-radius:50px;background:rgba(255,255,255,.15);color:#fff;font-size:.82rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px;border:1px solid rgba(255,255,255,.3);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.cta__pulse{width:8px;height:8px;border-radius:50%;background:#fef3c7;box-shadow:0 0 0 0 rgba(254,243,199,.7);animation:pulse-dot 2s infinite}

/* SEO content block */
.seo{padding:70px 0;background:var(--c-white);border-top:1px solid var(--c-border)}
.seo__inner{max-width:820px;margin:0 auto}
.seo__inner h2{font-size:clamp(1.5rem,3.5vw,2rem);font-weight:800;margin-bottom:20px;letter-spacing:-.02em}
.seo__inner h3{font-size:1.15rem;font-weight:700;margin:28px 0 10px;color:var(--c-text)}
.seo__inner p{color:#4a4759;font-size:.98rem;line-height:1.75;margin-bottom:12px}
.seo__inner strong{color:var(--c-text);font-weight:700}
.seo__inner em{font-style:normal;color:var(--c-violet);font-weight:600}

/* Footer */
.ftr{padding:40px 0;border-top:1px solid var(--c-border)}
.ftr__inner{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px}
.ftr__brand p{color:var(--c-muted);font-size:.8rem;margin-top:8px}
.ftr__links{display:flex;gap:20px;font-size:.85rem;color:var(--c-muted)}
.ftr__links a:hover{color:var(--c-violet)}

/* Mobile */
@media(max-width:1024px){
  .hero__inner{grid-template-columns:1fr;gap:40px;text-align:center}
  .hero__content{margin:0 auto}
  .hero__sub{margin-left:auto;margin-right:auto}
  .hero__actions,.hero__trust-row{justify-content:center}
  .hero__preview{max-width:520px;margin:0 auto;height:460px;width:100%}
  .how__grid{grid-template-columns:repeat(2,1fr)}
  .styles__grid{grid-template-columns:repeat(2,1fr)}
  .use__grid{grid-template-columns:repeat(2,1fr)}
  .adv__grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:640px){
  .stats__grid{grid-template-columns:repeat(2,1fr);gap:20px}
  .how__grid{grid-template-columns:1fr}
  .styles__grid{grid-template-columns:1fr;max-width:380px;margin:0 auto}
  .use__grid{grid-template-columns:1fr}
  .adv__grid{grid-template-columns:1fr}
  .cmp__grid{grid-template-columns:1fr;max-width:480px;margin:0 auto;gap:16px}
  .cmp__col{margin-left:0;border-radius:var(--radius-lg)}
  .cmp__col--label{display:none}
  .cmp__col--hl{transform:none;order:-1}
  .cmp__row{justify-content:space-between;padding:0 4px}
  .cmp__row-m{display:flex}
  .cmp__row-price .cmp__row-m{font-weight:700}
  .cta__form{flex-direction:column}
  .cta__bullets{gap:14px;flex-direction:column;align-items:center}
  .hdr__links a:not(.btn){display:none}
  .hero{padding:50px 0 40px}
  .hero__preview{height:380px}
  .hero__float-badge{width:76px;height:76px}
  .hero__float-num{font-size:1.2rem}
  .hero__trust-row{gap:14px;font-size:.82rem}
  .hero__br{display:none}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
}
`;
}

// ── JS ──────────────────────────────────────────────────────────────────────

function js() {
  return `
function handleSubscribe(btn) {
  var input = btn.parentElement.querySelector('input');
  var email = input.value.trim();
  if (!email || !email.includes('@')) {
    input.style.borderColor='#f87171';
    input.focus();
    return;
  }
  btn.textContent = 'Дякуємо! \\u2764';
  btn.disabled = true;
  input.disabled = true;
  input.style.borderColor = 'rgba(255,255,255,.6)';
  // In production, send to API
  try {
    fetch('/api/subscribe', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email: email})
    }).catch(function(){});
  } catch(e) {}
}
`;
}

module.exports = { renderPage };
