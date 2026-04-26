import { useState, useEffect } from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.avif";
import img6 from "../assets/img6.avif";

export default function WhyAttend({ isLightMode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Mobile and tablet get the stack for better UX
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const reasons = [
    {
      number: "01",
      title: "HISTORIC ROUTE ",
      description: "Run through UNESCO heritage sites and centuries-old fortresses.",
      image: img1
    },
    {
      number: "02",
      title: "ELITE LOGISTICS",
      description: "Fully loaded every 6KM with medical support and aid stations every 4KM with medical support.",
      image: img2
    },
    {
      number: "03",
      title: "DESERT ENDURANCE",
      description: "Test your limits against the unique heat and sand of Rajasthan.",
      image: img3
    },
    {
      number: "04",
      title: "COMMUNITY VIBE",
      description: "Join a global tribe of ultra-runners and adventure seekers.",
      image: img4
    },
    {
      number: "05",
      title: "FINISHER GLORY",
      description: "Unique metal medals and  heritage kits.",
      image: img5
    },
    
  ];

  const renderCard = (reason, index, isStacked = false) => (
    <div 
      className={`group relative p-8 h-full min-h-[280px] flex flex-col justify-between overflow-hidden rounded-3xl transition-all duration-500 will-change-transform ${isLightMode ? 'bg-white shadow-[0_20px_50px_rgba(122,74,43,0.08)] hover:shadow-[0_40px_80px_rgba(122,74,43,0.15)]' : 'bg-surface-container-low border border-white/5 shadow-2xl hover:bg-surface-container-high'}`}
      style={{ '--bg-image': `url(${reason.image})` }}
    >
      {/* Background Image Layer */}
      <div className={`absolute inset-0 z-10 opacity-0 bg-cover bg-center bg-(image:--bg-image) ${!isStacked ? 'group-hover:opacity-100' : 'opacity-10 md:group-hover:opacity-100'} transition-opacity duration-700 ease-out pointer-events-none scale-110 group-hover:scale-100`} />
      
      {/* Dark Overlay for Text Legibility */}
      <div className={`absolute inset-0 z-11 opacity-0 ${!isStacked ? 'group-hover:opacity-60' : 'opacity-20 md:group-hover:opacity-60'} bg-black transition-opacity duration-500 pointer-events-none`} />

      {/* Content Layer - Topmost */}
      <div className="relative z-20 space-y-6 pointer-events-none">
        <div className={`font-headline text-5xl text-outline opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2 ${isLightMode ? 'group-hover:text-[#df8127] group-hover:[-webkit-text-stroke-color:#df8127]' : 'group-hover:text-white group-hover:[-webkit-text-stroke-color:white]'}`}>
          {reason.number}
        </div>
        <h4 className={`font-headline text-3xl uppercase tracking-wider transition-colors duration-300 ${isLightMode ? 'text-[#2f1c12]' : 'text-on-surface'}`}>{reason.title}</h4>
        <p className={`leading-relaxed font-body text-lg transition-colors duration-300 ${isLightMode ? 'text-[#5a321d]' : 'text-on-surface-variant'}`}>{reason.description}</p>
      </div>
    </div>
  );

  return (
    <section id="why" className={`py-24 ${isLightMode ? 'bg-[#fffaf5]' : 'bg-surface'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {!isMobile ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-colors duration-300">
            {reasons.map((reason, index) => (
              <div key={index}>
                {renderCard(reason, index, false)}
              </div>
            ))}
          </div>
        ) : (
          <ScrollStack 
            className="why-attend-stack"
            useWindowScroll={true}
            itemDistance={24}
            itemStackDistance={16}
            stackPosition="10%"
            baseScale={0.96}
          >
            {reasons.map((reason, index) => (
              <ScrollStackItem key={index} itemClassName="why-attend-stack__item">
                {renderCard(reason, index, true)}
              </ScrollStackItem>
            ))}
          </ScrollStack>
        )}
      </div>
    </section>
  );
}
