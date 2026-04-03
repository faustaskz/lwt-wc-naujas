import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function AboutUs() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Apie mus</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8">
              Tavo patikimas partneris <br /> <span className="text-blue-600">pasaulio pažinimui</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              VšĮ Pasaulio lietuvių praktikos ir studijų užsienyje centras (LWC-WT) – tai organizacija, kurios misija yra suteikti Lietuvos jaunimui galimybę tobulėti tarptautinėje aplinkoje.
            </p>
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0">
                <Award size={24} />
              </div>
              <p className="text-gray-700 font-medium italic">
                "Mūsų tikslas – ne tik išsiųsti studentą, bet ir užtikrinti, kad jo patirtis būtų saugi, vertinga ir nepamirštama."
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
              alt="Team" 
              className="rounded-[3rem] shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
              <p className="text-4xl font-bold text-blue-600 mb-1">15+</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Metų patirties</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Mūsų misija", desc: "Skatinti jaunimo mobilumą, tarpkultūrinį bendravimą ir profesinį tobulėjimą per tarptautines programas.", icon: <Globe /> },
              { title: "Mūsų vizija", desc: "Tapti pirmuoju pasirinkimu kiekvienam studentui, svajojančiam apie praktiką ar darbą užsienyje.", icon: <Star /> },
              { title: "Mūsų vertybės", desc: "Sąžiningumas, profesionalumas, operatyvumas ir nuoširdus rūpestis kiekvienu dalyviu.", icon: <Users /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Students Trust Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Kodėl mumis pasitiki studentai?</h2>
            <p className="text-lg text-gray-500">Mes nesame tik agentūra – mes esame tavo mentoriai ir pagalbininkai visos kelionės metu.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Oficialus JAV Valstybės departamento remiamų rėmėjų partneris Lietuvoje.",
              "99% sėkmingai gautų vizų rodiklis per pastaruosius 5 metus.",
              "Išsamūs orientaciniai seminarai, paruošiantys gyvenimui užsienyje.",
              "Platus patikrintų darbdavių tinklas visoje JAV.",
              "Skaidri kainodara be jokių paslėptų mokesčių.",
              "Pagalba grįžus – mokesčių susigrąžinimas ir kitos paslaugos."
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Nori tapti mūsų istorijos dalimi?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Susisiek su mumis ir pradėkime planuoti tavo tarptautinę patirtį kartu.
            </p>
            <Link
              to="/rezervacija"
              className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all inline-block"
            >
              Susisiekti dabar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
