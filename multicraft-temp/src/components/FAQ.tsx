'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "What services does Multicraft Agency offer?",
    answer: "We offer a wide range of digital services including AI Chatbots, Shopify Design, App Development, SEO, and Full-Stack Web Development."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary, but a standard business website takes 1-2 weeks, while more complex AI systems can take 3-4 weeks."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide 24/7 technical support and maintenance packages to ensure your digital products keep running smoothly."
  },
  {
    question: "Can you help with AI automation for my business?",
    answer: "Absolutely! We specialize in building custom AI agents and chatbots that can handle leads and automate customer service."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/5 bg-slate-900/40 rounded-xl overflow-hidden transition-all"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left text-white font-medium hover:bg-slate-900/60 transition-colors"
              >
                <span>{faq.question}</span>
                {openIndex === index ? <Minus size={20} className="text-orange-500" /> : <Plus size={20} className="text-orange-500" />}
              </button>
              
              <div 
                className={`px-5 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}