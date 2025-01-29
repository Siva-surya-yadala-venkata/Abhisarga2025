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
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center 22xl:flex-row 22xl:space-x-10 22xl:justify-between 22xl:text-left 22xl:space-y-0 space-y-8">
        {/* About Abhisarga Section */}
        <div className="max-w-[600px] h-[550px] p-8 flex flex-col items-center justify-center 2xl:w-[600px] 2xl:h-[550px] 2xl:items-start 2xl:justify-start 2xl:absolute 2xl:top-5 2xl:left-10">
          {/* Backdrop Layer for Abhisarga */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-0"></div>

          <div className="relative z-10 flex flex-col text-center 22xl:text-left">
            <h1 className="text-[40px] 22xl:text-[80px] font-bold text-white leading-tight">
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
            <div className="text-[40px] 22xl:text-[80px] text-white font-mysticalFont font-[400]">
              ABHISARGA
            </div>
          </div>

          <div className="relative z-10 max-w-md space-y-4 px-4 text-gray-400 text-sm md:text-lg mt-6 text-[16px] text-center 2xl:text-left  md:text-[20px] 2xl:text-[22px]">
            <p>
              Abhisarga is IIIT Sri City's annual techno-cultural
              fest. It combines technology, culture, and
              entertainment, creating a vibrant platform for
              talent and innovation.
            </p>
            <p>
              Experience dazzling dance competitions, proshows,
              DJ nights, technical challenges, cultural
              performances, and much more. Celebrate creativity
              and innovation at Abhisarga this March!
            </p>
          </div>
        </div>

        {/* About IIIT Section */}
        <div className="max-w-[650px] h-[500px] p-8 flex flex-col items-center justify-center 2xl:w-[650px] 2xl:h-[500px] 2xl:items-start 2xl:justify-start 2xl:absolute 2xl:bottom-5 2xl:right-10">
          {/* Backdrop Layer for IIIT */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg z-0"></div>

          <div className="relative z-10 flex flex-col text-center 22xl:text-left">
            <h1 className="text-[40px] 22xl:text-[80px] font-bold text-white leading-tight">
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
            <div className="text-[40px] 2xl:text-[80px] text-white font-mysticalFont font-[400]">
              IIIT SRI CITY
            </div>
          </div>

          <div className="relative z-10 max-w-md space-y-4 p-4 text-gray-400 text-sm md:text-lg mt-6 text-[16px] text-center 2xl:text-left md:text-[20px] 2xl:text-[22px]">
            <p>
              IIIT Sri City, established in 2013, is one of
              India's premier institutions for Information
              Technology education, research, and development. It
              stands as a beacon of excellence in technology and
              innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
