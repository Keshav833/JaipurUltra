import { useEffect, useMemo, useState, useRef, lazy, Suspense } from 'react'

const RaceCategories = lazy(() => import('../components/RaceCategories'))
const RouteMap = lazy(() => import('../components/RouteMap'))
const WhyAttend = lazy(() => import('../components/WhyAttend'))
const Footer = lazy(() => import('../components/Footer'))
const MagicBento = lazy(() => import('../components/MagicBento'))
const About = lazy(() => import('../components/About'))

function LazySection({ children, minHeight = '50vh' }) {
  const [show, setShow] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          obs.disconnect()
        }
      },
      { rootMargin: '300px' }
    )
    if (ref.current) {
      obs.observe(ref.current)
    }
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ minHeight: show ? 'auto' : minHeight }}>
      {show && <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense>}
    </div>
  )
}
const raceCategories = [
  {
    distance: '50',
    title: '50KM ULTRA',
    stats: [
      ['Distance', '50.0 KM'],
      ['Cut-off', ' 7 HOURS'],
      ['Surface', 'Mixed Terrain'],
      ['Aid Stations', '5 POINTS'],
    ],
  },
  {
    distance: '25',
    title: '25KM CHALLENGE',
    stats: [
      ['Distance', '25.0 KM'],
      ['Cut-off', ' 3 HOURS'],
      ['Surface', 'Road & Trail'],
      ['Aid Stations', '3 POINTS'],
    ],
  },
]



