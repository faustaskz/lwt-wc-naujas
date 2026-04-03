import React from 'react';
import { motion } from 'framer-motion';
import { faqs } from '@/src/constants';
import { ArrowRight } from 'lucide-react';

export default function FAQ() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Pagalba</p>
            <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-6">Dažniausiai užduodami klausimai</h1>
            <p className="text-xl text-gray-500">Atsakymai į svarbiausius klausimus apie mūsų programas.</p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-8 cursor-pointer font-bold text-gray-900 list-none text-lg">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight size={20} className="rotate-90" />
                  </span>
                </summary>
                <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>

          <div className="mt-20 p-10 bg-blue-600 rounded-[2.5rem] text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Neradote atsakymo?</h3>
            <p className="text-blue-100 mb-8">Mūsų konsultantai pasiruošę atsakyti į visus jūsų klausimus.</p>
            <a 
              href="/kontaktai" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all"
            >
              Susisiekti dabar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
