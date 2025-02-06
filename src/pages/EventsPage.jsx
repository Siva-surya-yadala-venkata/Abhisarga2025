import { CalendarDays, ClubIcon, MapPin, Sparkles, Users } from "lucide-react";
import React, { useState, useEffect } from "react";
import ParallaxComponent from "../components/ParllaxComponent";
import Loader from "../components/Loader";

export const events = [
  {
    id: 1,
    title: "Mystique Moves",
    date: "2nd Mar",
    location: "TBD",
    type: "Non-Technical",
    club: "Beatripperz",
    attendees: 500,
    image: "/assets/Events/MystiqueMoves.webp",
    image2: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/67a302e609dba_mystique-moves-group-dance-competition.webp?d=1920x557",
    register: "https://unstop.com/p/mystique-moves-group-dance-competition-abhisarga-2025-indian-institute-of-information-technology-iiit-sri-city-1389091",
    description: "Mystique Moves is a theme-based group dance competition that invites teams to showcase their creativity, coordination, and artistry. Each team is tasked with crafting a performance that seamlessly incorporates the given themes, delivering a routine that captivates the audience and judges alike.",
  },
  {
    id: 2,
    title: "Enchanted Frames",
    date: "28th Feb - 2nd Mar",
    location: "TBD",
    type: "Non-Technical",
    club: "F/Stops",
    attendees: 300,
    image: "/assets/Events/EnchantedFrames.webp",
    image2: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/67a38fed21a3f_echanted-frames-photography-competition.webp?d=1920x557",
    register: "https://unstop.com/o/x1VcYdk?lb=w1cVYeX&utm_medium=Share&utm_source=shortUrl",
    description: "Enchanted Frames is a team-based photography competition that brings creativity and magic to life through two exciting rounds. In Round 1 (Online), participants capture portraits of mystical beings like wizards, witches, or detectives with dramatic lighting and effects. In Round 2 (Offline), teams use light painting techniques to create magical, glowing visuals using long exposure photography.",
  },
  {
    id: 3,
    title: "Rhythm Riots 2.0",
    date: "28th Feb - 2nd Mar",
    location: "TBD",
    type: "Non-Technical",
    club: "Reverb",
    attendees: 400,
    image: "/Comming_Soon.png",
    image2: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    register: "https://unstop.com/p/rhythm-riots-20-abhisarga-2025-indian-institute-of-information-technology-iiit-sri-city-1389467",
    description: "Rhythm Riot 2.0 is a musical band competition where teams compete to showcase their talent and win exciting prizes. Bands will go through online screening, an offline semi-final, and a grand finale on Abhisarga's main stage. ",
  },
  {
    id: 4,
    title: "MMUN(Mystic-Model United Nations)",
    date: "27th Feb - 28th Feb",
    location: "TBD",
    type: "Non-Technical",
    club: "Keynote",
    attendees: 30,
    image: "/assets/Events/MMUN.webp",
    image2: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    register: "https://unstop.com/p/mystic-model-united-nationsmmun-abhisarga-2025-indian-institute-of-information-technology-iiit-sri-city-1388122",
    description: "The Mystic Model United Nations (MMUN) will transport participants into an enchanting realm where global diplomacy intersects with mystery, unveiling hidden truths and solving critical global issues.",
  },
  {
    id: 5,
    title: "Paint The Prophecy-Tarrot Crad Creation",
    date: "28th Feb - 2nd Mar",
    location: "TBD",
    type: "Non-Technical",
    club: "Meraki",
    attendees: 30,
    image: "/assets/Events/PainTheProphecy.webp",
    image2: "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/67a2582acee66_paint-the-prophecy-tarot-card-creation.webp?d=1920x557",
    register: "https://unstop.com/o/UCtLam2?lb=BQETOdz&utm_medium=Share&utm_source=shortUrl",
    description: "Creation Of tarrot Cards using the given materials based on the cards designed participants have to write a story",
  },
  {
    id: 6,
    title: "cineMAGIC",
    date: "28th Feb - 2nd Mar",
    location: "TBD",
    type: "Non-Technical",
    club: "Mise-en-scene ",
    attendees: 30,
    image: "/Comming_Soon.png",
    image2: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
    register: "https://unstop.com/o/8bRv3Yu?lb=STH4l18&utm_medium=Share&utm_source=shortUrl",
    description: "Video making on promoting tirupati tourism ",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedclub, setSelectedclub] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    // Preload all event images
    const imagesToPreload = events.map(event => event.image);
    const imagePromises = imagesToPreload.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
        img.src = src;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        // All images have been loaded
        setIsLoading(false);
      })
      .catch((failedImage) => {
        console.warn(`Failed to load image: ${failedImage}`);
        setIsLoading(false);
      });
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesclub = selectedclub ? event.club === selectedclub : true;
    const matchesType = selectedType ? event.type === selectedType : true;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesclub && matchesType && matchesSearch;
  });

  const clubOptions = [
    "All Clubs",
    ...new Set(events.map((event) => event.club)),
  ];

  const toggleCard = (cardId) => {
    // Check if the device is mobile
    console.log(cardId);
    // Check if the card is already rotated
    if(window.innerWidth >1024) return
    const card = document.getElementById(cardId);
    const cardContainer = card.closest('.card-container');
    const cardBody = card.querySelector('.card-body');
    const cardBodyBgs = cardBody.querySelectorAll('.bg');
    const content = cardBody.querySelector('.content');
    
    if (card.style.transform === "rotateY(180deg)") {
      // Reset card
      card.style.transform = "rotateY(0deg)";
      
      // Reset card body backgrounds
      cardBodyBgs.forEach((bg, index) => {
        bg.style.width = "0%";
        bg.style.transitionDelay = "0s";
      });
      
      // Reset content
      if (content) {
        content.style.opacity = "0";
        content.style.transform = "translateY(20px)";
        content.style.transitionDelay = "0s";
      }
    } else {
      // Rotate card
      card.style.transform = "rotateY(180deg)";
      
      // Animate card body backgrounds
      cardBodyBgs.forEach((bg, index) => {
        bg.style.width = "200%";
        bg.style.transitionDelay = index === 1 ? "0.5s" : index === 2 ? "0.5s" : "0s";
      });
      
      // Animate content
      if (content) {
        content.style.opacity = "1";
        content.style.transform = "translateY(0)";
        content.style.transitionDelay = "1s";
      }
    }
  }

  return (
    <>
      {isLoading && <Loader />}
      <div
        className={`min-h-screen relative overflow-hidden pb-5 ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        style={{
          background: `
            linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)),
            url('/EventMainBg.jpeg') center/cover no-repeat fixed,
            radial-gradient(circle at top, #24222d, #131433)
          `,
        }}
      >
        <div className="relative h-[500px] mb-16">
          <ParallaxComponent
            backgroundImage={"/EventBg.jpeg"}
            heading={"Events"}
          />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
            <div className="grid grid-cols-3 gap-4 backdrop-blur-xl bg-[#24222f]/30 p-4 rounded-xl border border-[#24222f]/20 shadow-lg shadow-[#24222f]/10">
              <select
                value={selectedclub}
                onChange={(e) => setSelectedclub(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#24222f]/30 border border-[#24222f]/20 text-[#F7E290] focus:outline-none focus:ring-2 focus:ring-[#F7E290]/50"
              >
                {clubOptions.map((club) => (
                  <option
                    key={club}
                    value={club == "All Clubs" ? "" : club}
                    className="bg-[#24222f] text-[#F7E290]"
                  >
                    {club}
                  </option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#24222f]/30 border border-[#24222f]/20 text-[#F7E290] focus:outline-none focus:ring-2 focus:ring-[#F7E290]/50"
              >
                <option value="" className="bg-[#24222f] text-[#F7E290]">
                  Tech & Non - Tech
                </option>
                <option value="Technical" className="bg-[#24222f] text-[#F7E290]">
                  Technical
                </option>
                <option
                  value="Non-Technical"
                  className="bg-[#24222f] text-[#F7E290]"
                >
                  Non-Technical
                </option>
              </select>

              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-[#24222f]/30 border border-[#24222f]/20 text-[#F7E290] placeholder-[#F7E290]/50 focus:outline-none focus:ring-2 focus:ring-[#F7E290]/50"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="wrapper relative w-full min-h-screen">
            <style>{`
        .card-container {
          perspective: 1000px;
        }

        .card {
          position: relative;
          width: 350px;
          height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }

        @media (min-width: 1024px) {
          .card-container:hover .card {
            transform: rotateY(180deg);
          }
        }

        .card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          overflow: hidden;
        }

        .card-front {
          background: linear-gradient(145deg, #24222f, #2a2a3f);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-back {
          background: linear-gradient(145deg, #2a2a3f, #1f1f2e);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 16px;
        }
        @media (max-width: 640px) { /* Tailwind's sm breakpoint */
         .card {
            width: 280px; /* Adjust width for small screens */
            height: 400px; /* Adjust height if necessary */
          }
        }
      `}</style>

            <div className="container mx-auto flex flex-wrap justify-around gap-8">
              {filteredEvents.map((event) => (
                <div
                id={`${event.id}`}
                  key={event.title}
                  className="card-container p-4 "
                  onClick={() => {
                    console.log(event.id);
                    toggleCard(event.id)
                  }}
                >
                  <div className="card">
                    <div
                      className="card-img"
                      style={{
                        backgroundImage: `url(${event.image})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="card-body">
                      <span className="bg"></span>
                      <span className="bg"></span>
                      <span className="bg"></span>
                      <div className="content h-full">
                        {/* Corner decorations */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-500/20 rounded-tl-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-500/20 rounded-br-2xl"></div>

                        {/* Content */}
                        <div className="relative z-10 lg:max-w-md w-full flex flex-col items-center justify-center h-[100%]">
                          <h2 className="text-2xl lg:text-3xl font-bold text-amber-500 mb-4 tracking-wide font-poppins">
                            {event.title}
                          </h2>
                          {/* <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6 font-poppins">
                            {event.description}
                          </p> */}
                          <div className="space-y-3 text-sm text-gray-400">
                            <div className="flex items-center gap-3">
                              <CalendarDays className="w-5 h-5 text-amber-500/70" />
                              <span className="font-poppins text-sm lg:text-base">
                                {event.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <MapPin className="w-5 h-5 text-amber-500/70" />
                              <span className="font-poppins text-sm lg:text-base">
                                {event.location}
                              </span>
                            </div>
                          </div>
                          <a
                            href={`/event/${event.title.replaceAll(" ", "-")}`}
                            className="block mt-6"
                          >
                            <button className="w-full px-6 py-3 bg-gradient-to-r from-gray-900 to-black border border-amber-500/30 hover:border-amber-500/50 rounded-lg text-amber-500 font-semibold font-poppins transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group relative overflow-hidden">
                              <span className="relative z-10 flex items-center justify-center gap-2">
                                Know More
                                <Sparkles className="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </span>
                              <span className="absolute inset-0 bg-gradient-to-r from-amber-950/30 to-amber-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </button>
                          </a>
                        </div>

                        {/* Subtle top and bottom borders */}
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
                        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
