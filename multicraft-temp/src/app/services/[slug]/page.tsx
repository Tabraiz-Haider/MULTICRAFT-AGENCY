import { servicesData } from '@/data/services';
import Navbar from '@/components/Navbar';
import Portfolio from "@/components/Portfolio"; // ✅ Import already present
import Footer from '@/components/Footer';
import { 
  CheckCircle, ArrowLeft, Utensils, Megaphone, Search, 
  Video, GraduationCap, Image as ImageIcon, Smartphone, 
  Globe, PenTool, Bot, ShoppingBag, Palette, LucideIcon 
} from 'lucide-react';
import Link from 'next/link';

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  const iconMap: Record<string, LucideIcon> = {
    "restaurant-automation": Utensils,
    "digital-marketing": Megaphone,
    "seo-optimization": Search,
    "video-editing": Video,
    "school-systems": GraduationCap,
    "daily-graphics": ImageIcon,
    "app-development": Smartphone,
    "wordpress-development": Globe,
    "content-writing": PenTool,
    "ai-chatbots": Bot,
    "shopify-design": ShoppingBag,
    "ui-ux-design": Palette,
  };

  const IconComponent = iconMap[slug] || CheckCircle;

  if (!service) return <div className="text-white text-center py-20">Service Not Found</div>;

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-orange-500/30 overflow-x-hidden">
      <Navbar />
      
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/10 blur-[150px] rounded-full -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto pt-32 md:pt-44 pb-12 px-6">
        
        <Link href="/#services" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 transition-all mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back to Services</span>
        </Link>

        <div className="bg-white/[0.02] border border-white/[0.08] rounded-[3rem] backdrop-blur-3xl overflow-hidden shadow-2xl relative">
           <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500" />

           <div className="p-8 md:p-16">
              <div className="flex flex-col lg:flex-row gap-16">
                 
                 <div className="flex-1">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                          <IconComponent size={28} />
                       </div>
                       <p className="text-cyan-500 font-black tracking-[0.4em] text-[10px] uppercase">Specialized Strategy</p>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic uppercase leading-none">
                       {service.title}
                    </h1>

                    <p className="text-lg text-slate-400 leading-relaxed mb-12 font-medium">
                       {service.longDesc}
                    </p>

                    <div className="space-y-6">
                       <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Core Expertise</p>
                       <div className="grid sm:grid-cols-2 gap-4">
                          {service.features.map((feature, i) => (
                             <div key={i} className="flex items-center gap-3 py-2">
                                <CheckCircle size={16} className="text-orange-500 shrink-0" />
                                <span className="text-slate-300 font-bold text-sm">{feature}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="w-full lg:w-[320px] bg-white/[0.03] border border-white/[0.05] rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center shadow-inner group">
                    <h4 className="text-2xl font-black mb-6 text-white tracking-tight leading-tight italic uppercase">
                       Ready to <span className="text-orange-500">Elevate</span>?
                    </h4>
                    <p className="text-slate-400 mb-10 text-sm font-medium leading-relaxed">
                       Experience the Multicraft advantage. Turn your vision into a digital victory.
                    </p>
                    
                    <Link 
                       href={`/#contact?service=${encodeURIComponent(service.title)}`} 
                       className="w-full bg-orange-500 py-5 rounded-2xl font-black text-white hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95 text-[11px] uppercase tracking-[0.3em] mb-8"
                    >
                       Get Started
                    </Link>

                    <div className="w-12 h-[1px] bg-slate-800 mb-4" />
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.5em]">
                       Global Reach
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* ✅ Added Portfolio Section at the Bottom */}
      <div className="max-w-7xl mx-auto pb-24">
        <Portfolio activeCategory={service.title} />
      </div>

      <Footer />
    </main>
  );
}