import { useState, useEffect } from "react";
import map50 from "/map50.png";
import map25 from "/map25.png";

function RaceCard({ category }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-3xl border border-outline-variant/25 bg-surface-container-low p-8 sm:p-10 lg:p-12 shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:border-primary-container/60 hover:shadow-[0_26px_70px_rgba(223,129,39,0.16)]"
    >
      {/* Background Map - Visible only on hover */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-[85%] h-[75%] opacity-0 transition-opacity duration-700 group-hover:opacity-[0.80]">
          <img 
            src={category.map} 
            alt="" 
            className=" w-full h-full object-contain rotate-[20deg]"
          />
        </div>
      </div>

      <div className="relative z-10 space-y-10">
        <h3 className={`font-headline text-5xl sm:text-6xl uppercase tracking-wide transition-all duration-500 group-hover:text-[#ff9d00] group-hover:drop-shadow-[0_0_8px_rgba(255,157,0,0.5)]`}>
          {category.title}
        </h3>
        <table className="w-full font-title text-left uppercase">
          <tbody>
            <tr className="border-b border-outline-variant/15">
              <td className="py-4 text-secondary tracking-[0.15em] text-sm sm:text-base font-bold transition-all duration-500 group-hover:text-[#ff9d00]/90">Distance</td>
              <td className="py-4 text-right text-on-surface tracking-[0.08em] font-bold text-lg sm:text-2xl transition-all duration-500 group-hover:text-[#ff9d00] group-hover:drop-shadow-[0_0_5px_rgba(255,157,0,0.4)]">{category.distance}</td>
            </tr>
            <tr className="border-b border-outline-variant/15">
              <td className="py-4 text-secondary tracking-[0.15em] text-sm sm:text-base font-bold transition-all duration-500 group-hover:text-[#ff9d00]/90">Cut-off</td>
              <td className="py-4 text-right text-on-surface tracking-[0.08em] font-bold text-lg sm:text-2xl transition-all duration-500 group-hover:text-[#ff9d00] group-hover:drop-shadow-[0_0_5px_rgba(255,157,0,0.4)]">{category.cutoff}</td>
            </tr>
            <tr className="border-b border-outline-variant/15">
              <td className="py-4 text-secondary tracking-[0.15em] text-sm sm:text-base font-bold transition-all duration-500 group-hover:text-[#ff9d00]/90">Surface</td>
              <td className="py-4 text-right text-on-surface tracking-[0.08em] font-bold text-lg sm:text-2xl transition-all duration-500 group-hover:text-[#ff9d00] group-hover:drop-shadow-[0_0_5px_rgba(255,157,0,0.4)]">{category.surface}</td>
            </tr>
            <tr>
              <td className="py-4 text-secondary tracking-[0.15em] text-sm sm:text-base font-bold transition-all duration-500 group-hover:text-[#ff9d00]/90">Aid Stations</td>
              <td className="py-4 text-right text-on-surface tracking-[0.08em] font-bold text-lg sm:text-2xl transition-all duration-500 group-hover:text-[#ff9d00] group-hover:drop-shadow-[0_0_5px_rgba(255,157,0,0.4)]">{category.aidStations}</td>
            </tr>
          </tbody>
        </table>
        <button className="w-full rounded-xl border border-outline-variant/30 bg-surface-container-highest py-5 font-title text-base sm:text-lg tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-container hover:bg-primary-container hover:text-on-primary-container">
          SELECT CHALLENGE
        </button>
      </div>

      <div className="absolute -right-8 -top-8 font-headline text-[200px] leading-none text-on-surface/5 select-none z-0 transition-all duration-500 group-hover:text-[#ff9d00]/30 group-hover:drop-shadow-[0_0_20px_rgba(255,157,0,0.2)]">
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
      cutoff: "8 HOURS",
      surface: "Mixed Terrain",
      aidStations: "12 POINTS",
      number: "50",
      map: map50
    },
    {
      title: "25KM CHALLENGE",
      distance: "25.0 KM",
      cutoff: "4.0 HOURS",
      surface: "Road & Trail",
      aidStations: "6 POINTS",
      number: "25",
      map: map25
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
