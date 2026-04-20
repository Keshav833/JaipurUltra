import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.avif";
import img6 from "../assets/img6.avif";

export default function WhyAttend({ isLightMode }) {
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
      description: "World-class safety and aid stations every 4KM with medical support.",
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
      description: "Custom sand-blasted metal medals and local heritage kits.",
      image: img5
    },
    {
      number: "06",
      title: "CULTURAL GALA",
      description: "Post-race desert celebration with traditional Rajasthani food.",
      image: img6
    }
  ];

  return (
    <section id="why" className={`py-24 ${isLightMode ? 'bg-[#fffaf5]' : 'bg-surface'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 transition-colors duration-300">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`group relative p-8 min-h-[280px] flex flex-col justify-between overflow-hidden rounded-[1.5rem] transition-all duration-500 hover:-translate-y-2 ${isLightMode ? 'bg-white shadow-[0_20px_50px_rgba(122,74,43,0.08)] hover:shadow-[0_40px_80px_rgba(122,74,43,0.15)]' : 'bg-surface-container-low border border-white/5 shadow-2xl hover:bg-surface-container-high'}`}
              style={{ '--bg-image': `url(${reason.image})` }}
            >
              {/* Background Image Layer - High Z Elevation */}
              <div className="absolute inset-0 z-10 opacity-0 bg-cover bg-center bg-[image:var(--bg-image)] group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none scale-110 group-hover:scale-100" />
              
              {/* Dark Overlay for Text Legibility */}
              <div className="absolute inset-0 z-[11] opacity-0 group-hover:opacity-60 bg-black transition-opacity duration-500 pointer-events-none" />

              {/* Content Layer - Topmost */}
              <div className="relative z-20 space-y-6 pointer-events-none">
                <div className={`font-headline text-5xl text-outline opacity-20 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2 ${isLightMode ? 'group-hover:text-[#df8127] group-hover:[-webkit-text-stroke-color:#df8127]' : 'group-hover:text-white group-hover:[-webkit-text-stroke-color:white]'}`}>
                  {reason.number}
                </div>
                <h4 className={`font-headline text-3xl uppercase tracking-wider transition-colors duration-300 ${isLightMode ? 'text-[#2f1c12]' : 'text-on-surface'}`}>{reason.title}</h4>
                <p className={`leading-relaxed font-body text-lg transition-colors duration-300 ${isLightMode ? 'text-[#5a321d]' : 'text-on-surface-variant'}`}>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
