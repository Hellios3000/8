import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { getWebStudioSchema, getFAQSchema } from '../lib/schema';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Working Solutions — Веб-студія повного циклу | Розробка сайтів під ключ',
  description: 'Ми створюємо високоефективні сайти, які перетворюють трафік на прибуток. Розробка лендінгів, корпоративних сайтів та інтернет-магазинів у Києві та по всій Україні.',
  keywords: ['Розробка сайтів під ключ', 'Створення лендінг пейдж ціна', 'Замовити корпоративний сайт', 'Веб-студія Київ', 'Послуги веб-дизайну'],
  alternates: {
    canonical: 'https://workingsolutions.com.ua',
  },
  openGraph: {
    title: 'Working Solutions — Створення сайтів, що приносять гроші',
    description: 'Професійна розробка сайтів з акцентом на конверсію та SEO.',
    url: 'https://workingsolutions.com.ua',
    siteName: 'Working Solutions',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebStudioSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema()) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}