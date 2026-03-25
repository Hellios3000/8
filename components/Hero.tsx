'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900 text-white">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Веб-студія повного циклу
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Working Solutions — <span className="text-brand-500">перетворюємо</span> трафік на прибуток
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-xl">
              Розробка високоефективних сайтів за 10 днів з гарантією 12 місяців. Створюємо цифрові інструменти, які дійсно продають.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="btn-primary text-lg px-8 py-4 bg-brand-600 hover:bg-brand-500">
                Розрахувати вартість
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 rounded-md border border-gray-700 hover:bg-gray-800 transition-colors text-lg">
                Наші роботи
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['Mobile-First Design', 'SEO Оптимізація', 'Швидкість 90+ Score', 'Підтримка 24/7'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle2 className="text-brand-500" size={18} />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-tr from-brand-600/20 to-transparent p-1 rounded-2xl border border-white/10">
               <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                alt="Dashboard Preview" 
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl text-gray-900 hidden md:block">
              <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Конверсія</div>
              <div className="text-2xl font-bold">+340%</div>
              <div className="w-24 h-1 bg-green-500 rounded mt-2"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}