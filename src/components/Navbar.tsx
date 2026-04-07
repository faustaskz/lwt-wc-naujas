import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';


const navLinks = [
  { name: 'Pradžia', href: '/' },
  { name: 'Work and Travel USA', href: '/programos/work-and-travel-usa' },
  { name: 'Programos', href: '/programos' },
  { name: 'Apie mus', href: '/apie-mus' },
  { name: 'Kontaktai', href: '/kontaktai' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-gray-200 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/images/LWCLOGO.png" alt="LWC-WT Logo" className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
          <div className="flex flex-col leading-tight">
            <span className="font-black text-2xl tracking-tighter text-blue-600">LWC-WT</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-bold">Pasaulio lietuviams</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm font-bold transition-colors hover:text-blue-600',
                location.pathname === link.href ? 'text-blue-600' : 'text-gray-600'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/rezervacija"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 hover:shadow-blue-200"
          >
            Konsultacija
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-lg font-medium py-2',
                    location.pathname === link.href ? 'text-blue-600' : 'text-gray-600'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/rezervacija"
                className="bg-blue-600 text-white px-6 py-4 rounded-2xl text-center font-bold mt-2 shadow-lg shadow-blue-100"
              >
                Nemokama konsultacija
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
