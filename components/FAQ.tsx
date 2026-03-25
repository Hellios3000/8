'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    q: 'Скільки часу займає розробка сайту?',
    a: 'Терміни залежать від складності. Лендінг ми робимо за 10-14 днів, великий корпоративний сайт — за 4-6 тижнів.'
  },
  {
    q: 'На якій системі (CMS) ви робите сайти?',
    a: 'Ми використовуємо WordPress для контентних проектів, OpenCart для магазинів та Laravel для індивідуальних складних рішень.'
  },
  {
    q: 'Чи буде мій сайт працювати на телефонах?',
    a: 'Так, 100% наших проектів мають адаптивний дизайн і коректно відображаються на всіх пристроях: від смартфонів до 4K моніторів.'
  },
  {
    q: 'Чи надаєте ви гарантію?',
    a: 'Ми надаємо 12-місячну технічну гарантію. Якщо виникне помилка з нашої вини — ми виправимо її безкоштовно.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Часті запитання</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <button 
                className="w-full flex items-center justify-between p-6 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <ChevronDown className={cn("transition-transform", openIndex === i && "rotate-180")} />
              </button>
              {openIndex === i && (
                <div className="p-6 pt-0 text-gray-600 bg-white leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}