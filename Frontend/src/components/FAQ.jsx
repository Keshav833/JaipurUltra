import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is hydration provided throughout the route?",
      answer: "Yes, we have 12 major aid stations for the 50K and 6 for the 25K. Each station provides water, electrolytes, bananas, and local salt-citrus drinks to combat heat."
    },
    {
      question: "What is the mandatory gear list?",
      answer: "All runners must carry a 1L hydration pack, whistle, emergency foil blanket, and a fully charged mobile phone. Headlamps are required for 50K participants."
    },
    {
      question: "Are there age restrictions?",
      answer: "Participants must be 18 years or older on race day for the 50K, and 16 or older (with parental consent) for the 25K."
    }
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-8">
      <h2 className="font-headline text-6xl uppercase mb-16 text-center">
        COMMON <span className="text-primary-container">QUESTIONS</span>
      </h2>
      <div className="space-y-0.5 bg-outline-variant/20">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-background group">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-8 px-6 text-left transition-all hover:bg-surface-container"
            >
              <span className="font-title text-xl uppercase tracking-widest">{faq.question}</span>
              <span className="material-symbols-outlined text-primary-container transform transition-transform">
                {openIndex === index ? 'remove' : 'add'}
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-8 px-6 text-on-surface-variant leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
