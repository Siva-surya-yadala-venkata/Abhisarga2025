import { cn } from "../libs/Cn";
import Marquee from "./Marquee";
import React from "react";

interface Marquee3DProps {
  className?: string;
  style?: React.CSSProperties;
  transform?: string; // Added to the props interface
}

const logos = [
  {
    name: "Microsoft",
    img: "/assets/HeroAssets/Abhisarga2.webp",
  },
  {
    name: "Apple",
    img: "/assets/HeroAssets/Abhisarga3.webp",
  },
  {
    name: "Google",
    img: "/assets/HeroAssets/Abhisarga4.webp",
  },
  {
    name: "Facebook",
    img: "/assets/HeroAssets/Abhisarga5.webp",
  },
  {
    name: "LinkedIn",
    img: "/assets/HeroAssets/CulturalEvents1.webp",
  },
  {
    name: "Twitter",
    img: "/assets/HeroAssets/ExicitingPrizes1.webp",
  },
];

export function Marquee3D({ className, style, transform }: Marquee3DProps) {
  return (
    <div
      className={cn(
        "relative flex h-[300vh] w-[80vw] flex-col items-center justify-center gap-4 overflow-hidden bg-transparent",
        className
      )}
      style={style}
    >
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
          className="h-[100vh] justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              transform ||
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.img || "/placeholder.svg"}
              alt={data.name}
              className="mx-auto h-full w-1/3 cursor-pointer rounded-xl transition-all duration-300"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
