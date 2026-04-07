import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Users, Map, Globe, MessageSquare, FileText, ShieldCheck, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { programs, testimonials, faqs } from '@/src/constants';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-50 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-100">
              <Star size={16} fill="currentColor" />
              <span>Registracija 2026 sezonui jau prasidėjo!</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-blue-600 leading-[1.1] mb-8 tracking-tight">
              Tavo vasara <span className="text-red-600">Amerikoje</span> gali prasidėti čia
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Work and Travel USA, tarptautinės praktikos ir unikalios galimybės studentams bei jaunimui. Atrask pasaulį su patikimiausia komanda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/rezervacija"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 hover:shadow-blue-200 flex items-center justify-center gap-2"
              >
                Registruotis konsultacijai
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/programos"
                className="bg-white text-blue-600 border-2 border-blue-100 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center"
              >
                Peržiūrėti programas
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Student"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="block font-bold text-gray-900">1500+ studentų</span>
                <span className="text-gray-500">jau pasinaudojo mūsų paslaugomis</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/images/niujorkas.jpg"
                alt="New York"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-1 opacity-80">Work and Travel USA</p>
                <p className="text-2xl font-bold">Atrask Niujorką</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div {...fadeIn}>
              <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Mūsų programos</p>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 tracking-tight">
                Platus pasirinkimas <br /> tavo ateičiai
              </h2>
            </motion.div>
            <motion.div {...fadeIn}>
              <Link to="/programos" className="text-blue-600 font-bold flex items-center gap-2 hover:text-red-600 transition-colors">
                Visos programos <ArrowRight size={20} />
              </Link>
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
                  <h3 className="text-2xl font-bold text-blue-600 mb-3 group-hover:text-red-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 mb-6 line-clamp-2">
                    {program.description}
                  </p>
                  <Link
                    to={program.link}
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group/btn"
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

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Kodėl mes?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 tracking-tight mb-8">
              Patirtis, kuria gali pasitikėti
            </h2>
            <div className="space-y-8">
              {[
                { title: "Ilgametė patirtis", desc: "Daugiau nei 15 metų padedame studentams išvykti į JAV ir kitas šalis.", icon: <Star className="text-blue-600" /> },
                { title: "Individualus dėmesys", desc: "Kiekvienas studentas mums svarbus. Padedame nuo dokumentų iki lėktuvo bilietų.", icon: <Users className="text-blue-600" /> },
                { title: "Pagalba 24/7", desc: "Esame pasiekiami visos programos metu, jei kiltų nenumatytų klausimų.", icon: <Globe className="text-blue-600" /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                alt="Students"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-gray-900 text-white p-10 rounded-[2rem] shadow-2xl hidden md:block">
              <p className="text-5xl font-bold mb-1">98%</p>
              <p className="text-sm font-medium opacity-70">Rekomenduotų mus draugams</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <motion.div {...fadeIn}>
            <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-4">Procesas</p>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 tracking-tight">
              4 žingsniai iki tavo nuotykio
            </h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Konsultacija", desc: "Susitinkame, aptariame tavo norus ir išsirenkame tinkamiausią programą.", icon: <MessageSquare size={24} /> },
            { step: "02", title: "Registracija", desc: "Sutvarkome visus reikiamus dokumentus ir pradedame darbo paieškas.", icon: <FileText size={24} /> },
            { step: "03", title: "Viza", desc: "Padedame pasiruošti pokalbiui ambasadoje ir gauti J-1 vizą.", icon: <ShieldCheck size={24} /> },
            { step: "04", title: "Kelionė", desc: "Skrendi į savo svajonių šalį! Mes liekame pasiekiami visą laiką.", icon: <Plane size={24} /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-black text-blue-50 group-hover:text-red-50 transition-colors">{item.step}</span>
                <div className="text-blue-600 group-hover:text-red-600 transition-colors">
                  {item.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-600 mb-4">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div {...fadeIn}>
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Atsiliepimai</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Ką sako mūsų studentai
            </h2>
          </motion.div>
        </div>

        <div className="flex gap-8 px-6 overflow-x-auto pb-12 no-scrollbar">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[350px] md:min-w-[450px] bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full" />
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-blue-600 font-medium">{t.program}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed text-lg">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Dažniausiai užduodami klausimai</h2>
              <p className="text-gray-500">Nerandi atsakymo? Susisiek su mumis tiesiogiai.</p>
            </motion.div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-gray-900 list-none">
                  {faq.question}
                  <span className="transition-transform group-open:rotate-180">
                    <ArrowRight size={20} className="rotate-90" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-100"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Pasiruošęs savo gyvenimo nuotykiui?</h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Užsiregistruok nemokamai konsultacijai ir mes padėsime tau išsirinkti geriausią programą.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/rezervacija"
                  className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all shadow-xl shadow-blue-900/20"
                >
                  Registruotis dabar
                </Link>
                <Link
                  to="/apie-mus"
                  className="bg-blue-800 text-white border border-blue-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all"
                >
                  Sužinoti daugiau
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
