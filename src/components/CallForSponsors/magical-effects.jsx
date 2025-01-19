


import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function FloatingCandles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            top: `${0.3 * 100}%`, 
            left: `${0.3 * 100}%`,
            opacity: 0 
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.4, 0.6],
          }}
          transition={{
            duration: 4 + 0.5 * 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: i * 0.3,
          }}
        >
          <div className="w-2 h-8 bg-gradient-to-b from-amber-100 to-amber-300 rounded-full" />
          <div className="w-4 h-4 bg-amber-500/50 rounded-full blur-sm -mt-1 animate-flicker" />
        </motion.div>
      ))}
    </div>
  )
}

export function MagicSparkles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-shimmering-gold/30 rounded-full"
          initial={{ 
            top: `${0.5 * 100}%`, 
            left: `${0.5 * 100}%`,
            scale: 0,
            opacity: 0 
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + 0.5 * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}

export function FlyingOwl() {
  const [position, setPosition] = useState({ x: -100, y: 50 })

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: 0.5 * window.innerWidth,
        y: 0.5 * (window.innerHeight / 2)
      })
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-10"
      animate={{
        x: position.x,
        y: position.y,
        scale: [1, 1.1, 1],
        zIndex: 10
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
      }}
    >
      <span className="text-4xl">🦉</span>
    </motion.div>
  )
}

export function MagicPotions() {
  return (
    <div className="absolute -bottom-20 left-0 w-full h-40 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{
              left: `${20 + i * 15}%`,
            }}
            animate={{
              y: [-10, 0, -10],
            }}
            transition={{
              duration: 3 + 0.5 * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <div className={`w-8 h-12 rounded-full ${getRandomPotionColor()}`} />
            <div className={`w-6 h-2 ${getRandomPotionColor()} blur-sm animate-pulse mt-1`} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function getRandomPotionColor() {
  const colors = [
    'bg-purple-500/50',
    'bg-green-500/50',
    'bg-blue-500/50',
    'bg-pink-500/50',
    'bg-amber-500/50'
  ]
  return colors[Math.floor(0.5 * colors.length)]
}




