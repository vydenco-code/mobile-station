import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <Logo className={scrolled ? "h-8" : "h-10"} />
        </div>
        
        {/* Placeholder Navigation for visual balance */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#section1" className="hover:text-[#0B2338] transition-colors">Services</a>
          <a href="#section2" className="hover:text-[#0B2338] transition-colors">About</a>
          <a href="#section3" className="hover:text-[#0B2338] transition-colors">Work</a>
          <a href="#section4" className="hover:text-[#0B2338] transition-colors">Contact</a>
        </nav>
        
        {/* Mobile menu button placeholder */}
        <button className="md:hidden text-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
      </div>
    </header>
  );
};
