import { useEffect, useMemo, useState, useRef } from 'react'
import RaceCategories from '../components/RaceCategories'
import RouteMap from '../components/RouteMap'
import WhyAttend from '../components/WhyAttend'
import Footer from '../components/Footer'
import About from '../components/About'
const raceCategories = [
  {
    distance: '50',
    title: '50KM ULTRA',
    stats: [
      ['Distance', '50.0 KM'],
      ['Cut-off', '8.5 HOURS'],
      ['Surface', 'Mixed Terrain'],
      ['Aid Stations', '12 POINTS'],
    ],
  },
  {
    distance: '25',
    title: '25KM CHALLENGE',
    stats: [
      ['Distance', '25.0 KM'],
      ['Cut-off', '4.0 HOURS'],
      ['Surface', 'Road & Trail'],
      ['Aid Stations', '6 POINTS'],
    ],
  },
]



const testimonials = [
  {
    quote:
      'The most brutal and beautiful 50K I have ever run. The climb to the fort was punishing but the view was worth every drop of sweat.',
    name: 'Markus Veldt',
    detail: '50K FINISHER (2024)',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
  },
  {
    quote:
      "Jaipur Ultra isn't a race, it's a pilgrimage. The energy of the city waking up as you run through the gates is something I'll never forget.",
    name: 'Anjali Sharma',
    detail: '25K CHALLENGER (2025)',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
  },
  {
    quote:
      'Sand, heat, and heritage. A perfect cocktail for any ultra-runner looking for their next level. Rajasthan is simply magical.',
    name: 'David Chen',
    detail: '50K FINISHER (2025)',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80',
  },
  {
    quote:
      'Everything felt premium, from the aid stations to the route markings. Jaipur Ultra balances tough terrain with incredible race management.',
    name: 'Rhea Kapoor',
    detail: '25K FINISHER (2025)',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80',
  },
  {
    quote:
      'Running past the forts at sunrise felt unreal. It was one of those races where every kilometer gave you a new memory.',
    name: 'Omar Haddad',
    detail: '50K FINISHER (2024)',
    avatar:
      'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=160&q=80',
  },
  {
    quote:
      'I came for the challenge and stayed for the atmosphere. The volunteers, local support, and finish-line energy were absolutely top-tier.',
    name: 'Sneha Beniwal',
    detail: 'First-Time Ultra Runner',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80',
  },
]

const faqs = [
  {
    question: 'When is the Jaipur Ultra 2026 scheduled?',
    answer:
      'The Jaipur Ultra will be held on 1st November 2026. The race will start from the iconic Jal Mahal at 05:00 HRS. Please arrive at least 1 hour early for bib collection, kit distribution, and a pre-race briefing.',
  },
  {
    question: 'What are the race categories and cut-off times?',
    answer:
      '50 KM Ultra Marathon – Cut-off: 8 hours\n25 KM Challenge – Cut-off: 4 hours\n\nRunners must cross designated checkpoints within the allotted cut-off times to continue in the race.',
  },
  {
    question: 'What are the basic race rules?',
    answer:
      '• Follow the marked route at all times — shortcuts will result in disqualification.\n• No littering — carry your waste until the next aid station.\n• Headphones are discouraged for safety reasons.\n• Bib numbers must be worn visibly on the front throughout the race.\n• Support crew is only allowed at designated aid stations.',
  },
  {
    question: 'How do I reach the Jaipur Ultra start line?',
    answer:
      'The race starts from Jal Mahal, located on the Jaipur-Amer Road, easily accessible by:\n\nAir – Jaipur International Airport (20–25 mins drive)\nRail – Jaipur Junction Railway Station (20 mins drive)\nRoad – Well connected via NH48 and NH52.\n\nWe recommend staying in Jaipur city the night before for a stress-free race morning.',
  },
  {
    question: 'What is the refund and cancellation policy?',
    answer:
      '• Cancellations made up to 30 days before race day – 50% refund.\n• Cancellations made less than 30 days before race day – no refund.\n• In case of extreme weather or government restrictions, the event will be rescheduled and entries will be transferred to the new date.',
  },
  {
    question: 'What should I carry for the race?',
    answer:
      'We recommend:\n\n• Hydration pack or handheld bottles\n• Cap or headgear for sun protection\n• Energy gels or snacks\n• Lightweight running apparel suitable for winter mornings in Jaipur\n• A sense of adventure!',
  },
]

