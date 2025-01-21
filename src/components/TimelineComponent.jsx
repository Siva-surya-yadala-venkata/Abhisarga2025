import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./TimelineComponent.css";
import { CoolMode } from "./ui/CoolMode";
const Timeline = () => {
  const [stars, setStars] = useState([]); // State to manage random stars
  const [hover, setHover] = useState(false); // State to track hover for interaction

  const [timelineRef, inView] = useInView({ threshold: 0.2 }); // Hook to track Timeline visibility
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
          animationDuration: Math.random() * 5 + 5 + "s", // Random animation speed
        });
      }
      setStars(starsArray);
    };

    generateStars(); // Initial generation of stars
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const timelineData = [
    {
      title: "The Enchanted Beginning",
      description: "The magic unfolds...",
      date: "1200 AD",
      image:
        "https://media.istockphoto.com/id/2170790699/photo/a-christmas-tree-ornament-with-a-glass-ball-inside-of-it.jpg?s=2048x2048&w=is&k=20&c=Es7yAMYyKWMAHd-hqbhkUYtyo0rHmwQIFm3SPezr0n0=", // Example enchanted forest
    },
    {
      title: "Mystic Encounter",
      description: "A mysterious event...",
      date: "1400 AD",
      image:
        "https://plus.unsplash.com/premium_photo-1661315459644-18297c559777?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example mystical figure
    },
    {
      title: "Arcane Discovery",
      description: "The secrets are revealed...",
      date: "1600 AD",
      image:
        "https://media.istockphoto.com/id/1901752590/photo/secondary-or-high-school-students-studying-wind-turbines-in-science-class-with-teacher.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEb4wTXRTppkd43yeLxHYoeVR0jFlyGMLHg-ssPpClk=", // Example magical book
    },
    {
      title: "The Final Prophecy",
      description: "The journey concludes...",
      date: "1800 AD",
      image:
        "https://media.istockphoto.com/id/1691793939/photo/the-beautiful-decorations-cultural-program-wedding-decorations-new-year-dj-night.jpg?s=2048x2048&w=is&k=20&c=ViZDA4rloR7J6_tXCBqJF4Ixqa52pqWFVfMDgXtYCZs=", // Example prophecy scroll
    },
    {
      title: "The Enchanted Beginning",
      description: "The magic unfolds...",
      date: "1200 AD",
      image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8", // Another enchanted scene
    },
    {
      title: "Mystic Encounter",
      description: "A mysterious event...",
      date: "1400 AD",
      image: "https://images.unsplash.com/photo-1517511620798-cec17d428bc0", // Mystical creature
    },
    {
      title: "Arcane Discovery",
      description: "The secrets are revealed...",
      date: "1600 AD",
      image:
        "https://plus.unsplash.com/premium_photo-1661315459644-18297c559777?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example mystical figure
    },
    {
      title: "The Final Prophecy",
      description: "The journey concludes...",
      date: "1800 AD",
      image:
        "https://media.istockphoto.com/id/1901752590/photo/secondary-or-high-school-students-studying-wind-turbines-in-science-class-with-teacher.webp?a=1&b=1&s=612x612&w=0&k=20&c=UEb4wTXRTppkd43yeLxHYoeVR0jFlyGMLHg-ssPpClk=", // Example magical book
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={timelineRef}
      className="relative min-h-screen py-10 px-5 mt-10"
      style={{
        background: "radial-gradient(circle at top, #000000, #000000)",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Fixed Image */}
      <CoolMode
        options={{
          particle: "/wizard.svg",
        }}
      >
        <button>
          <motion.img
            src="./assets/harrypotter.gif"
            alt="Fixed Decorative"
            className="hidden lg:block fixed bottom-10 left-10 object-cover opacity-80  z-10"
            width={400}
            initial={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.8,
              x: inView ? 0 : -50,
              y: inView ? 0 : 50,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
            exit={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
          />
        </button>
      </CoolMode>
      <CoolMode
        options={{
          particle: "/bird.png",
        }}
      >
        <button>
          <motion.img
            src="/Magic-hat.gif"
            alt="Fixed Decorative"
            className="hidden lg:block fixed top-20 right-10 object-cover opacity-80 z-10"
            width={200}
            initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
            animate={{
              opacity: inView ? 1 : 0,
              scale: inView ? 1 : 0.8,
              x: inView ? 0 : 50,
              y: inView ? 0 : 50,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
            exit={{ opacity: 0, scale: 0.8, x: 40, y: 100 }}
          />
        </button>
      </CoolMode>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-2xl rounded-full"
          style={{ animation: "orbMove 6s ease-in-out infinite alternate" }}
        ></div>
        <div
          className="absolute bottom-32 right-20 w-60 h-60 bg-gradient-to-r from-blue-500 to-teal-500 opacity-20 blur-3xl rounded-full"
          style={{ animation: "orbMove 8s ease-in-out infinite alternate" }}
        ></div>

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
                animationDuration: hover ? "3s" : star.animationDuration,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Timeline Content */}
      <div className="flex flex-row justify-center items-center space-x-4">
        <img
          src="/assets/header-flourish.svg"
          alt=""
          className="h-3 transform scale-x-[-1] mb-10"
        />
        <h1
          className="text-4xl font-bold text-center text-[#F7E290] mb-10"
          style={{ fontFamily: "MedievalSharp, serif" }}
        >
          Mystical Timeline
        </h1>
        <img src="/assets/header-flourish.svg" alt="" className="h-3 mb-10" />
      </div>
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-1/2 w-1 bg-gradient-to-b from-[#F7E290] to-[#24222d] h-full transform -translate-x-1/2"></div>
        {timelineData.map((item, index) => {
          const [ref, itemInView] = useInView({ threshold: 0.5 });
          const itemControls = useAnimation();

          useEffect(() => {
            if (itemInView) {
              itemControls.start("visible");
            } else {
              itemControls.start("hidden");
            }
          }, [itemInView, itemControls]);

          return (
            <motion.div
              ref={ref}
              key={index}
              className={`mb-20 flex ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } items-center`}
              variants={itemVariants}
              initial="hidden"
              animate={itemControls}
            >
              {/* Content Area */}
              <div
                className={`relative w-1/2 px-5 py-5 bg-gradient-to-r ${
                  index % 2 === 0
                    ? "from-[#24222d] to-[#131433]"
                    : "from-[#131433] to-[#24222d]"
                } rounded-lg shadow-lg border border-[#F7E290] text-[#F7E290] event-card`}
              >
                {/* Backdrop Layer (Dimmed and Blurred) */}
                <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md rounded-lg"></div>

                {/* Content (Text remains unaffected by backdrop opacity) */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="mt-2">{item.description}</p>
                  <p className="mt-2 text-sm italic">{item.date}</p>
                </div>

                {/* Decorative Circle */}
                <div
                  className={` absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F7E290] border-4 border-[#131433] ${
                    index % 2 !== 0 ? "-right-3" : "-left-3"
                  }`}
                ></div>
              </div>

              {/* Image Area */}
              <div className="w-1/2 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-cover rounded-lg shadow-lg border-2 border-[#F7E290]"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Timeline;
