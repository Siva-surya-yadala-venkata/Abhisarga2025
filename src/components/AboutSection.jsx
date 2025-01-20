"use client";

import React from "react";
import { Marquee3D } from "./ui/Marquee3D";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image (lowest layer) */}
      <div className="absolute inset-0 bg-black opacity-70 rounded-lg z-0"></div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/path/to/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Marquee3D (center layer) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: 1 }}
      >
        <Marquee3D />
      </div>

      {/* Content Layers */}
      {/* About Abhisarga Section */}
      <div className="absolute top-10 left-0 md:left-20 z-10 w-[600px] h-[550px] p-8">
        {/* Backdrop Layer for Abhisarga */}
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg z-0"></div>

        <div className="relative z-10 flex flex-col">
          <h1 className="text-[40px] md:text-[80px] font-bold text-white leading-tight">
            <span
              style={{
                color: "#F7E290",
                fontFamily: "Bebas Neue",
                fontWeight: "200",
              }}
            >
              ABOUT{" "}
            </span>
          </h1>
          <div
            className="text-[40px] md:text-[80px] text-white"
            style={{
              fontFamily: "Cinzel Decorative, serif",
              fontWeight: "400",
            }}
          >
            ABHISARGA
          </div>
        </div>

        <div className="relative z-10 max-w-md space-y-4 text-gray-400 text-sm md:text-lg mt-6 text-[18px] md:text-[22px]">
          <p>
            Abhisarga is IIIT Sricity's annual techno-cultural fest. It combines
            technology, culture, and entertainment, creating a vibrant platform
            for talent and innovation.
          </p>
          <p>
            Experience dazzling dance competitions, proshows, DJ nights,
            technical challenges, cultural performances, and much more.
            Celebrate creativity and innovation at Abhisarga this March!
          </p>
        </div>
      </div>

      {/* About IIIT Section */}
      <div className="absolute bottom-10 right-0 md:right-5 z-10 w-[650px] h-[500px] p-8">
        {/* Backdrop Layer for IIIT */}
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg z-0"></div>

        <div className="relative z-10 flex flex-col">
          <h1 className="text-[40px] md:text-[80px] font-bold text-white leading-tight">
            <span
              style={{
                color: "#F7E290",
                fontFamily: "Bebas Neue",
                fontWeight: "200",
              }}
            >
              ABOUT{" "}
            </span>
          </h1>
          <div
            className="text-[40px] md:text-[80px] text-white"
            style={{
              fontFamily: "Orbitron, serif",
              fontWeight: "400",
            }}
          >
            IIIT SRICITY
          </div>
        </div>

        <div className="relative z-10 max-w-md space-y-4 text-gray-400 text-sm md:text-lg mt-6 text-[18px] md:text-[22px]">
          <p>
            IIIT Sricity, established in 2013, is one of India's premier
            institutions for Information Technology education, research, and
            development. It stands as a beacon of excellence in technology and
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
