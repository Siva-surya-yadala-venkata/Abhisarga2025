"use client";

import React from "react";
import { Marquee3D } from "./ui/Marquee3D";
import Typing from "./ui/Typing";
const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Image (lowest layer) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/DroneView.jpg')",
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-[#000000]"></div>
      </div>

      {/* Marquee3D (middle layer) */}
      <div
        className="hidden xl:absolute xl:inset-[-10rem] xl:flex xl:items-center xl:justify-end"
        style={{ zIndex: 1 }}
      >
        <Marquee3D />
      </div>

      {/* Content (top layer) */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header with Logo and Title */}
        <div className="flex items-center gap-6 mb-12">
          <a
            href="https://www.iiits.ac.in"
            className="shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-black"
          >
            <img src="/IIITS-logo.png" alt="IIIT Sri City Logo" className=" " />
          </a>

          <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
          {/* style={{ fontFamily: "MedievalSharp, serif" }} */}
            <span style={{ color: "#F7E290", fontFamily: "MedievalSharp, serif" }} className="text-#F7E290">
              ABOUT{" "}
            </span>{" "}
            IIIT SRI CITY
          </h1>
        </div>

        {/* Content */}
        <div className="max-w-3xl space-y-6 text-lg text-gray-200">
          <p>
            Indian Institute of Information Technology Sri City, Chittoor known as IIIT Sri City (IIITS) 
            was established in 2013 by Ministry of Education, Government of India as an Institute of 
            National importance by an Act of Parliament. IIITS is one among the 20 Institutes across 
            India, focusing on Information Technology education, research and development.
          </p>

          <p>
            The institute is located in Sri City (www.sricity.in) located about 60 KMs from Chennai 
            on the Nellore Highway. The nearest airports are Chennai (70 KMs) and Tirupati (70 KMs).
          </p>

          <p>
            The Institute was setup by the Government of India along with Government of Andhra Pradesh 
            and Industry Partners represented by Sri City Foundation as a Public-Private-Partnership (PPP) 
            institution. The Institute is governed by the Board of Governors consisting of eminent 
            personalities from the Government, Industry and Academia.
          </p>

          <p>
            IIITS offers B. Tech, M.Tech, M.S. and Ph. D. programmes in the areas of Computer Science & 
            Engineering and Electronics & Communications Engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