const galleryImages = [
  {
    src: '/images1.jpg',
    alt: 'Jaipur Ultra event gallery image 1',
    className: 'col-span-2 row-span-2',
  },
  {
    src: '/images2.jpg',
    alt: 'Jaipur Ultra event gallery image 2',
    className: '',
  },
  {
    src: '/images3.jpg',
    alt: 'Jaipur Ultra event gallery image 3',
    className: 'row-span-2',
  },
  {
    src: '/images4.jpg',
    alt: 'Jaipur Ultra event gallery image 4',
    className: '',
  },
  {
    src: '/images5.jpg',
    alt: 'Jaipur Ultra event gallery image 5',
    className: 'col-span-2',
  },
  {
    src: '/images6.jpg',
    alt: 'Jaipur Ultra event gallery image 6',
    className: '',
  },
  {
    src: '/images7.jpg',
    alt: 'Jaipur Ultra event gallery image 7',
    className: '',
  },
]

function CountdownTimer() {
  const targetTime = useMemo(() => new Date('2026-11-01T05:00:00+05:30').getTime(), [])
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, targetTime - Date.now()))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(Math.max(0, targetTime - Date.now()))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [targetTime])

  const totalSeconds = Math.floor(timeLeft / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const items = [
    { label: 'DAYS', value: String(days).padStart(3, '0') },
    { label: 'HRS', value: String(hours).padStart(2, '0') },
    { label: 'MINS', value: String(minutes).padStart(2, '0') },
    { label: 'SECS', value: String(seconds).padStart(2, '0') },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 font-headline text-5xl leading-none md:gap-8 md:text-[120px] lg:gap-16">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-start gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <span className="text-on-surface">{item.value}</span>
            <span className="mt-2 font-title text-xs tracking-widest text-secondary">
              {item.label}
            </span>
          </div>
          {index < items.length - 1 ? <span className="text-primary-container">:</span> : null}
        </div>
      ))}
    </div>
  )
}

function FAQItem({ faq, isOpen, onToggle, isLightMode }) {
  return (
    <div className="group relative bg-transparent transition-all duration-500">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-4 text-left transition-all"
      >
        <div className="relative flex-1 overflow-hidden">
          <span className={`block font-title text-2xl uppercase tracking-[0.05em] transition-all duration-500 md:text-3xl ${isOpen ? 'translate-x-4 text-primary-container' : (isLightMode ? 'text-[#2f1c12]' : 'text-white')}`}>
            {faq.question}
          </span>
          {/* Animated Underline */}
          <div className={`mt-2 h-[2px] transition-all duration-700 ${isOpen ? 'w-full bg-primary-container' : 'w-12 bg-outline-variant/30 group-hover:w-24 group-hover:bg-primary-container/50'}`}></div>
        </div>

        <div className={`flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-500 ${isOpen ? 'rotate-180 border-primary-container bg-primary-container text-on-primary-container shadow-[0_0_25px_rgba(243,99,35,0.4)]' : (isLightMode ? 'border-[#d6aa90] text-[#7a4a2b]' : 'border-white/20 text-white hover:border-white/50')}`}>
          <span className="material-symbols-outlined text-3xl font-bold">
            {isOpen ? 'remove' : 'add'}
          </span>
        </div>
      </button>

      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-4 pr-12 md:pl-20">
            <p className={`whitespace-pre-line text-lg leading-relaxed md:text-xl lg:max-w-4xl ${isLightMode ? 'text-[#5a321d]' : 'text-on-surface-variant'}`}>
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function getTestimonialOffset(index, activeIndex, total) {
  let offset = index - activeIndex

  if (offset > total / 2) {
    offset -= total
  }

  if (offset < -total / 2) {
    offset += total
  }

  return offset
}

function GalleryItem({ image, isLightMode }) {
  const [isActive, setIsActive] = useState(false)
  const itemRef = useRef(null)

  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (!isMobile) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting)
      },
      {
        rootMargin: '-35% 0px -35% 0px',
        threshold: 0,
      }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={itemRef}
      className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
        image.className
      } ${
        isLightMode
          ? 'border-[#ebc9a8] shadow-[0_8px_20px_rgba(137,90,59,0.06)]'
          : 'border-outline-variant/30 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
      }`}
    >
      <img
        alt={image.alt}
        className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.05] ${
          isActive ? 'grayscale-0' : 'grayscale md:group-hover:grayscale-0'
        }`}
        src={image.src}
      />
      <div
        className={`absolute inset-0 transition-all duration-700 ${
          isActive ? 'bg-background/0' : 'bg-background/40 md:group-hover:bg-background/0'
        }`}
      />
    </div>
  )
}

