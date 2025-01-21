"use client";

import React from "react";
import { Marquee3D } from "./ui/Marquee3D";

const AboutPage = () => {
  return (
    <div className="relative min-h-screen h-[2vh] overflow-hidden flex items-center justify-center">
      {/* Background Image (lowest layer) */}
      <div className="absolute inset-0 bg-black opacity-90 rounded-lg z-0"></div>

      <div className="absolute inset-0 bg-cover bg-center">
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
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center xl:flex-row xl:space-x-10 xl:justify-between xl:text-left xl:space-y-0 space-y-8">
        {/* About Abhisarga Section */}
        <div className="w-[600px] h-[550px] p-8 flex flex-col items-center justify-center xl:w-[600px] xl:h-[550px] xl:items-start xl:justify-start xl:absolute xl:top-5 xl:left-10">
          {/* Backdrop Layer for Abhisarga */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-0"></div>

          <div className="relative z-10 flex flex-col text-center xl:text-left">
            <h1 className="text-[40px] xl:text-[80px] font-bold text-white leading-tight">
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
              className="text-[40px] xl:text-[80px] text-white"
              style={{
                fontFamily: "MedievalSharp, serif",
                fontWeight: "400",
              }}
            >
              ABHISARGA
            </div>
          </div>

          <div className="relative z-10 max-w-md space-y-4 text-gray-400 text-sm md:text-lg mt-6 text-[16px] text-center xl:text-left  md:text-[20px] xl:text-[22px]">
            <p>
              Abhisarga is IIIT Sricity's annual techno-cultural fest. It
              combines technology, culture, and entertainment, creating a
              vibrant platform for talent and innovation.
            </p>
            <p>
              Experience dazzling dance competitions, proshows, DJ nights,
              technical challenges, cultural performances, and much more.
              Celebrate creativity and innovation at Abhisarga this March!
            </p>
          </div>
        </div>

        {/* About IIIT Section */}
        <div className="w-[650px] h-[500px] p-8 flex flex-col items-center justify-center xl:w-[650px] xl:h-[500px] xl:items-start xl:justify-start xl:absolute xl:bottom-5 xl:right-10">
          {/* Backdrop Layer for IIIT */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-0"></div>

          <div className="relative z-10 flex flex-col text-center xl:text-left">
            <h1 className="text-[40px] xl:text-[80px] font-bold text-white leading-tight">
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
              className="text-[40px] xl:text-[80px] text-white"
              style={{
                fontFamily: "MedievalSharp, serif",
                fontWeight: "400",
              }}
            >
              IIIT SRICITY
            </div>
          </div>

          <div className="relative z-10 max-w-md space-y-4 text-gray-400 text-sm md:text-lg mt-6 text-[16px] text-center xl:text-left md:text-[20px] xl:text-[22px]">
            <p>
              IIIT Sricity, established in 2013, is one of India's premier
              institutions for Information Technology education, research, and
              development. It stands as a beacon of excellence in technology and
              innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
