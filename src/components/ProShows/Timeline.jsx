import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

// Utility function for combining class names
const cn = (...classes) => classes.filter(Boolean).flat().join(' ').trim();

// Hook for handling breakpoints
function useBreakpoint(breakpoint) {
  const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 };
  
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoints[breakpoint] : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsBelowBreakpoint(window.innerWidth < breakpoints[breakpoint]);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isBelowBreakpoint;
}

// Timeline Button Component
function TimelineButton({ index, isActive, onClick }) {
  // Animation spring for scale and opacity
  const [{ scale, opacity }, api] = useSpring(() => ({
    scale: 1,
    opacity: 0,
    config: { tension: 300, friction: 20 }
  }));

  useEffect(() => {
    api.start({
      scale: isActive ? 1.1 : 1,
      opacity: isActive ? 0.4 : 0
    });
  }, [isActive, api]);

  return (
    <animated.button
      onClick={onClick}
      className={cn(
        /* Base styles */
        'relative rounded-full',
        'flex items-center justify-center',
        'transition-all duration-300',
        'focus:outline-none focus:ring-2',
        'touch-manipulation',
        '-webkit-tap-highlight-color-transparent',
        
        /* Responsive sizing */
        'w-8 h-8 text-xs',
        'sm:w-9 sm:h-9 sm:text-sm',
        'md:w-10 md:h-10 md:text-base',
        'lg:w-11 lg:h-11 lg:text-lg',
        
        /* Active state */
        isActive ? [
          'bg-gradient-to-r from-[#654ea3] to-[#d4af37]', // Deep purple to gold gradient
          'text-[#080C22] font-medium',
          'focus:ring-[#d4af37]',
          'shadow-lg shadow-[#654ea3]/50'
        ] : [
          'bg-[#1A1832] hover:bg-[#2B2745]', // Deep blue-gray with a hint of purple
          'text-[#D3C4E3] hover:text-[#E0D4F5]', // Muted silver to light lavender
          'focus:ring-[#2B2745]'
        ]
      )}
      style={{
        transform: scale.to(s => `scale(${s})`)
      }}
      aria-label={`Go to slide ${index + 1}`}
    >
      {index + 1}
      
      {/* Active indicator glow */}
      {isActive && (
        <animated.div 
          className="absolute inset-0 rounded-full bg-[#d4af37]/40" // Gold glow
          style={{ opacity }}
        />
      )}
    </animated.button>
  );
}

// Main Timeline Component
export default function Timeline({ total, currentIndex, onSelect }) {
  const isMobile = useBreakpoint('sm');
  
  return (
    <div className={cn(
      /* Base styles */
      'absolute z-50 flex',
      'transition-all duration-500 ease-in-out',
      
      /* Mobile: horizontal bottom layout */
      isMobile ? [
        'bottom-20 left-1/2 -translate-x-1/2',
        'flex-row gap-2 sm:gap-3',
        'px-4 py-3',
        'bg-gradient-to-r from-[#1A1832] to-[#2B2745]', // Mystical gradient
        'backdrop-blur-md',
        'rounded-full'
      ] : [
        /* Desktop: vertical side layout */
        'left-6 sm:left-8 md:left-10',
        'top-1/2 -translate-y-1/2',
        'flex-col gap-3 sm:gap-4 md:gap-5',
        'p-3',
        'bg-gradient-to-b from-[#1A1832] to-[#2B2745]', // Vertical mystical gradient
        'backdrop-blur-md',
        'rounded-full'
      ],
      
      /* Hover effects */
      'hover:bg-black/30',
      'group'
    )}>
      {Array.from({ length: total }, (_, index) => (
        <TimelineButton
          key={index}
          index={index}
          isActive={index === currentIndex}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
