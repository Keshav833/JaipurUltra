export default function Navbar() {
  return (
    <header className="bg-[#17130f] border-b border-[#594138]/20 sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-[1440px] mx-auto">
        <div className="font-headline text-3xl font-bold text-on-surface uppercase tracking-tighter">
          JAIPUR <span className="text-[#f36323]">ULTRA</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-headline uppercase tracking-[0.1em] text-lg">
          <a className="text-[#f36323] border-b-2 border-[#f36323] pb-1" href="#">Home</a>
          <a className="text-[#ebe0da] hover:text-[#f36323] transition-colors" href="#">Race Categories</a>
          <a className="text-[#ebe0da] hover:text-[#f36323] transition-colors" href="#">Route</a>
          <a className="text-[#ebe0da] hover:text-[#f36323] transition-colors" href="#">Gallery</a>
          <a className="text-[#ebe0da] hover:text-[#f36323] transition-colors" href="#">FAQ</a>
          <a className="text-[#ebe0da] hover:text-[#f36323] transition-colors" href="#">Contact</a>
        </div>
        <button className="bg-[#f36323] text-[#17130f] font-title font-bold px-6 py-2 uppercase tracking-wider hover:bg-primary transition-all duration-300 active:scale-95">
          REGISTER NOW
        </button>
      </nav>
    </header>
  );
}
