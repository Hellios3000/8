'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, "Вкажіть ваше ім'я"),
  phone: z.string().min(10, "Вкажіть коректний номер телефону"),
  email: z.string().email('Некоректний email'),
  project: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 2000));
    alert("Дякуємо! Ваша заявка прийнята. Ми зв'яжемося з вами найближчим часом.");
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Ім'я</label>
            <input 
              {...register('name')} 
              placeholder="Олександр"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Телефон</label>
            <input 
              {...register('phone')} 
              placeholder="+38 (0__) ___ __ __"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Email</label>
          <input 
            {...register('email')} 
            placeholder="example@mail.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700">Про проект (опціонально)</label>
          <textarea 
            {...register('project')} 
            rows={4}
            placeholder="Розкажіть коротко про ваші цілі..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none transition-all"
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Відправляємо...' : <><Send size={18} /> Відправити запит</>}
        </button>
        <p className="text-center text-xs text-gray-400">
          Натискаючи кнопку, ви погоджуєтесь з політикою конфіденційності.
        </p>
      </form>
    </div>
  );
}