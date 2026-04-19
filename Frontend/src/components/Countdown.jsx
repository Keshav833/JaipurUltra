import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 244,
    hours: 12,
    minutes: 59,
    seconds: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        seconds -= 1;
        
        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const padZero = (num) => String(num).padStart(2, '0');

  return (
    <section className="bg-surface-container-lowest py-20 border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-8 text-center space-y-8">
        <div className="font-title text-secondary tracking-[0.4em] text-sm uppercase">RACE STARTS IN</div>
        <div className="flex justify-center gap-8 md:gap-16 font-headline text-6xl md:text-[120px] leading-none">
          <div className="flex flex-col">
            <span className="text-on-surface">{padZero(timeLeft.days)}</span>
            <span className="font-title text-xs tracking-widest text-secondary mt-2">DAYS</span>
          </div>
          <span className="text-primary-container">:</span>
          <div className="flex flex-col">
            <span className="text-on-surface">{padZero(timeLeft.hours)}</span>
            <span className="font-title text-xs tracking-widest text-secondary mt-2">HRS</span>
          </div>
          <span className="text-primary-container">:</span>
          <div className="flex flex-col">
            <span className="text-on-surface">{padZero(timeLeft.minutes)}</span>
            <span className="font-title text-xs tracking-widest text-secondary mt-2">MINS</span>
          </div>
          <span className="text-primary-container">:</span>
          <div className="flex flex-col">
            <span className="text-on-surface">{padZero(timeLeft.seconds)}</span>
            <span className="font-title text-xs tracking-widest text-secondary mt-2">SECS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
