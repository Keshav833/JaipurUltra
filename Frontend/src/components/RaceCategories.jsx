import { useState, useEffect } from "react";
import map1 from "/map1.webp";

function RaceCard({ category }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRevealed) {
      timer = setTimeout(() => {
        setIsSpinning(true);
      }, 1250);
    } else {
      setIsSpinning(false);
    }
    return () => clearTimeout(timer);
  }, [isRevealed]);

  return (
    <div 
      className="group relative overflow-hidden rounded-3xl border border-outline-variant/25 bg-surface-container-low p-8 sm:p-10 lg:p-12 shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:border-primary-container/60 hover:shadow-[0_26px_70px_rgba(223,129,39,0.16)]"
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      <div className="relative z-10 space-y-10">
        <h3 className="font-headline text-4xl sm:text-5xl uppercase tracking-wide">{category.title}</h3>
        <table className="w-full font-title text-left uppercase">
          <tbody>
            <tr className="border-b border-outline-variant/15">
              <td className="py-4 text-secondary tracking-[0.15em] text-xs sm:text-sm">Distance</td>
              <td className="py-4 text-right text-on-surface tracking-[0.08em]">{category.distance}</td>
            </tr>
            <tr className="border-b border-outline-variant/15">
              <td className="py-4 text-secondary tracking-[0.15em] text-xs sm:text-sm">Cut-off</td>
              <td className="py-4 text-right text-on-surface tracking-[0.08em]">{category.cutoff}</td>
            </tr>
            <tr className="border-b border-outline-variant/15">
              <td className="py-4 text-secondary tracking-[0.15em] text-xs sm:text-sm">Surface</td>
              <td className="py-4 text-right text-on-surface tracking-[0.08em]">{category.surface}</td>
            </tr>
            <tr>
              <td className="py-4 text-secondary tracking-[0.15em] text-xs sm:text-sm">Aid Stations</td>
              <td className="py-4 text-right text-on-surface tracking-[0.08em]">{category.aidStations}</td>
            </tr>
          </tbody>
        </table>
        <button className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-highest py-4 font-title text-sm sm:text-base tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-container hover:bg-primary-container hover:text-on-primary-container">
          SELECT CHALLENGE
        </button>
      </div>

    <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center p-8 overflow-visible preserve-3d">
  <div className={`map-wrap-base w-[340px]  h-[340px] ${isRevealed ? 'map-reveal' : ''} ${isSpinning ? 'map-spin' : ''}`}>
    <img 
      src={map1} 
      alt="Route Map" 
      className="w-full h-full object-contain"
    />
  </div>
</div>

      <div className="absolute -right-8 -top-8 font-headline text-[200px] leading-none text-on-surface/5 select-none">
        {category.number}
      </div>
    </div>
  );
}

export default function RaceCategories() {
  const categories = [
    {
      title: "50KM ULTRA",
      distance: "50.0 KM",
      cutoff: "8.5 HOURS",
      surface: "Mixed Terrain",
      aidStations: "12 POINTS",
      number: "50"
    },
    {
      title: "25KM CHALLENGE",
      distance: "25.0 KM",
      cutoff: "4.0 HOURS",
      surface: "Road & Trail",
      aidStations: "6 POINTS",
      number: "25"
    }
  ];

  return (
    <section className="py-24 px-8 max-w-[1440px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <h2 className="font-headline text-8xl uppercase leading-[0.8]">
          CHOOSE YOUR<br />
          <span className="text-primary-container">BATTLE</span>
        </h2>
        <div className="font-title text-secondary tracking-[0.2em] mb-4">PICK YOUR DISTANCE</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((category, index) => (
          <RaceCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}
