import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/images/LWCLOGO.png" alt="LWC-WT Logo" className="w-12 h-12 object-contain" />
              <span className="font-black text-2xl tracking-tighter text-blue-600">LWC-WT</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              VšĮ Pasaulio lietuvių praktikos ir studijų užsienyje centras. Padedame studentams atrasti pasaulį per tarptautines programas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-blue-600 hover:border-blue-600 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 mb-6">Programos</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/programos/work-and-travel-usa" className="hover:text-blue-600 transition-colors">Work and Travel USA</Link></li>
              <li><Link to="/programos/camp-counselor-usa" className="hover:text-blue-600 transition-colors">Camp Counselor USA</Link></li>
              <li><Link to="/programos/praktikos" className="hover:text-blue-600 transition-colors">Praktikos užsienyje</Link></li>
              <li><Link to="/programos/working-holiday" className="hover:text-blue-600 transition-colors">Working Holiday</Link></li>
              <li><Link to="/programos/au-pair" className="hover:text-blue-600 transition-colors">Au Pair programos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 mb-6">Nuorodos</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link to="/apie-mus" className="hover:text-blue-600 transition-colors">Apie mus</Link></li>
              <li><Link to="/kontaktai" className="hover:text-blue-600 transition-colors">Kontaktai</Link></li>
              <li><Link to="/faq" className="hover:text-blue-600 transition-colors">DUK</Link></li>
              <li><Link to="/rezervacija" className="hover:text-blue-600 transition-colors font-bold">Rezervuoti konsultaciją</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-600 mb-6">Kontaktai</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 shrink-0" />
                <span>Pamėnkalnio g. 19-2, Vilnius</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600 shrink-0" />
                <span>+370 600 00000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600 shrink-0" />
                <span>info@lwc-wt.lt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} LWC-WT. Visos teisės saugomos.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">USA • Lithuania • World</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
