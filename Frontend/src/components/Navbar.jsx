export default function Navbar() {
  return (
    <header className="bg-[#17130f] border-b border-outline-variant/20 sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-[1440px] mx-auto">
        <div className="font-headline text-3xl font-bold text-on-surface uppercase tracking-tighter">
          JAIPUR <span className="text-primary-container">ULTRA</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-headline uppercase tracking-widest text-lg">
          <a className="text-primary-container border-b-2 border-primary-container pb-1" href="#">Home</a>
          <a className="text-[#ebe0da] hover:text-primary-container transition-colors" href="#">Race Categories</a>
          <a className="text-[#ebe0da] hover:text-primary-container transition-colors" href="#">Route</a>
          <a className="text-[#ebe0da] hover:text-primary-container transition-colors" href="#">Gallery</a>
          <a className="text-[#ebe0da] hover:text-primary-container transition-colors" href="#">FAQ</a>
          <a className="text-[#ebe0da] hover:text-primary-container transition-colors" href="#">Contact</a>
        </div>
        <button className="bg-primary-container text-[#17130f] font-title font-bold px-6 py-2 uppercase tracking-wider hover:bg-primary transition-all duration-300 active:scale-95">
          REGISTER NOW
        </button>
      </nav>
    </header>
  );
}
