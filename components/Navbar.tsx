'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Послуги', href: '#services' },
  { name: 'Портфоліо', href: '#portfolio' },
  { name: 'Процес', href: '#process' },
  { name: 'Ціни', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300 border-b',
      scrolled ? 'bg-white/90 backdrop-blur-md py-3 border-gray-100 shadow-sm' : 'bg-transparent py-5 border-transparent text-white'
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter">
          <a href="#home" className={cn(scrolled ? 'text-brand-700' : 'text-white')}>
            WORKING<span className="text-brand-500">SOLUTIONS</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-sm font-medium hover:text-brand-500 transition-colors",
                scrolled ? 'text-gray-700' : 'text-gray-100'
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={cn(
              "px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all",
              scrolled ? "bg-brand-600 text-white shadow-lg shadow-brand-200" : "bg-white text-brand-700"
            )}
          >
            <PhoneCall size={16} />
            Консультація
          </a>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-gray-900' : 'text-white'} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block text-gray-800 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="w-full bg-brand-600 text-white py-3 rounded-lg font-bold flex justify-center"
            onClick={() => setIsOpen(false)}
          >
            Замовити дзвінок
          </a>
        </div>
      )}
    </nav>
  );
}