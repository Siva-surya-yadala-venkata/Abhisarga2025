import React from "react";

export default function CarouselSlide({ item, isActive }) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-300 ease-in-out bg-black
        ${isActive ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      {/* Top-to-Bottom Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent, rgba(0, 0, 0, 0.7)),
            linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent),
            rgba(0, 0, 0, 0.3)
          `,
        }}
      />

      {/* Background Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />

      {/* Content */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 max-w-xl z-20">
        <div className="flex items-center gap-5 mb-4">
          <span className="text-[#F7E290]">{item.author}</span>
          <span className="text-white/80">{item.date}</span>
        </div>
        <h2 className="text-white text-5xl font-bold mb-3">{item.title}</h2>
        <h3 className="text-2xl text-[#F7E290] mb-5">{item.topic}</h3>
        <p className="text-white/80 mb-8">{item.description}</p>
        {/* <div className="flex gap-4">
          <button className="px-8 py-3 bg-[#F7E290] text-[#131433] rounded-full hover:bg-orange-600 transition-colors">
            SEE MORE
          </button>
          <button className="px-8 py-3 bg-white/20 rounded-full backdrop-blur-md hover:bg-white/30 transition-colors">
            @ABHISARGA
          </button>
        </div> */}
      </div>
    </div>
  );
}
