import { 
  Utensils, Megaphone, Search, Video, GraduationCap, 
  Image as ImageIcon, Smartphone, Globe, PenTool, 
  Bot, ShoppingBag, Palette 
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  { slug: "restaurant-automation", icon: <Utensils size={28}/>, title: "Restaurant Automation", desc: "Streamline operations with automated ordering." },
  { slug: "digital-marketing", icon: <Megaphone size={28}/>, title: "Digital Marketing", desc: "Drive growth with targeted campaigns." },
  { slug: "seo-optimization", icon: <Search size={28}/>, title: "SEO Optimization", desc: "Rank higher on search engines." },
  { slug: "video-editing", icon: <Video size={28}/>, title: "Video Editing", desc: "Professional video production and editing." },
  { slug: "school-systems", icon: <GraduationCap size={28}/>, title: "School Systems", desc: "Complete solutions for administration." },
  { slug: "daily-graphics", icon: <ImageIcon size={28}/>, title: "Daily Graphics", desc: "Consistent, high-quality social graphics." },
  { slug: "app-development", icon: <Smartphone size={28}/>, title: "App Development", desc: "Native and cross-platform applications." },
  { slug: "wordpress-development", icon: <Globe size={28}/>, title: "WordPress", desc: "Custom WordPress websites and themes." },
  { slug: "content-writing", icon: <PenTool size={28}/>, title: "Content Writing", desc: "Engaging, SEO-optimized content." },
  { slug: "ai-chatbots", icon: <Bot size={28}/>, title: "AI Chatbots", desc: "Intelligent support and lead generation." },
  { slug: "shopify-design", icon: <ShoppingBag size={28}/>, title: "Shopify Design", desc: "Conversion-optimized e-commerce stores." },
  { slug: "ui-ux-design", icon: <Palette size={28}/>, title: "UI/UX Design", desc: "Intuitive and engaging digital experiences." },
];

export default function OurServices() {
  return (
    <section id="services" className="w-full py-24 bg-slate-950 flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter italic">
            Our Services
          </h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              /* ✅ Slug wapas add kar diya taake links sahi jagah le kar jayein */
              slug={service.slug}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}