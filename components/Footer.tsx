import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="text-2xl font-black mb-6 tracking-tighter">
              WORKING<span className="text-brand-500">SOLUTIONS</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Веб-студія повного циклу з фокусом на результат. Створюємо інструменти для автоматизації бізнесу та збільшення продажів.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-600 transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-bold mb-6">Меню</h5>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Послуги</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Портфоліо</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Ціни</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакти</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6">Контакти</h5>
            <ul className="space-y-4 text-gray-400">
              <li>Київ, Україна</li>
              <li>вул. Хрещатик, 1</li>
              <li>+38 (000) 000-00-00</li>
              <li>info@workingsolutions.ua</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Working Solutions. Всі права захищені.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-white">Політика конфіденційності</a>
            <a href="/terms" className="hover:text-white">Публічна оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}