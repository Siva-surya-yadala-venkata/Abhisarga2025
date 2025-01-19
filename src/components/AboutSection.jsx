"use client";

import React from "react";
import { Marquee3D } from "./ui/Marquee3D";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image (lowest layer) */}
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
      <div className="absolute top-10 left-20 z-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            <span
              style={{
                color: "#F7E290",
                fontFamily: "Bebas Neue",
                fontWeight: "200",
                fontSize: "80px",
              }}
            >
              ABOUT{" "}
            </span>
          </h1>
          <div
            className="text-xl md:text-3xl text-white"
            style={{
              fontFamily: "Cinzel Decorative, serif",
              fontWeight: "400",
              fontSize: "80px",
            }}
          >
            ABHISARGA
          </div>
        </div>
        <div className="max-w-md space-y-4 text-gray-400 text-sm md:text-lg mt-16" style={{ fontSize: "22px" }}>
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
      <div className="absolute bottom-10 right-20 z-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            <span
              style={{
                color: "#F7E290",
                fontFamily: "Bebas Neue",
                fontWeight: "200",
                fontSize: "80px",
              }}
            >
              ABOUT{" "}
            </span>
          </h1>
          <div
            className="text-xl md:text-3xl text-white"
            style={{
              fontFamily: "Orbitron, serif",
              fontWeight: "400",
              fontSize: "80px",
            }}
          >
            IIIT SRICITY
          </div>
        </div>
        <div className="max-w-md space-y-4 text-gray-400 text-sm md:text-lg mt-16" style={{ fontSize: "22px" }}>
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
