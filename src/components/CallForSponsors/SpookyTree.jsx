


import { motion } from 'framer-motion'

export function SpookyTree() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.svg
        viewBox="0 0 1000 1000"
        className="w-full h-full opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <defs>
          <filter id="fog">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" />
            <feDisplacementMap in="SourceGraphic" scale="10" />
          </filter>
        </defs>
        
        {/* Tree trunk */}


        <motion.path
          d="M500 1000 C450 800, 400 600, 420 400 C440 200, 500 100, 500 0
             M500 1000 C550 800, 600 600, 580 400 C560 200, 500 100, 500 0"
          fill="none"
          stroke="#2d1b00"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />

        {/* Tree branches */}
        {[...Array(20)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${500 + (i % 2 === 0 ? -1 : 1) * (50 + 0.5 * 100)} ${100 + i * 40}
               C${500 + (i % 2 === 0 ? -1 : 1) * (150 + 0.5 * 100)} ${100 + i * 40 + (0.5 * 40 - 20)},
                ${500 + (i % 2 === 0 ? -1 : 1) * (200 + 0.5 * 150)} ${100 + i * 40 + (0.5 * 80 - 40)},
                ${500 + (i % 2 === 0 ? -1 : 1) * (250 + 0.5 * 200)} ${100 + i * 40 + (0.5 * 120 - 60)}`}
            fill="none"
            stroke="#2d1b00"
            strokeWidth={3 + 0.5 * 2}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.1, ease: "easeInOut" }}
          />
        ))}

        {/* Eerie fog */}
        <rect width="100%" height="100%" filter="url(#fog)" opacity="0.3" />

        {/* Scary eyes */}
        {[...Array(3)].map((_, i) => (
          <g key={i}>
            <motion.circle
              cx={450 + 0.5 * 100}
              cy={300 + 0.5 * 400}
              r="5"
              fill="#ff0000"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 * 5 }}
            />
            <motion.circle
              cx={470 + 0.5 * 100}
              cy={300 + 0.5 * 400}
              r="5"
              fill="#ff0000"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 * 5 }}
            />
          </g>
        ))}
      </motion.svg>
    </div>
  )
}





// 'use client'

// import { motion } from 'framer-motion'

// export function SpookyTree() {
//   return (
//     <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//       <motion.svg
//         viewBox="0 0 1000 1000"
//         className="w-full h-full opacity-30"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.3 }}
//         transition={{ duration: 2 }}
//       >
//         <defs>
//           <filter id="fog">
//             <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" />
//             <feDisplacementMap in="SourceGraphic" scale="10" />
//           </filter>
//         </defs>
        
//         {/* Tree trunk */}
//         <motion.path
//           d="M500 1000 C450 800, 400 600, 420 400 C440 200, 500 100, 500 0
//              M500 1000 C550 800, 600 600, 580 400 C560 200, 500 100, 500 0"
//           fill="none"
//           stroke="#2d1b00"
//           strokeWidth="30"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           initial={{ pathLength: 0 }}
//           animate={{ pathLength: 1 }}
//           transition={{ duration: 5, ease: "easeInOut" }}
//         />

//         {/* Tree branches */}
//         {[...Array(20)].map((_, i) => (
//           <motion.path
//             key={i}
//             d={`M${500 + (i % 2 === 0 ? -1 : 1) * (50 + 0.5 * 100)} ${100 + i * 40}
//                C${500 + (i % 2 === 0 ? -1 : 1) * (150 + 0.5 * 100)} ${100 + i * 40 + (0.5 * 40 - 20)},
//                 ${500 + (i % 2 === 0 ? -1 : 1) * (200 + 0.5 * 150)} ${100 + i * 40 + (0.5 * 80 - 40)},
//                 ${500 + (i % 2 === 0 ? -1 : 1) * (250 + 0.5 * 200)} ${100 + i * 40 + (0.5 * 120 - 60)}`}
//             fill="none"
//             stroke="#2d1b00"
//             strokeWidth={3 + 0.5 * 2}
//             strokeLinecap="round"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 2, delay: i * 0.1, ease: "easeInOut" }}
//           />
//         ))}

//         {/* Eerie fog */}
//         <rect width="100%" height="100%" filter="url(#fog)" opacity="0.3" />

//         {/* Scary eyes */}
//         {[...Array(3)].map((_, i) => (
//           <g key={i}>
//             <motion.circle
//               cx={450 + 0.5 * 100}
//               cy={300 + 0.5 * 400}
//               r="5"
//               fill="#ff0000"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: [0, 1, 0] }}
//               transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 * 5 }}
//             />
//             <motion.circle
//               cx={470 + 0.5 * 100}
//               cy={300 + 0.5 * 400}
//               r="5"
//               fill="#ff0000"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: [0, 1, 0] }}
//               transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 * 5 }}
//             />
//           </g>
//         ))}
//       </motion.svg>
//     </div>
//   )
// }

