import Link from 'next/link';
import { ReactNode } from 'react';

// ✅ slug ko wapas interface mein add kiya hai taake individual pages khul sakein
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  slug: string; 
}

export default function ServiceCard({ icon, title, desc, slug }: ServiceCardProps) {
  return (
    /* ✅ pathname ko dynamic kiya taake ye /services/[slug] par jaye */
    <Link href={`/services/${slug}?service=${encodeURIComponent(title)}`}>
      <div className="group p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-orange-500/50 transition-all duration-300 cursor-pointer h-full flex flex-col items-start text-left shadow-xl hover:shadow-orange-500/10 active:scale-[0.98]">
        
        <div className="p-2 rounded-lg text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors tracking-tight">
          {title}
        </h3>

        <p className="text-slate-400 leading-relaxed text-sm">
          {desc}
        </p>

        <div className="mt-6 text-orange-500 text-xs font-black flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
          Learn More <span>→</span>
        </div>
      </div>
    </Link>
  );
}