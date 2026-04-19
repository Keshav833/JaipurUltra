export default function Footer() {
  return (
    <footer className="bg-[#110d0a] border-t-2 border-[#f36323]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-16 w-full max-w-[1440px] mx-auto">
        <div className="space-y-6">
          <div className="font-headline text-4xl text-[#ebe0da]">JAIPUR ULTRA</div>
          <p className="font-title uppercase tracking-widest text-sm text-[#d1c5ae] max-w-xs">
            THE ULTIMATE DESERT MARATHON IN THE HEART OF THE PINK CITY. EXPERIENCE THE GRIT.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#f36323] cursor-pointer hover:scale-110 transition-transform">public</span>
            <span className="material-symbols-outlined text-[#f36323] cursor-pointer hover:scale-110 transition-transform">share</span>
            <span className="material-symbols-outlined text-[#f36323] cursor-pointer hover:scale-110 transition-transform">mail</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 font-title uppercase tracking-widest text-sm">
            <span className="text-[#f36323] mb-2">QUICK LINKS</span>
            <a className="text-[#d1c5ae] hover:text-[#f36323] transition-all" href="#">Home</a>
            <a className="text-[#d1c5ae] hover:text-[#f36323] transition-all" href="#">Race Info</a>
            <a className="text-[#d1c5ae] hover:text-[#f36323] transition-all" href="#">Volunteer</a>
            <a className="text-[#d1c5ae] hover:text-[#f36323] transition-all" href="#">Sponsorship</a>
          </div>
          <div className="flex flex-col gap-4 font-title uppercase tracking-widest text-sm">
            <span className="text-[#f36323] mb-2">LEGAL</span>
            <a className="text-[#d1c5ae] hover:text-[#f36323] transition-all" href="#">Privacy Policy</a>
            <a className="text-[#d1c5ae] hover:text-[#f36323] transition-all" href="#">Terms of Service</a>
          </div>
        </div>
        
        <div className="flex flex-col justify-between items-end">
          <div className="text-right">
            <span className="font-title uppercase tracking-[0.2em] text-sm text-[#d1c5ae]">Made with grit in Jaipur</span>
          </div>
          <div className="mt-8 text-right font-title uppercase tracking-widest text-xs text-[#d1c5ae]/50">
            © 2024 JAIPUR ULTRA MARATHON. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
