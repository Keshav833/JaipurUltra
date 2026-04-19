export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-start px-8 md:px-24 overflow-hidden">
      {/* Background Layering */}
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_50%_50%,_rgba(243,99,35,0.12),_transparent_70%)]"></div>
      <div className="absolute inset-0 z-[-2] flex justify-between px-24 pointer-events-none">
        <div className="vertical-grid-line"></div>
        <div className="vertical-grid-line"></div>
        <div className="vertical-grid-line"></div>
        <div className="vertical-grid-line hidden md:block"></div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="font-title text-xl md:text-2xl tracking-[0.3em] text-secondary font-medium">
          JAIPUR, RAJASTHAN · 1 NOVEMBER 2026
        </div>
        <h1 className="font-headline text-[15vw] leading-[0.8] tracking-tighter uppercase flex flex-col">
          <span className="text-on-surface">RUN</span>
          <span className="text-primary-container">THE PINK</span>
          <span className="text-outline">LEGACY</span>
        </h1>
      </div>

      {/* Footer Elements of Hero */}
      <div className="absolute bottom-16 left-8 md:left-24 flex flex-wrap gap-4">
        <div className="bg-surface-container-high px-6 py-2 font-title text-lg tracking-widest border-l-4 border-primary-container">50K ULTRA</div>
        <div className="bg-surface-container-high px-6 py-2 font-title text-lg tracking-widest border-l-4 border-primary-container">25K CHALLENGE</div>
        <div className="bg-surface-container-high px-6 py-2 font-title text-lg tracking-widest border-l-4 border-primary-container">5:00 AM START</div>
      </div>

      <div className="absolute bottom-16 right-8 md:right-24 flex flex-col md:flex-row gap-6 items-end md:items-center">
        <button className="bg-primary-container text-on-primary-container px-10 py-4 font-title text-xl font-bold uppercase tracking-widest hover:bg-primary transition-all">
          REGISTER NOW
        </button>
        <button className="border-2 border-outline text-on-surface px-10 py-4 font-title text-xl font-bold uppercase tracking-widest hover:bg-outline-variant/20 transition-all">
          EXPLORE ROUTE
        </button>
      </div>
    </section>
  );
}
