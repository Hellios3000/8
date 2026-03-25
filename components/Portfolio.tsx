export default function Portfolio() {
  const projects = [
    { 
      name: 'EcoEnergy Systems', 
      category: 'Corporate Site', 
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80', 
      result: '+45% Lead Rate' 
    },
    { 
      name: 'Aura Interior Design', 
      category: 'Landing Page', 
      img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=500&q=80', 
      result: 'Top 1 SEO' 
    },
    { 
      name: 'TechHub Store', 
      category: 'E-commerce', 
      img: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=500&q=80', 
      result: '1.2M UAH/mo Revenue' 
    },
    { 
      name: 'Legal Partners', 
      category: 'Business Website', 
      img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80', 
      result: '3x Leads Increase' 
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-brand-500 font-bold uppercase tracking-wider mb-2">Портфоліо</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Наші останні кейси</h3>
          </div>
          <p className="text-gray-400 max-w-md">
            Ми не просто малюємо дизайн — ми вирішуємо бізнес-завдання через цифрові продукти. Кожен проект має конкретну мету та результат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[16/10]">
              <img 
                src={item.img} 
                alt={item.name} 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-brand-400 text-sm font-bold uppercase">{item.category}</span>
                    <h4 className="text-2xl font-bold mt-1">{item.name}</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-brand-400 font-bold">
                    {item.result}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border border-gray-700 hover:border-brand-500 px-10 py-4 rounded-lg font-bold transition-all">
            Дивитися всі проекти
          </button>
        </div>
      </div>
    </section>
  );
}