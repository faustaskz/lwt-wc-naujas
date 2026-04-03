import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { programs } from '@/src/constants';

export default function Programs() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Visos galimybės</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8">
                Išsirink savo <br /> ateities kryptį
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed">
                Nuo vasaros darbų JAV iki ilgalaikių praktikų Europoje ar nuotykių Australijoje. Mes padėsime tau rasti tinkamiausią programą pagal tavo tikslus.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {program.tag && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {program.tag}
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <Link
                    to={program.link}
                    className="inline-flex items-center gap-2 text-gray-900 font-bold text-sm group/btn"
                  >
                    Sužinoti daugiau
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Program CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Neradai to, ko ieškojai?</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Mes nuolat plečiame savo programų sąrašą ir galime pasiūlyti individualius sprendimus tavo praktikai ar studijoms užsienyje. Susisiek su mumis ir aptarkime tavo idėjas.
              </p>
              <Link
                to="/kontaktai"
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all inline-block"
              >
                Susisiekti su mumis
              </Link>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" 
                alt="Consultation" 
                className="rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
