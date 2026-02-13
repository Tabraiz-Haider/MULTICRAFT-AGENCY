'use client'

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import OurServices from '../components/OurServices'; 
import Portfolio from '../components/Portfolio'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />

      {/* 🚀 Hero Section */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Pure White Solid Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Premium Digital Solutions for <br className="hidden md:block" />
            Modern Businesses
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
            Transform your business with cutting-edge technology, design, and marketing 
            solutions tailored for measurable growth.
          </p>
          
          {/* Centered Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-600 transition">
              Explore Services
            </a>
            <a href="#contact" className="bg-slate-900/40 border border-white/5 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-900/60 transition">
              Contact Us
            </a>
          </div>
          
        </div>
      </section>

      {/* 1. Services Section */}
      <OurServices />

      {/* ✅ 2. About Section (VIP Update: Bigger Headings & Logo) */}
      <section id="about" className="py-24 px-6 border-y border-white/5 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Heading Update */}
              <h2 className="text-orange-500 text-xl font-black uppercase tracking-[0.3em] mb-4">About Us</h2>
              <h3 className="text-5xl md:text-6xl font-black text-white mb-6 italic uppercase tracking-tighter leading-none">
                Crafting Digital <br /> <span className="text-slate-500">Excellence.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                Multicraft Agency is more than just a service provider. We are your partners in 
                innovation, specializing in high-performance web development, premium design, 
                and automated business solutions. Our goal is to make your brand stand out 
                in the digital landscape.
              </p>
              
              {/* Stats */}
              <div className="flex gap-8">
                <div>
                  <h4 className="text-4xl font-black text-white tracking-tighter">10+</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Projects Done</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-white tracking-tighter">100%</h4>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Client Joy</p>
                </div>
              </div>
            </div>

            {/* Logo Section Update */}
            <div className="flex justify-center">
              <div className="relative w-72 h-72 bg-gradient-to-br from-orange-500/10 to-transparent rounded-[3rem] border border-white/5 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-orange-500/5 blur-3xl group-hover:bg-orange-500/10 transition-all duration-500" />
                <Image 
                  src="/logo-icon.png" 
                  alt="Multicraft Agency Logo" 
                  width={180} 
                  height={180} 
                  className="object-contain z-10 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. Portfolio Section */}
      <Portfolio /> 
      
      {/* Footer Components */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}