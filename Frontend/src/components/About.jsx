import { useState, useEffect, useRef } from 'react';

export default function About() {
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
    <section ref={sectionRef} className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden">
      {/* Top Section Fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none"></div>
      <div className="p-8 md:p-24 flex flex-col justify-center space-y-10 border-r border-outline-variant/20">
        <div className={`font-headline text-4xl text-outline opacity-30 ${isVisible ? 'animate-fade-in-left' : 'reveal-hidden'}`} style={{ animationDelay: '0.2s' }}>
          #01
        </div>
        <h2 className={`font-headline text-7xl leading-tight uppercase ${isVisible ? 'animate-fade-in-left' : 'reveal-hidden'}`} style={{ animationDelay: '0.4s' }}>
          NOT JUST A RACE.<br />
          <span className="text-primary-container">A CULTURAL RELAY.</span>
        </h2>
        <div className={`space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-lg ${isVisible ? 'animate-fade-in-left' : 'reveal-hidden'}`} style={{ animationDelay: '0.6s' }}>
          <p>Experience Rajasthan like never before. The Jaipur Ultra takes you from the misty shores of Jal Mahal, through the historic Pink City gates, and out into the raw, unforgiving grit of the Aravalli foothills.</p>
          <p>This isn't about personal bests; it's about endurance in its purest form. Traverse ancient fort paths and sandy riverbeds under the desert sun.</p>
        </div>
        <div className={isVisible ? 'animate-fade-in-left' : 'reveal-hidden'} style={{ animationDelay: '0.8s' }}>
          <button className="flex items-center gap-4 font-title text-primary tracking-widest group">
            <span className="h-[2px] w-12 bg-primary-container"></span>
            LEARN THE HERITAGE
          </button>
        </div>
      </div>
      <div className="relative bg-surface-container overflow-hidden h-[600px] md:h-auto rounded-3xl ">
        <img 
          alt="Runner at Dawn" 
          className="w-full h-full object-cover grayscale brightness-50 " 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZQ6sUcd7IJ5jTBsJRq4nQmzN4npTlgPZUJCs4OG6WFVULxWtKw_U2FxSBV2OAAZi9QRvm_eZSVjgL8ag41zQhlIAhJIttPHxC4iebi940mJnFsPlGAGpi0Y8reuGw3Vn5ZyDlheNpmcBgO1zQ5pLmpG44QKYoee2LQ8PKKsHv4qdg0xIt1UTRcxt8mdWGKO7aGwMEe7QwPiEL9OFlqzo6x-LIFAuq4a9UP41b70IhE9s3FCrkiRZ4WGEhrik2IL626wlDvY209cK1" 
        />
        <div className="absolute inset-0 bg-background/20"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-background via-background/60 to-transparent"></div>
      </div>
    </section>
  );
}
