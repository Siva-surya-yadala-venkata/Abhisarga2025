import React from 'react';
import { motion } from 'framer-motion'; // Make sure to install framer-motion if not already installed

export default function ParallaxComponent({ backgroundImage , heading }) {
  return (
    <div>
      <div className="relative h-[500px] mb-16">
        <div
          className="parallax h-[500px] bg-cover bg-center bg-attachment-fixed"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/70">
            <div className="h-full flex flex-col items-center justify-center px-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-bold mb-4 font-magical text-white"
              >
                <span className="text-[#F7E290]" style={{fontFamily: 'MedievalSharp'}}>{heading}</span>
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
