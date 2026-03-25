export default function Process() {
  const steps = [
    { title: 'Аналіз та Бриф', text: 'Вивчаємо ваш бізнес, конкурентів та цільову аудиторію.' },
    { title: 'Прототипування', text: 'Створюємо архітектуру та шлях користувача (UX).' },
    { title: 'UI Дизайн', text: 'Малюємо сучасний інтерфейс, що відповідає бренду.' },
    { title: 'Розробка', text: 'Пишемо чистий та швидкий код на сучасному стеку.' },
    { title: 'Тестування', text: 'Перевіряємо сайт на помилки, адаптивність та швидкість.' },
    { title: 'Запуск та SEO', text: 'Деплой на хостинг та базова SEO оптимізація.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Як ми працюємо над проектом</h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="w-12 h-12 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-brand-200">
                {i + 1}
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h4>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}