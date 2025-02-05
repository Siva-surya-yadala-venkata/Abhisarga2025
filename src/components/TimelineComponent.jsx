import React, { useEffect, useState, lazy, Suspense } from "react";
import { motion, useAnimation } from "framer-motion";
import "./TimelineComponent.css";
import { CoolMode } from "./ui/CoolMode";

const TimelineItem = lazy(() => import("./TimelineItem")); // Lazy load TimelineItem component

const Timeline = () => {
  const [stars, setStars] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    const generateStars = () => {
      const starsArray = [];
      for (let i = 0; i < 100; i++) {
        starsArray.push({
          id: i,
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          size: Math.random() * 2 + "px",
          animationDuration: Math.random() * 5 + 5 + "s",
        });
      }
      setStars(starsArray);
    };
    generateStars();
  }, []);

  const timelineData = [
    {
      title: "The Enchanted Beginning",
      description: "The magic unfolds...",
      date: "1200 AD",
      image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8",
    },
    {
      title: "Mystic Encounter",
      description: "A mysterious event...",
      date: "1400 AD",
      image: "https://images.unsplash.com/photo-1517511620798-cec17d428bc0",
    },
    {
      title: "Arcane Discovery",
      description: "The secrets are revealed...",
      date: "1600 AD",
      image: "https://plus.unsplash.com/premium_photo-1661315459644-18297c559777?q=80&w=2000&auto=format&fit=crop",
    },
    {
      title: "The Final Prophecy",
      description: "The journey concludes...",
      date: "1800 AD",
      image: "https://media.istockphoto.com/id/1901752590/photo/secondary-or-high-school-students-studying-wind-turbines-in-science-class-with-teacher.webp",
    },
  ];

  return (
    <motion.div
      className="relative min-h-screen py-10 px-5 mt-10"
      style={{ background: "radial-gradient(circle at top, #000000, #000000)", overflow: "hidden" }}
    >
      {/* <CoolMode options={{ particle: "/wizard.svg" }}>
        <button>
          <motion.img
            src="./assets/harrypotter.gif"
            alt="Fixed Decorative"
            className="hidden 2xl:block fixed bottom-10 left-10 object-cover opacity-80  z-10"
            width={400}
          />
        </button>
      </CoolMode>
      <CoolMode options={{ particle: "/bird.png" }}>
        <button>
          <motion.img
            src="/Magic-hat.gif"
            alt="Fixed Decorative"
            className="hidden 2xl:block fixed top-20 right-10 object-cover opacity-80 z-10"
            width={200}
          />
        </button>
      </CoolMode> */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="stars-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animationDuration: star.animationDuration,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-4">
        <img src="/assets/header-flourish.svg" alt="" className="h-3 transform scale-x-[-1] mb-10" />
        <h1 className="text-4xl font-bold text-center text-[#F7E290] mb-10 font-mysticalFont">Mystical Timeline</h1>
        <img src="/assets/header-flourish.svg" alt="" className="h-3 mb-10" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-1/2 w-1 bg-gradient-to-b from-[#F7E290] to-[#24222d] h-full transform -translate-x-1/2"></div>
        {timelineData.map((item, index) => (
          <Suspense fallback={<div>Loading...</div>} key={index}>
            <TimelineItem index={index} item={item} />
          </Suspense>
        ))}
      </div>
    </motion.div>
  );
};

export default React.memo(Timeline);
