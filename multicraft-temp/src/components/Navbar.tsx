import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group transition-all">
              <Image 
                src="/logo-icon.png" 
                alt="Multicraft Agency Logo" 
                width={45} 
                height={45} 
                className="object-contain group-hover:scale-105 transition-transform" 
              />
              <span className="text-xl md:text-2xl font-black tracking-tighter bg-gradient-to-r from-[#F28C28] to-[#20B2AA] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                MULTICRAFT AGENCY
              </span>
            </Link>
          </div>

          {/* ✅ Desktop Navigation Links (Updated with Smooth IDs) */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-slate-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
              Services
            </Link>
            <Link href="#about" className="text-slate-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
              About
            </Link>
            <Link href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <Link href="#contact" className="bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 uppercase tracking-widest">
              Get Started
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;