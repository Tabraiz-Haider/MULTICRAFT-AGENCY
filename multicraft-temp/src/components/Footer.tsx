import React from 'react';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#01040a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo-icon.png" 
                alt="Multicraft Agency Logo" 
                width={40} 
                height={40} 
                className="object-contain" 
              />
              <span className="text-lg font-black tracking-tighter bg-gradient-to-r from-[#F28C28] to-[#20B2AA] bg-clip-text text-transparent">
                MULTICRAFT AGENCY
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses with premium digital solutions and AI automation.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-teal-500 transition text-sm">AI Chatbots</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-teal-500 transition text-sm">Shopify Design</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-teal-500 transition text-sm">Digital Marketing</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-teal-500 transition text-sm">School Systems</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="hover:text-teal-500 transition cursor-pointer">info.multicraftagency@gmail.com</li>
              <li className="hover:text-teal-500 transition cursor-pointer">+92 311 8716038</li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4">Socials</h3>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/multicraft_agency?igsh=MW5xOGQxM202aW90cw==" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              {/* Custom TikTok SVG Icon */}
              <a href="https://www.tiktok.com/@multicraft.agency?_r=1&_t=ZN-93qMXhyYW4F" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61586165886422&mibextid=rS40aB7S9Ucbxw6v" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/multi-craft-agency-b756053b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-slate-400 text-sm">© 2026 Multicraft Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;