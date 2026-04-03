import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function Contacts() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Susisiekime</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8">
                Turite klausimų? <br /> Mes čia, kad <span className="text-blue-600">padėtume</span>.
              </h1>
              <p className="text-xl text-gray-500 leading-relaxed mb-12">
                Užpildykite formą arba susisiekite tiesiogiai. Mūsų komanda atsakys jums per 24 valandas.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">El. paštas</h4>
                    <p className="text-gray-500">info@lwc-wt.lt</p>
                    <p className="text-gray-500">registracija@lwc-wt.lt</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Telefonas</h4>
                    <p className="text-gray-500">+370 600 00000</p>
                    <p className="text-gray-500">+370 611 11111</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Adresas</h4>
                    <p className="text-gray-500">Gedimino pr. 1, Vilnius</p>
                    <p className="text-gray-500">Lietuva, LT-01103</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Darbo laikas</h4>
                    <p className="text-gray-500">I-IV: 09:00 - 18:00</p>
                    <p className="text-gray-500">V: 09:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Parašykite mums</h3>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Vardas Pavardė</label>
                    <input 
                      type="text" 
                      placeholder="Jonas Jonaitis"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">El. paštas</label>
                    <input 
                      type="email" 
                      placeholder="jonas@pavyzdys.lt"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Programa, kuri domina</label>
                  <select className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white appearance-none">
                    <option>Work and Travel USA</option>
                    <option>Camp Counselor USA</option>
                    <option>Praktikos užsienyje</option>
                    <option>Working Holiday</option>
                    <option>Kita</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Jūsų žinutė</label>
                  <textarea 
                    rows={5}
                    placeholder="Kaip galime jums padėti?"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3"
                >
                  Siųsti užklausą
                  <Send size={20} />
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Paspausdami „Siųsti užklausą“, sutinkate su mūsų privatumo politika.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-20 grayscale" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-gray-100">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-bold text-gray-900">Mūsų biuras Vilniuje</p>
              <p className="text-sm text-gray-500">Gedimino pr. 1, Vilnius</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