export default function Home() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    return window.localStorage.getItem('jaipur-ultra-theme') ?? 'dark'
  })
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('jaipur-ultra-theme', theme)
  }, [theme])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length)
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [])

  const isLightMode = theme === 'light'
  const visibleTestimonials = Array.from({ length: 3 }, (_, index) => {
    return testimonials[(activeTestimonial + index) % testimonials.length]
  })

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-6 md:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3 shrink-0 group">
            <img src="/JU_Logo.png" alt="Jaipur Ultra logo" className="h-14 w-auto drop-shadow-[0_10px_30px_rgba(35,15,8,0.2)] md:h-16 transition-transform group-hover:scale-105" />
            <div className="flex flex-col leading-[0.75] transition-transform group-hover:translate-x-1">
              <span className="font-headline text-2xl font-black tracking-tight text-white md:text-3xl">JAIPUR</span>
              <span className="font-headline text-xl font-black tracking-tighter text-[#ff9800] md:text-2xl">ULTRA</span>
            </div>
          </a>
          <div className={`hidden items-center space-x-10 font-title text-xl font-semibold tracking-wide md:flex ${isLightMode ? 'text-[#5a321d]' : 'text-[#fff4ef]'}`}>
            <a className={`transition-colors ${isLightMode ? 'hover:text-[#b85c18]' : 'hover:text-[#ffdfc7]'}`} href="#top">
              Home
            </a>
            <a className={`transition-colors ${isLightMode ? 'hover:text-[#b85c18]' : 'hover:text-[#ffdfc7]'}`} href="#categories">
              Categories
            </a>
            <a className={`transition-colors ${isLightMode ? 'hover:text-[#b85c18]' : 'hover:text-[#ffdfc7]'}`} href="#faq">
              FAQ
            </a>
            <a className={`transition-colors ${isLightMode ? 'hover:text-[#b85c18]' : 'hover:text-[#ffdfc7]'}`} href="#footer">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(isLightMode ? 'dark' : 'light')}
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${isLightMode ? 'border-[#d6aa90] bg-white/70 text-[#7a4a2b] backdrop-blur-md hover:bg-white' : 'border-white/35 bg-black/20 text-white backdrop-blur-md hover:bg-black/30'}`}
              aria-label={isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isLightMode ? 'dark_mode' : 'light_mode'}
              </span>
            </button>
            <a
              href="#categories"
              className="hidden rounded-full bg-[#df8127] px-8 py-3 font-title text-xl font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#c96e1f] md:inline-flex"
            >
              Register
            </a>
            <a
              href="#categories"
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-sm md:hidden ${isLightMode ? 'border-[#d6aa90] bg-white/70' : 'border-white/40 bg-white/10'}`}
              aria-label="Open registration"
            >
              <span className={`material-symbols-outlined ${isLightMode ? 'text-[#b85c18]' : 'text-white'}`}>directions_run</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden text-center">
          <div className="relative z-[-4]">
            {/* Desktop Hero Image */}
            <img
              src="/hero2.webp"
              alt="Jaipur Ultra desktop backdrop"
              className="hidden h-auto w-full md:block"
            />
            {/* Mobile Hero Image */}
            <img
              src="/hero3.png"
              alt="Jaipur Ultra mobile backdrop"
              className="block h-auto w-full md:hidden"
            />
          </div>
          <div
            className={`absolute inset-0 z-[-3] ${isLightMode ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,228,208,0.08)_30%,rgba(255,255,255,0.02)_100%)]' : 'bg-[linear-gradient(180deg,rgba(47,58,115,0.18)_0%,rgba(127,76,129,0.14)_18%,rgba(214,117,88,0.08)_42%,rgba(23,19,15,0.04)_100%)]'}`}
          />
          <div
            className={`absolute inset-0 z-[-2] ${isLightMode ? 'bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.22),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_26%)]' : 'bg-[radial-gradient(circle_at_50%_32%,rgba(255,245,240,0.18),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_26%)]'}`}
          />
          <div
            className={`absolute inset-x-0 top-0 z-[-1] h-[46%] ${isLightMode ? 'bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0))]' : 'bg-[linear-gradient(180deg,rgba(73,85,150,0.42),rgba(0,0,0,0))]'}`}
          />
          <div className="absolute inset-x-0 bottom-0 z-[-1] h-[20%] bg-gradient-to-b from-transparent via-background/48 to-background" />

          {/* Background Clouds */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-2]">
            {/* Left Clouds - move left when scrolling */}
            <div 
              className="absolute top-[8%] left-[8%] w-[18vw]" 
              style={{ transform: `translateX(-${scrollY * 0.6}px)` }}
            >
              <img 
                src="/cloud.png" 
                className="w-full opacity-40 animate-float" 
                style={{ animationDuration: '7s', animationDelay: '0s' }} 
                alt=""
              />
            </div>
            <div 
              className="absolute top-[32%] left-[22%] w-[14vw]" 
              style={{ transform: `translateX(-${scrollY * 0.3}px)` }}
            >
              <img 
                src="/cloud.png" 
                className="w-full opacity-25 animate-float" 
                style={{ animationDuration: '9s', animationDelay: '0.8s' }} 
                alt=""
              />
            </div>

            {/* Right Clouds - move right when scrolling */}
            <div 
              className="absolute top-[12%] right-[12%] w-[22vw]" 
              style={{ transform: `translateX(${scrollY * 0.7}px)` }}
            >
              <img 
                src="/cloud.png" 
                className="w-full opacity-30 animate-float" 
                style={{ animationDuration: '8s', animationDelay: '1.5s' }} 
                alt=""
              />
            </div>
            <div 
              className="absolute top-[28%] right-[25%] w-[19vw]" 
              style={{ transform: `translateX(${scrollY * 0.4}px)` }}
            >
              <img 
                src="/cloud.png" 
                className="w-full opacity-35 animate-float" 
                style={{ animationDuration: '7.5s', animationDelay: '2.2s' }} 
                alt=""
              />
            </div>
          </div>

          <div 
            className="absolute inset-x-0 top-0 mx-auto flex w-full max-w-none flex-col items-center px-6 pb-14 pt-28 md:px-8 md:pb-16 md:pt-36 lg:px-12"
            style={{ transform: `translateY(-${scrollY * 0.25}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}
          >
            <div className="mt-4 max-w-4xl space-y-4 md:-mt-2">
              <div className="font-title text-sm font-semibold tracking-[0.35em] text-[#fff0eb] md:text-base">
                JAIPUR, RAJASTHAN
              </div>
              <h1 className="hero-poster-title text-[11vw] leading-[0.98] text-white md:text-[8.2vw] lg:text-[5.1rem]">
                <span className="md:hidden">CONQUER THE ROAD</span>
                <span className="hidden md:inline">
                  Conquer the Road
                  <br />
                  Own the Distance
                </span>
              </h1>
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#fff1e6] drop-shadow-[0_3px_12px_rgba(50,22,12,0.24)] md:text-base">
                From the shores of Jal Mahal into the heart of Rajasthan, Jaipur Ultra delivers a sunrise run through heritage walls, open roads, and long-distance grit.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10">
              <div className={`rounded-full px-5 py-2 font-title text-sm font-semibold tracking-[0.24em] backdrop-blur-md md:text-base ${isLightMode ? 'border border-white/50 bg-white/42 text-[#3b2417]' : 'border border-white/18 bg-black/8 text-white'}`}>
                50K ULTRA
              </div>
              <div className={`rounded-full px-5 py-2 font-title text-sm font-semibold tracking-[0.24em] backdrop-blur-md md:text-base ${isLightMode ? 'border border-white/50 bg-white/42 text-[#3b2417]' : 'border border-white/18 bg-black/8 text-white'}`}>
                25K CHALLENGE
              </div>
             
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#categories"
                className="rounded-full bg-[#df8127] px-8 py-3 text-center font-title text-lg font-bold tracking-wide text-white transition-all hover:bg-[#c96e1f] md:px-10 md:py-4 md:text-xl"
              >
                Join the Race
              </a>
              <a
                href="#route"
                className={`hidden rounded-full px-8 py-3 text-center font-title text-lg font-bold tracking-wide backdrop-blur-sm transition-all md:inline-flex md:px-10 md:py-4 md:text-xl ${isLightMode ? 'border border-white/55 bg-white/36 text-[#40261a] hover:bg-white/48' : 'border border-white/30 bg-white/10 text-white hover:bg-white/18'}`}
              >
                Explore Route
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant/20 bg-surface-container-lowest py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="mb-8 font-title text-sm uppercase tracking-[0.4em] text-secondary">
              RACE STARTS IN
            </div>
            <CountdownTimer />
          </div>
        </section>

        <About isLightMode={isLightMode} />

        <RaceCategories />

        <RouteMap />

        <section id="gallery" className="py-24">
          <div className="mx-auto mb-16 max-w-[1440px] px-6 md:px-8">
            <h2 className="font-headline text-5xl uppercase tracking-tighter md:text-6xl">
              THE GRIT IN <span className="text-primary-container">MOTION</span>
            </h2>
          </div>
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 px-4 md:auto-rows-[190px] md:grid-cols-4 lg:h-[800px] lg:auto-rows-auto">
            {galleryImages.map((image) => (
              <GalleryItem key={image.alt} image={image} isLightMode={isLightMode} />
            ))}
          </div>
        </section>

        <WhyAttend isLightMode={isLightMode} />

        <section
          className={`overflow-hidden px-6 py-24 md:px-8 ${isLightMode ? 'bg-background' : 'bg-surface'}`}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className={`relative overflow-hidden rounded-[2rem] px-6 py-16 md:px-10 lg:px-14 ${
                isLightMode
                  ? 'bg-surface shadow-[0_30px_90px_rgba(122,74,43,0.12)]'
                  : 'bg-surface-container shadow-[0_30px_120px_rgba(0,0,0,0.45)] border border-white/5'
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 ${
                  isLightMode
                    ? 'bg-gradient-to-r from-surface via-surface/80 to-transparent'
                    : 'bg-gradient-to-r from-surface-container via-surface-container/80 to-transparent'
                }`}
              />
              <div
                className={`pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 ${
                  isLightMode
                    ? 'bg-gradient-to-l from-surface via-surface/80 to-transparent'
                    : 'bg-gradient-to-l from-surface-container via-surface-container/80 to-transparent'
                }`}
              />
              <div className="mx-auto max-w-3xl text-center">
                <div
                  className={`inline-flex rounded-full px-4 py-1 font-title text-sm tracking-wide backdrop-blur-sm ${
                    isLightMode
                      ? 'border border-[#e2c3ad] bg-white/80 text-[#8b5a3d]'
                      : 'border border-white/15 bg-white/5 text-white/80'
                  }`}
                >
                  Testimonials
                </div>
                <h2
                  className={`mt-6 text-balance font-body text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl ${
                    isLightMode ? 'text-[#2f1c12]' : 'text-white'
                  }`}
                >
                  The Desert Remembers Every Runner
                </h2>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-6 lg:hidden">
                {visibleTestimonials.map((item, index) => (
                  <article
                    key={`${item.name}-${activeTestimonial}-${index}`}
                    className={`rounded-[1.35rem] p-6 backdrop-blur-sm transition-all duration-500 ${
                      isLightMode
                        ? 'border border-[#e7cdbb] bg-gradient-to-b from-white/95 to-surface-container-low/90 shadow-[0_16px_40px_rgba(137,90,59,0.08)]'
                        : 'border border-outline-variant/30 bg-gradient-to-b from-surface-container-high/95 to-surface-container/90 shadow-[0_16px_40px_rgba(0,0,0,0.4)]'
                    } ${index === 1 ? 'lg:translate-y-2 lg:scale-[1.02]' : 'lg:translate-y-8 lg:opacity-90'}`}
                  >
                    <p
                      className={`min-h-28 text-lg leading-relaxed ${
                        isLightMode ? 'text-[#53392b]' : 'text-white/88'
                      }`}
                    >
                      {item.quote}
                    </p>

                    <div className="mt-8 flex items-end justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="h-12 w-12 rounded-full object-cover ring-1 ring-white/15"
                        />
                        <div>
                          <div
                            className={`font-body text-base font-semibold ${
                              isLightMode ? 'text-[#2f1c12]' : 'text-white'
                            }`}
                          >
                            {item.name}
                          </div>
                          <div className={`text-sm ${isLightMode ? 'text-[#8c6a57]' : 'text-white/55'}`}>
                            {item.detail}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`inline-flex rounded-full px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${
                          isLightMode
                            ? 'border border-[#ebc9a8] bg-[#fff2e5] text-[#d97a24]'
                            : 'border border-primary-container/30 bg-primary-container/10 text-primary-container'
                        }`}
                      >
                        <span className="text-sm tracking-[0.22em]">★★★★★</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="relative mt-14 hidden h-[24rem] overflow-hidden lg:block">
                {testimonials.map((item, index) => {
                  const offset = getTestimonialOffset(index, activeTestimonial, testimonials.length)
                  const isVisible = Math.abs(offset) <= 1

                  return (
                    <article
                      key={item.name}
                      className={`absolute left-1/2 top-0 w-[34rem] max-w-[calc(100%-3rem)] rounded-[1.35rem] p-6 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isLightMode
                          ? 'border border-[#e7cdbb] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,236,224,0.98))] shadow-[0_16px_40px_rgba(137,90,59,0.12)]'
                          : 'border border-outline-variant/30 bg-[linear-gradient(180deg,rgba(36,31,27,0.94),rgba(23,19,15,0.98))] shadow-[0_16px_40px_rgba(0,0,0,0.4)]'
                      }`}
                      style={{
                        transform:
                          offset === 0
                            ? 'translateX(-50%) translateY(0) scale(1)'
                            : offset < 0
                              ? 'translateX(-108%) translateY(1.9rem) scale(0.92)'
                              : 'translateX(8%) translateY(1.9rem) scale(0.92)',
                        opacity: offset === 0 ? 1 : isVisible ? 0.42 : 0,
                        filter: offset === 0 ? 'blur(0px)' : isVisible ? 'blur(1.4px)' : 'blur(7px)',
                        zIndex: offset === 0 ? 3 : isVisible ? 2 : 1,
                        pointerEvents: isVisible ? 'auto' : 'none',
                      }}
                    >
                      <p
                        className={`min-h-28 text-lg leading-relaxed ${
                          isLightMode ? 'text-[#53392b]' : 'text-white/88'
                        }`}
                      >
                        {item.quote}
                      </p>

                      <div className="mt-8 flex items-end justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="h-12 w-12 rounded-full object-cover ring-1 ring-white/15"
                          />
                          <div>
                            <div
                              className={`font-body text-base font-semibold ${
                                isLightMode ? 'text-[#2f1c12]' : 'text-white'
                              }`}
                            >
                              {item.name}
                            </div>
                            <div className={`text-sm ${isLightMode ? 'text-[#8c6a57]' : 'text-white/55'}`}>
                              {item.detail}
                            </div>
                          </div>
                        </div>

                        <div
                          className={`inline-flex rounded-full px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${
                            isLightMode
                              ? 'border border-[#ebc9a8] bg-[#fff2e5] text-[#d97a24]'
                              : 'border border-primary-container/30 bg-primary-container/10 text-primary-container'
                          }`}
                        >
                          <span className="text-sm tracking-[0.22em]">★★★★★</span>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              <div className="mt-10 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial((current) => (current - 1 + testimonials.length) % testimonials.length)
                  }
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition-all ${
                    isLightMode
                      ? 'border border-[#e5c8b2] bg-white/80 text-[#8b5a3d] hover:bg-white'
                      : 'border border-white/15 bg-white/5 text-white/80 hover:bg-white/10'
                  }`}
                  aria-label="Previous testimonial"
                >
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeTestimonial
                          ? isLightMode
                            ? 'w-8 bg-[#df8127]'
                            : 'w-8 bg-primary-container'
                          : isLightMode
                            ? 'w-2.5 bg-[#d8b39f]'
                            : 'w-2.5 bg-outline-variant/40'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial((current) => (current + 1) % testimonials.length)
                  }
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full transition-all ${
                    isLightMode
                      ? 'border border-[#ebc9a8] bg-[#fff2e5] text-[#d97a24] hover:bg-[#ffe8d3]'
                      : 'border border-primary-container/40 bg-primary-container/10 text-primary-container hover:bg-primary-container/20'
                  }`}
                  aria-label="Next testimonial"
                >
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-12">
          <div className="mb-12 flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
            <h2 className="font-headline text-6xl uppercase leading-none md:text-8xl">
              COMMON <span className="text-primary-container">QUESTIONS</span>
            </h2>
            <div className="font-title text-xl tracking-[0.3em] text-secondary">HAVE A DOUBT?</div>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                isLightMode={isLightMode}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer isLightMode={isLightMode} />

      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
        <div className="relative h-32 w-px bg-outline-variant/30">
          <div className="absolute -left-[3.5px] top-0 h-2 w-2 rounded-full bg-primary-container" />
          <div className="absolute bottom-0 h-1/2 w-px bg-primary-container" />
        </div>
        <div className="whitespace-nowrap font-title text-[10px] tracking-[0.3em] text-secondary [writing-mode:vertical-rl] [text-orientation:mixed]">
          BASECAMP &middot; KM 00
        </div>
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-500 md:bottom-10 md:left-10 ${
          scrollY > 400
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-20 opacity-0 scale-50"
        } ${
          isLightMode
            ? "bg-[#df8127] text-white hover:bg-[#c96e1f] shadow-[#df8127]/30"
            : "bg-[#f36323] text-white hover:bg-[#ff7a3d] shadow-[#f36323]/40"
        } hover:-translate-y-1 hover:rotate-[360deg]`}
        aria-label="Back to Top"
      >
        <span className="material-symbols-outlined text-3xl font-bold">arrow_upward</span>
      </button>
    </>
  )
}
