'use client';

import { Rocket, Building2, ShoppingBag, PenTool, Search, Layout } from 'lucide-react';

const services = [
  {
    title: 'Landing Pages',
    desc: 'Односторінкові сайти з високою конверсією для швидкого запуску продажів.',
    icon: Rocket,
    price: 'від 12 000 грн'
  },
  {
    title: 'Корпоративні сайти',
    desc: 'Масштабні проекти для бізнесу, що формують імідж та довіру клієнтів.',
    icon: Building2,
    price: 'від 25 000 грн'
  },
  {
    title: 'Інтернет-магазини',
    desc: 'Автоматизовані платформи для торгівлі з інтеграцією платіжних систем та CRM.',
    icon: ShoppingBag,
    price: 'від 40 000 грн'
  },
  {
    title: 'UX/UI Дизайн',
    desc: 'Сучасний та інтуїтивно зрозумілий дизайн, орієнтований на користувача.',
    icon: PenTool,
    price: 'від 8 000 грн'
  },
  {
    title: 'SEO Просування',
    desc: 'Виведення вашого сайту в ТОП-10 пошукової видачі Google.',
    icon: Search,
    price: 'від 15 000 грн'
  },
  {
    title: 'Редизайн',
    desc: 'Друге дихання для вашого застарілого сайту: оновлення стилю та коду.',
    icon: Layout,
    price: 'від 10 000 грн'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-600 tracking-widest uppercase mb-3">Що ми робимо</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900">
            Послуги, що допоможуть вашому <br className="hidden md:block" /> бізнесу зростати
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-300 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-brand-600 mb-6 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h4>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200">
                <span className="text-brand-700 font-bold">{service.price}</span>
                <a href="#contact" className="text-sm font-semibold text-gray-400 hover:text-brand-600 flex items-center gap-1">
                  Замовити
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}