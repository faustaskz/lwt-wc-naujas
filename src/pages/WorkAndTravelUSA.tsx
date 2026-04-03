import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Calendar, DollarSign, ArrowRight, Info, Users, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function WorkAndTravelUSA() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=2000" 
            alt="USA" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-500/30">
              <span>Pagrindinė programa</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Work and Travel <span className="text-blue-500">USA</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Praleisk vasarą dirbdamas ir keliaudamas po JAV. Tai ne tik darbas – tai gyvenimo patirtis, kuri pakeis tavo požiūrį į pasaulį.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/kontaktai"
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20"
              >
                Registruotis 2026
              </Link>
              <a
                href="#kas-tai"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                Sužinoti daugiau
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Info Bar */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Trukmė", value: "3-4 mėn.", icon: <Calendar className="text-blue-600" /> },
            { label: "Vieta", value: "Visa JAV", icon: <MapPin className="text-blue-600" /> },
            { label: "Uždarbis", value: "$15-25/val.", icon: <DollarSign className="text-blue-600" /> },
            { label: "Viza", value: "J-1 viza", icon: <ShieldCheck className="text-blue-600" /> },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{item.label}</p>
                <p className="text-lg font-bold text-gray-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What is it section */}
      <section id="kas-tai" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Kas yra Work and Travel USA?</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Tai JAV Valstybės departamento remiama kultūrinių mainų programa, skirta viso pasaulio studentams. Programos metu studentai turi galimybę legaliai dirbti JAV vasaros atostogų metu (iki 4 mėnesių) ir vėliau 30 dienų keliauti po šalį.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Tai puiki galimybė patobulinti anglų kalbos žinias, susipažinti su Amerikos kultūra, įgyti savarankiškumo ir susirasti draugų iš įvairiausių pasaulio kampelių.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Legalaus darbo leidimas",
                "Social Security numeris",
                "Sveikatos draudimas",
                "Pagalba 24/7 JAV",
                "Orientaciniai seminarai",
                "Dokumentų tvarkymas"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-[2.5rem] shadow-2xl"
              alt="USA Nature"
            />
            <div className="absolute -top-10 -right-10 bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-[200px]">
              <p className="text-sm font-bold opacity-80 mb-2">Populiariausia</p>
              <p className="text-xl font-bold">Daugiau nei 1000 darbo vietų</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Reikalavimai dalyviams</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Patikrink, ar atitinki pagrindinius programos kriterijus.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Studento statusas", desc: "Turi būti nuolatinių studijų studentas (bakalauras, magistras ar doktorantas).", icon: <Users /> },
              { title: "Anglų kalba", desc: "Turi gebėti susikalbėti angliškai (bent B1 lygis).", icon: <Globe /> },
              { title: "Amžius", desc: "Dažniausiai dalyvauja studentai nuo 18 iki 28 metų.", icon: <Info /> },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Kaip vyksta procesas?</h2>
          <div className="space-y-12">
            {[
              { step: "1", title: "Registracija ir interviu", desc: "Užpildai anketą, susitinkame pokalbiui, patikriname tavo anglų kalbos žinias ir pasirašome sutartį." },
              { step: "2", title: "Darbo pasirinkimas", desc: "Išsirenki norimą darbo vietą iš mūsų siūlomo sąrašo arba susirandi pats. Dalyvauji interviu su darbdaviu." },
              { step: "3", title: "Dokumentų tvarkymas", desc: "Ruošiame dokumentus DS-2019 formai gauti, kuri yra būtina J-1 vizai." },
              { step: "4", title: "Viza ir pasiruošimas", desc: "Eini į JAV ambasadą pokalbiui dėl vizos. Gavus vizą, dalyvauji orientaciniame seminare prieš skrydį." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="flex gap-8 items-start"
              >
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 shadow-lg shadow-blue-200">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 skew-x-12 translate-x-1/4 z-0 opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Nori praleisti vasarą JAV?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Vietų skaičius ribotas, o populiariausios darbo vietos užsipildo greičiausiai. Pradėk savo registraciją jau šiandien!
          </p>
          <Link
            to="/rezervacija"
            className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-900 transition-all inline-flex items-center gap-3 shadow-2xl shadow-blue-900/40"
          >
            Pradėti registraciją
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
