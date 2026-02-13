'use client'

import { useRef, useState, Suspense } from 'react'; // ✅ useEffect hata diya
import { useSearchParams } from 'next/navigation';
import { sendEmailAction } from '../actions/sendEmail';

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  
  const serviceFromUrl = searchParams.get('service');
  const [manualSubject, setManualSubject] = useState<string | null>(null);

  const displaySubject = manualSubject !== null 
    ? manualSubject 
    : (serviceFromUrl ? `Inquiry: ${serviceFromUrl}` : '');

  // ✅ Status variable ko use kar rahe hain feedback dikhane ke liye
  const [status, setStatus] = useState<{ message: string; success: boolean | null }>({
    message: '',
    success: null
  });

  async function handleSubmit(formData: FormData) {
    setStatus({ message: 'Sending...', success: null });
    
    formData.set('subject', displaySubject);

    const result = await sendEmailAction(formData);
    
    if (result.success) {
      setStatus({ message: 'Message sent successfully! ✅', success: true });
      formRef.current?.reset();
      setManualSubject(''); 
    } else {
      setStatus({ message: 'Something went wrong. Please try again. ❌', success: false });
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto bg-slate-900/40 p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
        <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase tracking-tighter italic">Get In Touch</h2>
        
        <form ref={formRef} action={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Name</label>
              <input type="text" name="name" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition" placeholder="Your Name" />
            </div>
            
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Email</label>
              <input type="email" name="email" required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition" placeholder="Email Address" />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Subject / Service</label>
              <input 
                type="text" 
                name="subject" 
                value={displaySubject}
                onChange={(e) => setManualSubject(e.target.value)}
                className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition" 
                placeholder="How can we help?" 
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Message</label>
              <textarea name="message" rows={5} required className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition" placeholder="Tell us about your project..."></textarea>
            </div>

            <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-xl font-black hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 active:scale-95 uppercase tracking-widest text-xs">
              Send Message
            </button>

            {/* ✅ Status message UI yahan active hai */}
            {status.message && (
              <p className={`text-center text-[10px] font-black uppercase tracking-widest p-3 rounded-lg mt-4 ${status.success ? 'bg-emerald-500/10 text-emerald-500' : status.success === false ? 'bg-red-500/10 text-red-500' : 'text-slate-400'}`}>
                {status.message}
              </p>
            )}
        </form>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="text-center py-24 text-slate-500 uppercase tracking-widest text-[10px]">Loading Form...</div>}>
      <ContactForm />
    </Suspense>
  );
}