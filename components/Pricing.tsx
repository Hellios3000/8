import { Check } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: 'Start',
      price: '12 000',
      features: ['Лендінг за 10 днів', 'Адаптивний дизайн', 'SEO-база', 'Хостинг у подарунок', '1 місяць підтримки'],
      recommended: false
    },
    {
      name: 'Business',
      price: '28 000',
      features: ['Корпоративний сайт', 'Унікальний дизайн', 'SEO-оптимізація', 'Інтеграція CRM', '3 місяці підтримки'],
      recommended: true
    },
    {
      name: 'Store',
      price: '45 000',
      features: ['Інтернет-магазин', 'Синхронізація товарів', 'Платіжні системи', 'Кабінет користувача', 'Пожиттєва гарантія'],
      recommended: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Тарифні плани</h2>
          <p className="text-gray-600">Прозора ціна без прихованих платежів</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className={`p-8 rounded-2xl bg-white border ${tier.recommended ? 'border-brand-500 shadow-2xl scale-105' : 'border-gray-200'} relative`}>
              {tier.recommended && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Популярний вибір
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter">{tier.name}</h3>
              <div className="text-4xl font-bold mb-6">
                від {tier.price} <span className="text-lg font-normal text-gray-500">грн</span>
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-gray-700">
                    <Check className="text-green-500" size={18} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`w-full py-4 rounded-lg font-bold flex justify-center transition-all ${tier.recommended ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                Обрати тариф
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}