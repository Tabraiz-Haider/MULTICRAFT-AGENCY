'use client'

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

      {/* 🚀 Hero Section - Original Simple Layout */}
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
          
          {/* Original Centered Buttons */}
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

      {/* Components Section */}
      <OurServices />
      
      {/* ✅ Step 2: Portfolio added correctly between Services and FAQ */}
      <Portfolio /> 
      
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}