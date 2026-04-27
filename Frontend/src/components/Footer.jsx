import FeedbackForm from "./FeedbackForm";

export default function Footer({ isLightMode }) {
  return (
    <footer className={`relative overflow-hidden border-t-2 border-primary-container transition-colors duration-300 ${isLightMode ? 'bg-[#fff9f4] text-[#2f1c12]' : 'bg-surface-container-lowest text-[#ebe0da]'}`}>
      {/* Footer Background Image */}
      <div className={`absolute inset-0 pointer-events-none opacity-[0.12] ${isLightMode ? 'grayscale brightness-150' : 'grayscale invert brightness-[2.5]'}`}>
        <img src="/foot.png" alt="" className="w-full h-full object-cover object-center" />
      </div>

      <div className="relative z-10 px-8 pb-12 pt-32 w-full max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="space-y-6">
            <a href="#top" className="flex items-center gap-3 shrink-0 group mb-6">
              <img src="/JU_Logo.png" alt="Jaipur Ultra logo" className="h-14 w-auto drop-shadow-[0_4px_20px_rgba(35,15,8,0.2)]" />
              <div className="flex flex-col leading-[0.75]">
                <span className={`font-headline text-2xl font-black tracking-tight ${isLightMode ? 'text-[#2f1c12]' : 'text-white'}`}>JAIPUR</span>
                <span className="font-headline text-xl font-black tracking-tighter text-[#ff9800]">ULTRA</span>
              </div>
            </a>
            <p className={`font-title uppercase tracking-widest text-sm max-w-xs ${isLightMode ? 'text-[#53392b]' : 'text-secondary'}`}>
              THE ULTIMATE DESERT MARATHON IN THE HEART OF THE PINK CITY. EXPERIENCE THE GRIT.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/jaipurultra/" target="_blank" rel="noopener noreferrer" className="text-primary-container cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/jaipurultra?igsh=a3EzZWJ1ZzBldDNt" target="_blank" rel="noopener noreferrer" className="text-primary-container cursor-pointer hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jaipurultra@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-container cursor-pointer hover:scale-110 transition-transform"
              >
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-1 lg:col-span-2">
            <div className="flex flex-col gap-4 font-title uppercase tracking-widest text-sm">
              <span className="text-primary-container mb-2">QUICK LINKS</span>
              <a className={`hover:text-primary-container transition-all ${isLightMode ? 'text-[#53392b]' : 'text-secondary'}`} href="#">Home</a>
              <a className={`hover:text-primary-container transition-all ${isLightMode ? 'text-[#53392b]' : 'text-secondary'}`} href="#">Race Info</a>
              <a className={`hover:text-primary-container transition-all ${isLightMode ? 'text-[#53392b]' : 'text-secondary'}`} href="#">Volunteer</a>
            </div>
            <div className="flex flex-col gap-4 font-title uppercase tracking-widest text-sm">
              <span className="text-primary-container mb-2">CONTACT</span>
              <div className="flex flex-col gap-1">
                <span className={`text-xs opacity-50 ${isLightMode ? 'text-[#2f1c12]' : 'text-[#ebe0da]'}`}>EMAIL</span>
                <a 
                  className={`hover:text-primary-container transition-all normal-case ${isLightMode ? 'text-[#53392b]' : 'text-secondary'}`} 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=jaipurultra@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jaipurultra@gmail.com
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className={`text-xs opacity-50 ${isLightMode ? 'text-[#2f1c12]' : 'text-[#ebe0da]'}`}>PHONE</span>
                <a className={`hover:text-primary-container transition-all ${isLightMode ? 'text-[#53392b]' : 'text-secondary'}`} href="tel:9625793979">9625793979</a>
              </div>
            </div>
            <div className="flex flex-col gap-4 font-title uppercase tracking-widest text-sm col-span-2 md:col-span-1">
              <span className="text-primary-container mb-2">LEGAL</span>
              <a className={`hover:text-primary-container transition-all ${isLightMode ? 'text-[#53392b]' : 'text-secondary'}`} href="#">Privacy Policy</a>
              <a className={`hover:text-primary-container transition-all ${isLightMode ? 'text-[#53392b]' : 'text-secondary'}`} href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Horizontal on Desktop */}
        <div className={`pt-10 border-t flex flex-col lg:flex-row items-center justify-between gap-8 ${isLightMode ? 'border-[#53392b]/10' : 'border-white/10'}`}>
          <div className="order-2 lg:order-1">
            <span className={`font-title uppercase tracking-[0.2em] text-[10px] md:text-xs ${isLightMode ? 'text-[#53392b]' : 'text-secondary'}`}>Made with grit in Jaipur</span>
          </div>
          
          <div className={`order-3 lg:order-2 font-title uppercase tracking-widest text-[9px] md:text-[10px] opacity-60 ${isLightMode ? 'text-[#53392b]' : 'text-secondary'}`}>
            © 2024 JAIPUR ULTRA MARATHON. ALL RIGHTS RESERVED.
          </div>

          <div className="order-1 lg:order-3 w-full lg:w-auto flex justify-end">
            <FeedbackForm isLightMode={isLightMode} />
          </div>
        </div>
      </div>
    </footer>
  );
}
