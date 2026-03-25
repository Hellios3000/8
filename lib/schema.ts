export const getWebStudioSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Working Solutions",
  "image": "https://workingsolutions.com.ua/logo.png",
  "@id": "https://workingsolutions.com.ua",
  "url": "https://workingsolutions.com.ua",
  "telephone": "+380000000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Вулиця Хрещатик, 1",
    "addressLocality": "Київ",
    "postalCode": "01001",
    "addressCountry": "UA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.4501,
    "longitude": 30.5234
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "sameAs": [
    "https://www.facebook.com/workingsolutions",
    "https://www.instagram.com/workingsolutions",
    "https://www.linkedin.com/company/workingsolutions"
  ]
});

export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Скільки часу займає розробка сайту?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Розробка лендінгу займає від 10 робочих днів. Складні корпоративні сайти або інтернет-магазини — від 25 днів."
      }
    },
    {
      "@type": "Question",
      "name": "Яку CMS ви використовуєте?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ми працюємо з WordPress, Laravel, OpenCart та Shopify, залежно від завдань вашого бізнесу."
      }
    }
  ]
});