const testimonials = [
  {
    image: '/win1.jpg',
    quote:
      'Jaipur Ultra was one of the toughest yet most rewarding races I’ve run. The course tested every limit, but the support and energy along the route kept me going. Finishing 50K here is something I’ll always be proud of.',
    name: 'Ankush Kumar',
    detail: '50K Winner',
  },
  {
    image: '/win2.jpg',
    quote:
      'This was an incredible experience from start to finish. The route, the crowd, and the organization made it special. Winning the 25K here feels amazing, and I’d definitely come back stronger next time.',
    name: 'Vaishnavi Kaup',
    detail: '25K Winner',
  },
  {
    image: '/win3.jpg',
    quote:
      'Jaipur Ultra pushes you mentally and physically. It’s not just a race, it’s an experience. The discipline it demands and the satisfaction at the finish line make it worth every step.',
    name: 'Ankit Sharma',
    detail: 'Runner Up',
  },
  {
    image: '/win4.jpg',
    quote:
      'Running through Jaipur with such an energetic atmosphere was unforgettable. The event was well-organized, and the support throughout the race really helped me push my limits.',
    name: 'Sonali Bali',
    detail: 'Runner Up F',
  },
  {
    image: '/win5.jpg',
    quote:
      'This race challenged my endurance like never before. The environment, the fellow runners, and the overall vibe made it a memorable journey. Definitely one of my favorite races.',
    name: 'Devik Choudhary',
    detail: '2nd Runner Up M',
  },
  {
    image: '/win6.jpg',
    quote:
      'Jaipur Ultra is not just about running, it’s about resilience. The course is tough, but the experience is even more rewarding. It’s a must-run event for anyone serious about long-distance running.',
    name: 'Vikas Yadav',
    detail: '25KM 2nd Runner Up',
  },
  {
    image: '/win7.jpg',
    quote:
      'From the starting line to the finish, everything was well managed. The route and conditions really test your stamina, but that’s what makes finishing so satisfying.',
    name: 'Anil Kumar',
    detail: '25K Runner Up',
  },
  {
    image: '/win8.jpg',
    quote:
      'An amazing event with great energy and organization. The support along the route and the spirit of the runners made this an unforgettable experience for me.',
    name: 'Sugandha Singhal',
    detail: 'Runner Up F',
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
      '• Follow the marked route at all times — shortcuts will result in disqualification.\n• No littering — carry your waste until the next aid station.\n• Bib numbers must be worn visibly on the front throughout the race.\n• Support crew is only allowed at designated aid stations.',
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
  {
    question: 'When will I receive my race bib?',
    answer:
      'Bibs will be distributed at the Expo on 31st October between 2:00 PM and 4:00 PM. The race briefing will take place at 4:00 PM immediately after bib distribution.',
  },
]

const galleryImages = [
  {
    src: '/image1.JPG',
    alt: 'Jaipur Ultra event gallery image 1',
    className: 'md:col-span-2 md:row-span-2',
    style: { objectPosition: 'center 35%' }
  },
  {
    src: '/image2.jpg',
    alt: 'Jaipur Ultra event gallery image 2',
    className: 'md:col-span-1 md:row-span-1',
    style: { objectPosition: 'top' }
  },
  {
    src: '/image3.JPG',
    alt: 'Jaipur Ultra event gallery image 3',
    className: 'md:col-span-1 md:row-span-2',
    style: { objectPosition: 'top' }
  },
  {
    src: '/image4.JPG',
    alt: 'Jaipur Ultra event gallery image 4',
    className: 'md:col-span-1 md:row-span-1',
    style: { objectPosition: 'top' }
  },
  {
    src: '/image5.JPG',
    alt: 'Jaipur Ultra event gallery image 5',
    className: 'md:col-span-1 md:row-span-3',
    style: { objectPosition: 'top' }
  },
  {
    src: '/image6.JPG',
    alt: 'Jaipur Ultra event gallery image 6',
    className: 'md:col-span-2 md:row-span-2',
    style: { objectPosition: 'top' }
  },
  {
    src: '/image7.JPG',
    alt: 'Jaipur Ultra event gallery image 7',
    className: 'md:col-span-1 md:row-span-2',
    style: { objectPosition: 'top' }
  },
  {
    src: '/image8.JPG',
    alt: 'Jaipur Ultra event gallery image 8',
    className: 'md:col-span-1 md:row-span-3',
    style: { objectPosition: 'top' }
  },
  {
    src: '/image9.JPG',
    alt: 'Jaipur Ultra event gallery image 9',
    className: 'md:col-span-2 md:row-span-2',
    style: { objectPosition: 'top' }
  },
  {
    src: '/image10.JPG',
    alt: 'Jaipur Ultra event gallery image 10',
    className: 'md:col-span-1 md:row-span-1',
    style: { objectPosition: 'top' }
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
        className="flex w-full items-center justify-between gap-6 py-3 text-left transition-all"
      >
        <div className="relative flex-1 overflow-hidden">
          <span className={`block font-title text-2xl uppercase tracking-[0.05em] transition-all duration-500 md:text-3xl ${isOpen ? 'translate-x-4 text-primary-container' : (isLightMode ? 'text-[#2f1c12]' : 'text-white')}`}>
            {faq.question}
          </span>
          {/* Animated Underline */}
          <div className={`mt-2 h-[2px] transition-all duration-700 ${isOpen ? 'w-full bg-primary-container' : 'w-12 bg-outline-variant/30 group-hover:w-24 group-hover:bg-primary-container/50'}`}></div>
        </div>

        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ${isOpen ? 'rotate-180 border-primary-container bg-primary-container text-on-primary-container shadow-[0_0_25px_rgba(243,99,35,0.4)]' : (isLightMode ? 'border-[#d6aa90] text-[#7a4a2b]' : 'border-white/20 text-white hover:border-white/50')}`}>
          <span className="material-symbols-outlined text-xl font-bold">
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
  const heroRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        const elements = heroRef.current?.querySelectorAll('.animate-float')
        if (elements) {
          elements.forEach(el => {
            el.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused'
          })
        }
      },
      { threshold: 0 }
    )
    obs.observe(heroRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
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
            <img 
              src="/JU_Logo.png" 
              alt="Jaipur Ultra logo" 
              width={64}
              height={64}
              className="h-14 w-auto drop-shadow-[0_10px_30px_rgba(35,15,8,0.2)] md:h-16 transition-transform group-hover:scale-105" 
            />
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
              Feedback
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
        <section ref={heroRef} className="relative isolate overflow-hidden bg-transparent text-center">
          <div className="relative z-[-4]">
            {/* Desktop Hero Image */}
            <img
              src="/hero2.webp"
              alt="Jaipur Ultra desktop backdrop"
              width={1920}
              height={1080}
              className="hidden h-auto w-full max-w-none md:block"
            />
            {/* Mobile Hero Image */}
            <img
              src="/hero3.png"
              alt="Jaipur Ultra mobile backdrop"
              width={500}
              height={800}
              className="block h-auto w-full max-w-none md:hidden"
            />
          </div>
          <div
            className={`absolute inset-0 z-[-3] ${isLightMode ? 'bg-transparent' : 'bg-[linear-gradient(180deg,rgba(47,58,115,0.18)_0%,rgba(127,76,129,0.14)_18%,rgba(214,117,88,0.08)_42%,rgba(23,19,15,0.04)_100%)]'}`}
          />
          <div
            className={`absolute inset-x-0 top-0 z-[-1] h-[46%] ${isLightMode ? 'bg-transparent' : 'bg-[linear-gradient(180deg,rgba(73,85,150,0.42),rgba(0,0,0,0))]'}`}
          />
          <div className="absolute inset-x-0 bottom-0 z-[-1] h-[20%] bg-linear-to-b from-transparent via-background/48 to-background" />

          {/* Background Clouds */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-2]">
            {/* Left Clouds - move left when scrolling */}
            <div 
              className="absolute top-[8%] left-[8%] w-[18vw] will-change-transform"
              style={{ transform: `translateX(-${scrollY * 0.25}px) translateZ(0)` }}
            >
              <img 
                src="/cloud.png" 
                width={300}
                height={150}
                className="w-full opacity-40 animate-float" 
                style={{ animationDuration: '7s', animationDelay: '0s' }} 
                alt=""
              />
            </div>
            <div 
              className="absolute top-[32%] left-[22%] w-[14vw] will-change-transform"
              style={{ transform: `translateX(-${scrollY * 0.15}px) translateZ(0)` }}
            >
              <img 
                src="/cloud.png" 
                width={200}
                height={100}
                className="w-full opacity-25 animate-float" 
                style={{ animationDuration: '9s', animationDelay: '0.8s' }} 
                alt=""
              />
            </div>
 
            {/* Right Clouds - move right when scrolling */}
            <div 
              className="absolute top-[12%] right-[12%] w-[22vw] will-change-transform"
              style={{ transform: `translateX(${scrollY * 0.3}px) translateZ(0)` }}
            >
              <img 
                src="/cloud.png" 
                width={400}
                height={200}
                className="w-full opacity-30 animate-float" 
                style={{ animationDuration: '8s', animationDelay: '1.5s' }} 
                alt=""
              />
            </div>
            <div 
              className="absolute top-[28%] right-[25%] w-[19vw] will-change-transform"
              style={{ transform: `translateX(${scrollY * 0.2}px) translateZ(0)` }}
            >
              <img 
                src="/cloud.png" 
                width={350}
                height={175}
                className="w-full opacity-35 animate-float" 
                style={{ animationDuration: '7.5s', animationDelay: '2.2s' }} 
                alt=""
              />
            </div>
          </div>

          <div 
            className="absolute inset-x-0 top-0 mx-auto flex w-full max-w-none flex-col items-center px-6 pb-14 pt-28 md:px-8 md:pb-16 md:pt-36 lg:px-12 will-change-[transform,opacity]"
            style={{ transform: `translateY(-${scrollY * 0.25}px) translateZ(0)`, opacity: Math.max(0, 1 - scrollY / 600) }}
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

        <LazySection minHeight="50vh">
          <About isLightMode={isLightMode} />
        </LazySection>

        <LazySection minHeight="50vh">
          <RaceCategories />
        </LazySection>

        <LazySection minHeight="50vh">
          <RouteMap isLightMode={isLightMode} />
        </LazySection>

        <section id="gallery" className="py-24 bg-surface-container-lowest">
          <div className="mx-auto mb-16 max-w-[1440px] px-6 md:px-8">
            <h2 className="font-headline text-5xl uppercase tracking-tighter md:text-6xl text-center">
              THE GRIT IN <span className="text-primary-container">MOTION</span>
            </h2>
          </div>
          <LazySection minHeight="50vh">
            <MagicBento 
              images={galleryImages} 
              enableTilt={false} 
              enableMagnetism={false}
              enableSpotlight={false}
              enableStars={false}
              particleCount={0}
              enableBorderGlow={true}
              // enableSpotlight={false}
            />
          </LazySection>
        </section>

        <LazySection minHeight="50vh">
          <WhyAttend isLightMode={isLightMode} />
        </LazySection>

        <section
          className={`overflow-hidden px-6 py-24 md:px-8 ${isLightMode ? 'bg-background' : 'bg-surface'}`}
        >
          <div className="mx-auto max-w-7xl">
            <div
              // className={`relative overflow-hidden rounded-4xl px-6 py-16 md:px-10 lg:px-14 ${
              //   isLightMode
              //     ? 'bg-surface shadow-[0_30px_90px_rgba(122,74,43,0.12)]'
              //     : 'bg-surface-container shadow-[0_30px_120px_rgba(0,0,0,0.45)] border border-white/5'
              // }`}
            >
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
                  The Desert Remembers Your Story
                </h2>
              </div>

              <div
                className="testimonial-mobile-scroll mt-10 -mx-6 flex gap-4 overflow-x-auto px-6 pb-8 scrollbar-hide lg:hidden"
              >
                {testimonials.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className={`testimonial-mobile-card min-w-[78vw] max-w-[78vw] snap-center overflow-hidden rounded-2xl shadow-[0_16px_36px_rgba(0,0,0,0.24)] sm:min-w-[46vw] sm:max-w-[46vw] ${
                      isLightMode
                        ? 'border border-[#e7cdbb] bg-white text-[#2f1c12]'
                        : 'border border-white/10 bg-surface-container-high text-white'
                    }`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={item.image}
                        alt={`Winner ${index + 1}`}
                        className="h-full w-full object-cover"
                        loading={index > 1 ? 'lazy' : 'eager'}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 via-black/35 to-transparent p-4 pt-16">
                        <div className="font-body text-base font-semibold uppercase text-white">
                          {item.name}
                        </div>
                        <div className="mt-1 text-[10px] uppercase tracking-widest text-primary">
                          {item.detail}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className={`line-clamp-5 text-sm leading-relaxed italic ${isLightMode ? 'text-[#53392b]' : 'text-white/82'}`}>
                        {item.quote}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative mt-14 hidden h-[460px] overflow-visible lg:block">
                {testimonials.map((item, index) => {
                  const offset = getTestimonialOffset(index, activeTestimonial, testimonials.length)
                  const isVisible = Math.abs(offset) <= 2

                  return (
                    <div
                      key={item.name}
                      className="absolute left-1/2 top-0 w-[320px] h-[420px] max-w-[calc(100%-3rem)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{
                        transform:
                          offset === 0
                            ? 'translateX(-50%) translateY(0) scale(1)'
                            : offset === -1
                              ? 'translateX(-115%) translateY(1.9rem) scale(0.92)'
                              : offset === 1
                                ? 'translateX(15%) translateY(1.9rem) scale(0.92)'
                                : offset === -2
                                  ? 'translateX(-175%) translateY(3.8rem) scale(0.84)'
                                  : 'translateX(75%) translateY(3.8rem) scale(0.84)',
                        opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.6 : Math.abs(offset) === 2 ? 0.25 : 0,
                        filter: offset === 0 ? 'blur(0px)' : Math.abs(offset) === 1 ? 'blur(1.4px)' : Math.abs(offset) === 2 ? 'blur(3px)' : 'blur(7px)',
                        zIndex: offset === 0 ? 5 : Math.abs(offset) === 1 ? 4 : Math.abs(offset) === 2 ? 3 : 1,
                        pointerEvents: Math.abs(offset) <= 1 ? 'auto' : 'none',
                      }}
                    >
                      <div className="group perspective-1000 w-full h-full cursor-pointer">
                        <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${offset === 0 ? 'group-hover:rotate-y-180' : ''}`}>
                          {/* Front: Image */}
                          <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
                            <img 
                              src={item.image} 
                              alt={`Winner ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Back: Text */}
                          <div className={`absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-[0_16px_40px_rgba(0,0,0,0.4)] ${
                            isLightMode
                              ? 'bg-linear-to-b from-white/95 to-[#e5c7b3]/95 border border-[#e7cdbb]'
                              : 'bg-linear-to-b from-surface-container-high/95 to-[#080503]/95 border border-outline-variant/30'
                          }`}>
                            <div className="text-primary-container font-headline text-6xl leading-none mb-3">"</div>
                            <p className={`text-base leading-relaxed italic ${isLightMode ? 'text-[#53392b]' : 'text-white/88'}`}>
                              {item.quote}
                            </p>
                            <div className="mt-6">
                              <div className={`font-body text-lg font-semibold uppercase ${isLightMode ? 'text-[#2f1c12]' : 'text-white'}`}>
                                {item.name}
                              </div>
                              <div className={`text-xs uppercase tracking-widest mt-1 ${isLightMode ? 'text-[#8c6a57]' : 'text-primary'}`}>
                                {item.detail}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-10 hidden items-center justify-center gap-4 lg:flex">
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

      <LazySection minHeight="20vh">
        <Footer isLightMode={isLightMode} />
      </LazySection>

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
            : "bg-primary-container text-white hover:bg-[#ff7a3d] shadow-primary-container/40"
        } hover:-translate-y-1 hover:rotate-360`}
        aria-label="Back to Top"
      >
        <span className="material-symbols-outlined text-3xl font-bold">arrow_upward</span>
      </button>
    </>
  )
}
