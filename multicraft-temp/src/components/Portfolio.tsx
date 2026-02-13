import Image from 'next/image';
import Link from 'next/link';

const projects = [
  { 
    title: "Gold Base Live & G-Calc", 
    category: "App Development", 
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070", 
    links: [
      "https://play.google.com/store/apps/details?id=com.cxn.goldbaselive",
      "https://play.google.com/store/apps/details?id=com.cxn.gcalc"
    ],
    desc: "Professional financial and calculation tools on Play Store."
  },
  { 
    title: "Pearl Food & Wheree", 
    category: "Restaurant Automation", 
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070", 
    links: [
      "https://pearlfoodcentre.chikoo.app",
      "https://www.wheree.com"
    ],
    desc: "Seamless online ordering and business discovery platforms."
  },
];

export default function Portfolio({ activeCategory }: { activeCategory?: string }) {
  const filteredProjects = activeCategory 
    ? projects.filter(p => p.category === activeCategory)
    : projects;

  if (filteredProjects.length === 0) return null;

  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-950 flex flex-col items-center w-full">
      <div className="max-w-7xl w-full mx-auto">
        
        {/* ✅ Centered Section Header with Gradient Lines */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-6 w-full max-w-4xl mx-auto">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-white/20" />
            
            <h2 className="text-sm font-black text-slate-500 uppercase tracking-[0.6em] whitespace-nowrap bg-slate-950 px-6">
              {activeCategory ? `Recent ${activeCategory} Work` : "Our Previous Work"}
            </h2>
            
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/10 to-white/20" />
          </div>
          
          {/* Accent Glow */}
          <div className="w-12 h-1 bg-orange-500 rounded-full mt-6 shadow-[0_0_20px_rgba(249,115,22,0.5)]" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group overflow-hidden rounded-[2.5rem] bg-slate-900/60 border border-white/5 hover:border-orange-500/50 transition-all duration-500 shadow-2xl flex flex-col">
              
              <div className="relative w-full aspect-video bg-slate-800 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  unoptimized
                />
              </div>

              <div className="p-10 flex flex-col flex-1">
                <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                  {project.category}
                </p>
                <h3 className="text-2xl font-black text-white tracking-tighter mb-4 group-hover:text-orange-500 transition-colors uppercase italic">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.links.map((link, lIndex) => (
                    <Link 
                      key={lIndex}
                      href={link}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white bg-white/5 hover:bg-orange-500 px-6 py-3 rounded-xl transition-all border border-white/10 hover:border-orange-500 active:scale-95"
                    >
                      View Live {project.links.length > 1 ? lIndex + 1 : ''} <span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}