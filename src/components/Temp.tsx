import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, Users, Zap, Star, Trophy, Target, Rocket, Heart, Crown } from 'lucide-react'
import HeroComponent from './HeroComponent'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const Card = ({ children, className = '', icon: Icon }: { children: React.ReactNode, className?: string, icon?: React.ElementType }) => (
  <div className={`bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 ${className}`}>
    <div className="flex flex-col items-center gap-2 sm:gap-4">
      {Icon && <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />}
      {children}
    </div>
  </div>
)

const StarryBackground = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black"></div>
    {[...Array(100)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: Math.random() * 3 + 'px',
          height: Math.random() * 3 + 'px',
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`
        }}
      />
    ))}
  </div>
)

const eventMessages = [
  { title: "Ahisarga - 2025", message: 'New features released!', icon: Rocket, imageUrl: "/assets/HeroAssets/Abhisarga1.webp" },
  { title: "Cultural Events", message: '50+ new members joined', icon: Users, imageUrl: "/assets/HeroAssets/CulturalEvents1.webp" },
  { title: "Pro Shows", message: '1M+ active users', icon: Trophy, imageUrl: "/assets/HeroAssets/ProShow1.webp" },
  { title: "Ahisarga - 2025", message: '40% faster loading', icon: Zap, imageUrl: "/assets/HeroAssets/Abhisarga2.webp" },
  { title: "Cultural Events", message: 'Industry award won', icon: Star, imageUrl: "/assets/HeroAssets/CulturalEvents2.webp" },
  { title: "Ahisarga - 2025", message: 'Collaboration with leading tech company', icon: Users, imageUrl: "/assets/HeroAssets/Abhisarga3.webp" },
]

const detailedEvents = [
  { title: "Cultural Events", message: 'Exceeded targets by 25%', icon: Target, imageUrl: "/assets/HeroAssets/CulturalEvents3.webp" },
  { title: "CEO of Geek for Geeks - 2024", message: 'Launched in 15 countries', icon: Rocket, imageUrl: "/assets/HeroAssets/CEO.webp" },
  { title: "Cultural Events", message: '98% satisfaction rate', icon: Heart, imageUrl: "/assets/HeroAssets/CulturalEvents4.webp" },
  { title: "Pro Shows", message: '#1 in our category', icon: Crown, imageUrl: "/assets/HeroAssets/ProShow2.webp" },
  { title: "Exciting Prizes", message: 'Best Tech Solution 2024', icon: Trophy, imageUrl: "/assets/HeroAssets/ExicitingPrizes1.webp" },
  { title: "Exciting Prizes", message: 'Doubled our workforce', icon: Users, imageUrl: "/assets/HeroAssets/ExicitingPrizes2.webp" },
  { title: "Pro Shows", message: '$10M ARR achieved', icon: Star, imageUrl: "/assets/HeroAssets/ProShow3.webp" },
  { title: "Ahisarga - 2025", message: 'V2.0 now live', icon: Zap, imageUrl: "/assets/HeroAssets/Abhisarga5.webp" },
  { title: "Ahisarga - 2025", message: '100K+ active members', icon: Calendar, imageUrl: "/assets/HeroAssets/Abhisarga4.webp" },
  { title: "Cultural Events", message: 'Collaboration with industry leaders', icon: Users, imageUrl: "/assets/HeroAssets/CulturalEvents1.webp" },
  { title: "Pro Shows", message: 'New features and improvements', icon: Rocket, imageUrl: "/assets/HeroAssets/ProShow1.webp" },
  { title: "Ahisarga - 2025", message: 'Recognized for innovation', icon: Crown, imageUrl: "/assets/HeroAssets/Abhisarga2.webp" },
]


export default function Temp() {
  const containerRef = useRef<HTMLDivElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline for section transitions
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          pinSpacing: true,
        }
      })
      .to(section1Ref.current, {
        scale: 0.5,
        duration: 1,
        ease: 'power2.inOut'
      })
      .to(section2Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      }, '-=1')
      .to(section1Ref.current, {
        scale: 0.3,
        duration: 1,
        ease: 'power2.inOut'
      })
      .to(section2Ref.current, {
        scale: 0.5,
        y: '-20vh',
        duration: 1,
        ease: 'power2.inOut'
      }, '-=1')
      .to(section3Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out'
      }, '-=1');

      // Enhanced animations for middle section cards
      gsap.utils.toArray('.middle-card').forEach((card: any, index: number) => {
        gsap.from(card, {
          scale: 0,
          opacity: 0,
          rotation: -15 + Math.random() * 30,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: section2Ref.current,
            start: 'top center',
            end: '+=100%',
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        });

        // Hover animation
        gsap.to(card, {
          scale: 1.05,
          rotation: -5 + Math.random() * 10,
          duration: 0.3,
          ease: 'power2.out',
          paused: true,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Enhanced animations for bottom section cards
      gsap.utils.toArray('.bottom-card').forEach((card: any, index: number) => {
        const randomX = -20 + Math.random() * 40;
        const randomY = -20 + Math.random() * 40;
        
        gsap.from(card, {
          scale: 0,
          opacity: 0,
          x: randomX,
          y: randomY,
          rotation: -30 + Math.random() * 60,
          duration: 1,
          delay: index * 0.15,
          ease: 'elastic.out(1, 0.3)',
          scrollTrigger: {
            trigger: section3Ref.current,
            start: 'top center',
            end: '+=100%',
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        });

        // Floating animation
        gsap.to(card, {
          y: '-=10',
          rotation: '-=5',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            toggleActions: 'play none none reverse'
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-[100vh] relative">
      <StarryBackground />
      <div className="h-screen fixed top-0 left-0 w-full">
        {/* First Section */}
        <div ref={section1Ref} className="z-10">
          <HeroComponent/>
        </div>

      {/* Second Section */}
<div 
  ref={section2Ref} 
  className="absolute top-0 left-0 w-full h-screen flex items-center justify-center p-4 sm:p-8 z-20"
  style={{ opacity: 0, transform: 'translateY(100px)' }}
>
  <div className="relative w-full max-w-5xl aspect-video">
  {eventMessages.map((event, i) => {
  const randomTop = Math.floor(Math.random() * 80) + '%'; // Random top position (0% to 80%)
  const randomLeft = Math.floor(Math.random() * 80) + '%'; // Random left position (0% to 80%)
  const randomRotation = Math.random() > 0.5 ? `rotate(${Math.floor(Math.random() * 10)}deg)` : `rotate(-${Math.floor(Math.random() * 10)}deg)`; // Random rotation

  return (
    <img
      key={i}
      src={event.imageUrl}
      alt=""
      style={{
        top: randomTop,
        left: randomLeft,
        transform: randomRotation,
      }}
      className={`middle-card absolute bg-muted/50 
        w-[140px] h-[100px] 
        sm:w-[200px] sm:h-[140px] 
        md:w-[250px] md:h-[160px] 
        lg:w-[300px] lg:h-[180px] 
        object-cover rounded-lg transition-shadow duration-300
        hover:shadow-xl hover:shadow-black/20
      `}
    />
  );
})}

  </div>
</div>

{/* Third Section */}
<div 
  ref={section3Ref} 
  className="absolute top-0 left-0 w-full h-screen flex items-center justify-center p-4 sm:p-8 z-30"
  style={{ opacity: 0, transform: 'translateY(100px)' }}
>
  <div className="relative w-full max-w-6xl aspect-[16/9]">
    {detailedEvents.map((event, i) => (
      <img
        key={i}
        src={event.imageUrl}
        alt=""
        className={`bottom-card absolute bg-muted/50 
          w-[150px] h-[100px] 
          sm:w-[200px] sm:h-[140px] 
          md:w-[250px] md:h-[160px] 
          lg:w-[300px] lg:h-[180px] 
          object-cover rounded-lg transition-shadow duration-300
          hover:shadow-xl hover:shadow-black/20
          transform ${i % 3 === 0 ? 'rotate-3' : i % 3 === 1 ? '-rotate-3' : 'rotate-1'}
          ${i === 0 ? 'left-0 top-0' : ''}
          ${i === 1 ? 'left-1/4 sm:left-1/3 top-[10%]' : ''}
          ${i === 2 ? 'right-0 top-0' : ''}
          ${i === 3 ? 'left-[5%] sm:left-[10%] top-1/3' : ''}
          ${i === 4 ? 'left-1/3 sm:left-1/2 top-1/2' : ''}
          ${i === 5 ? 'right-[10%] sm:right-[15%] top-1/3' : ''}
          ${i === 6 ? 'left-0 bottom-0' : ''}
          ${i === 7 ? 'left-1/4 sm:left-1/3 bottom-[10%]' : ''}
          ${i === 8 ? 'right-0 bottom-0' : ''}
          ${i === 9 ? 'left-1/2 sm:left-1/3 bottom-1/3' : ''}
          ${i === 10 ? 'right-1/2 sm:right-1/3 bottom-1/3' : ''}
          ${i === 11 ? 'left-0 top-1/2' : ''}
          ${i === 12 ? 'right-0 top-1/2' : ''}
        `}
      />
    ))}
  </div>
</div>

      </div>
    </div>
  );
}