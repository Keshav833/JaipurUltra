import { useState, useEffect } from "react";
import m1 from "/m1.webp";
import m2 from "/m2.webp";

export default function RouteMap() {
  const [currentMap, setCurrentMap] = useState(0);
  const maps = [m1, m2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMap((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-surface-container-low py-24">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
        <div className="lg:col-span-1 space-y-8">
          <h2 className="font-headline text-6xl uppercase leading-tight">
            YOUR ROAD THROUGH<br />
            <span className="text-primary-container">RAJASTHAN</span>
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 bg-surface-container-highest flex flex-col gap-2">
              <span className="font-title text-secondary tracking-widest text-xs">START POINT</span>
              <span className="font-headline text-2xl">JAL MAHAL PALACE</span>
            </div>
            <div className="p-6 bg-surface-container-highest flex flex-col gap-2">
              <span className="font-title text-secondary tracking-widest text-xs">SURFACE TYPE</span>
              <span className="font-headline text-2xl">COBBLESTONE & SAND</span>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 relative h-[500px] rounded-3xl bg-background overflow-hidden border border-outline-variant/20">
          {maps.map((map, index) => (
            <img 
              key={index}
              alt={`Route Map ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                currentMap === index ? "opacity-60" : "opacity-0"
              } brightness-90`} 
              src={map} 
            />
          ))}
          <div className="absolute inset-0 ring-1 ring-inset ring-outline-variant/20 pointer-events-none"></div>
          
          {/* Progress Indicator */}
          <div className="absolute bottom-6 right-6 flex gap-2 z-10">
            {maps.map((_, index) => (
              <div 
                key={index}
                className={`h-1 transition-all duration-300 ${
                  currentMap === index ? "w-8 bg-primary-container" : "w-4 bg-outline-variant/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
