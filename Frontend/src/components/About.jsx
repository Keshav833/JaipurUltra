import { useState, useEffect, useRef } from 'react';

export default function About({ isLightMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`relative min-h-[85vh] md:min-h-screen overflow-hidden ${isLightMode ? 'bg-background' : 'bg-surface'}`}>
      {/* Top Section Fade */}
      <div className="absolute inset-x-0 top-0 z-20 h-32 pointer-events-none bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="relative z-30 p-8 py-20 md:p-24 flex flex-col justify-center space-y-10 border-r border-outline-variant/10">
          <div className={`font-headline text-4xl text-outline opacity-30 ${isVisible ? 'animate-fade-in-left' : 'reveal-hidden'}`} style={{ animationDelay: '0.2s' }}>
            #01
          </div>
          <h2 className={`font-headline text-6xl md:text-7xl leading-tight uppercase ${isVisible ? 'animate-fade-in-left' : 'reveal-hidden'} ${isLightMode ? 'text-[#2f1c12]' : 'text-white'}`} style={{ animationDelay: '0.4s' }}>
            NOT JUST A RACE.<br />
            <span className="text-primary-container">A CULTURAL RELAY.</span>
          </h2>
          <div className={`space-y-6 text-lg leading-relaxed max-w-lg ${isVisible ? 'animate-fade-in-left' : 'reveal-hidden'} ${isLightMode ? 'text-[#5a321d]' : 'text-on-surface-variant'}`} style={{ animationDelay: '0.6s' }}>
            <p>Experience Rajasthan like never before. The Jaipur Ultra takes you from the misty shores of Jal Mahal, through the historic Pink City gates, and out into the raw, unforgiving grit of the Aravalli foothills.</p>
            <p>This isn't about personal bests; it's about endurance in its purest form. Traverse ancient fort paths and sandy riverbeds under the desert sun.</p>
          </div>
          <div className={isVisible ? 'animate-fade-in-left' : 'reveal-hidden'} style={{ animationDelay: '0.8s' }}>
            <button className={`flex items-center gap-4 font-title tracking-widest group transition-colors ${isLightMode ? 'text-[#8b5a3d] hover:text-[#df8127]' : 'text-primary hover:text-white'}`}>
              <span className="h-[2px] w-12 bg-primary-container"></span>
              LEARN THE HERITAGE
            </button>
          </div>
        </div>

        {/* Visual Column / Mobile Background Overlay */}
        <div className="absolute inset-0 md:relative md:block h-full w-full overflow-hidden z-10 md:z-auto bg-surface-container/50 md:bg-surface-container">
          <img 
            alt="Runner at Dawn" 
            className={`w-full h-full object-cover transition-all duration-700 ${isLightMode ? 'grayscale brightness-110 opacity-30 md:opacity-100' : 'grayscale brightness-50 opacity-20 md:opacity-100'}`} 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZQ6sUcd7IJ5jTBsJRq4nQmzN4npTlgPZUJCs4OG6WFVULxWtKw_U2FxSBV2OAAZi9QRvm_eZSVjgL8ag41zQhlIAhJIttPHxC4iebi940mJnFsPlGAGpi0Y8reuGw3Vn5ZyDlheNpmcBgO1zQ5pLmpG44QKYoee2LQ8PKKsHv4qdg0xIt1UTRcxt8mdWGKO7aGwMEe7QwPiEL9OFlqzo6x-LIFAuq4a9UP41b70IhE9s3FCrkiRZ4WGEhrik2IL626wlDvY209cK1" 
          />
          
          {/* Mobile Gradients (Always on the right as background) */}
          <div className={`absolute inset-0 md:hidden ${isLightMode ? 'bg-gradient-to-r from-background via-background/40 to-transparent' : 'bg-gradient-to-r from-surface via-surface/60 to-transparent'}`}></div>
          
          {/* Desktop Overlay Effects */}
          <div className="hidden md:block absolute inset-0 bg-background/20"></div>
          <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          <div className="hidden md:block absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-background via-background/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
