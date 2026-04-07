import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Mail, Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Rezervacija gauta!</h2>
          <p className="text-gray-500 text-lg mb-8">
            Ačiū, kad domitės mūsų programomis. Mūsų konsultantas susisieks su jumis per artimiausias 24 valandas patvirtinti vizito laiką.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-600 transition-all"
          >
            Grįžti į pradžią
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Rezervacija</p>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-600 tracking-tight mb-8">
            Rezervuokite gyvą <br /> <span className="text-red-600">konsultaciją</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed mb-12">
            Pasirinkite sau patogų laiką ir susitikime viename iš mūsų biurų Vilniuje arba Kaune. Atsakysime į visus jūsų klausimus apie programas JAV ir kitur.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Vilniaus biuras</h4>
                <p className="text-gray-500 text-sm">Pamėnkalnio g. 19-2, Vilnius</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Kauno biuras</h4>
                <p className="text-gray-500 text-sm">S. Daukanto g. 11 (2-as aukštas), Kaunas</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Office Selection */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-gray-700 ml-1">Pasirinkite biurą</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="relative cursor-pointer group">
                  <input type="radio" name="office" value="vilnius" className="peer sr-only" defaultChecked />
                  <div className="p-4 text-center border-2 border-gray-100 rounded-2xl peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all font-bold text-gray-600 peer-checked:text-blue-600">
                    Vilnius
                  </div>
                </label>
                <label className="relative cursor-pointer group">
                  <input type="radio" name="office" value="kaunas" className="peer sr-only" />
                  <div className="p-4 text-center border-2 border-gray-100 rounded-2xl peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all font-bold text-gray-600 peer-checked:text-blue-600">
                    Kaunas
                  </div>
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                  <User size={14} /> Vardas, Pavardė
                </label>
                <input 
                  required
                  type="text" 
                  placeholder="Vardenis Pavardenis"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                  <Mail size={14} /> El. paštas
                </label>
                <input 
                  required
                  type="email" 
                  placeholder="vardenis@pavyzdys.lt"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                  <Phone size={14} /> Telefonas
                </label>
                <input 
                  required
                  type="tel" 
                  placeholder="+370 600 00000"
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                  <Calendar size={14} /> Vizito data
                </label>
                <input 
                  required
                  type="date" 
                  className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1 flex items-center gap-2">
                <MessageSquare size={14} /> Papildomas komentaras
              </label>
              <textarea 
                rows={3}
                placeholder="Kokia programa jus domina labiausiai?"
                className="w-full px-6 py-4 rounded-2xl border border-gray-100 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-gray-50 resize-none"
              ></textarea>
            </div>

            <div className="flex items-start gap-3 ml-1">
              <input 
                required
                type="checkbox" 
                id="privacy" 
                className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600" 
              />
              <label htmlFor="privacy" className="text-sm text-gray-500 leading-tight">
                Sutinku su <a href="#" className="text-blue-600 font-bold hover:underline">privatumo politika</a> ir leidžiu tvarkyti mano asmens duomenis rezervacijos tikslais.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3"
            >
              Patvirtinti rezervaciją
              <ArrowRight size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
