
import {  CalendarDays, MapPin, Sparkles , Users } from "lucide-react";
import React, { useState,} from "react";
import {motion} from 'framer-motion'
const events = [
  {
    id: 1,
    title: "Triwizard Tournament Opening Ceremony",
    date: "2024-04-15",
    location: "Great Hall",
    type: "Non-Technical",
    club: "Epoch",
    attendees: 500,
    image: "/Comming_Soon.png",
    image2: "/Comming_Soom.png"
  },
  {
    id: 2,
    title: "club Quidditch Finals",
    date: "2024-05-01",
    location: "Quidditch Pitch",
    type: "Non-Technical",
    club: "GDG",
    attendees: 300,
    image: "/Comming_Soon.png",
    image2: "/Comming_Soom.png"
  },
  {
    id: 3,
    title: "Halloween Feast",
    date: "2024-10-31",
    location: "Great Hall",
    type: "Non-Technical",
    club: "Iota",
    attendees: 400,
    image: "/Comming_Soon.png",
    image2: "/Comming_Soom.png"
  },
  {
    id: 4,
    title: "Advanced Defense Against Dark Arts",
    date: "2024-06-15",
    location: "Defense Classroom",
    type: "Technical",
    club: "Enigma",
    attendees: 30,
    image: "/Comming_Soon.png",
    image2: "/Comming_Soom.png"
  },
  {
    id: 5,
    title: "Yule Ball",
    date: "2024-12-25",
    location: "Great Hall",
    type: "Non-Technical",
    club: "Epoch",
    attendees: 450,
    image: "/Comming_Soon.png",
    image2: "/Comming_Soom.png"
  },
  {
    id: 6,
    title: "Potions Championship",
    date: "2024-09-01",
    location: "Dungeons",
    type: "Technical",
    club: "Meraki",
    attendees: 100, 
    image: "/Comming_Soon.png",
    image2: "/Comming_Soom.png"
  },
];
import ParallaxComponent from '../components/ParllaxComponent'
function App() {
  function toggleCard(cardContainer) {
    // Check if the card is already rotated
    const card = cardContainer.querySelector('.card');
    if (card.style.transform === 'rotateY(180deg)') {
      card.style.transform = 'rotateY(0deg)';
    } else {
      card.style.transform = 'rotateY(180deg)';
    }
  }
  
  const [selectedclub, setSelectedclub] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredEvents = events.filter((event) => {
    const matchesclub = selectedclub ? event.club === selectedclub : true;
    const matchesType = selectedType ? event.type === selectedType : true;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesclub && matchesType && matchesSearch;
  });

  return (
    <div 
    className="min-h-screen relative overflow-hidden pb-5"
    style={{
      background: `
  linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.5)),
      url('/EventMainBg.jpg') center/cover no-repeat fixed,
      radial-gradient(circle at top, #24222d, #131433)
    `,
    }}
    >
     <div className="relative h-[500px] mb-16">
  <ParallaxComponent
    backgroundImage={"/EventBg.jpg"}
    heading={"Events"}
  />
  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
    <div className="grid grid-cols-3 gap-4 backdrop-blur-xl bg-[#24222f]/30 p-4 rounded-xl border border-[#24222f]/20 shadow-lg shadow-[#24222f]/10">
      <select
        value={selectedclub}
        onChange={(e) => setSelectedclub(e.target.value)}
        className="w-full px-3 py-2 rounded-lg bg-[#24222f]/30 border border-[#24222f]/20 text-[#F7E290] focus:outline-none focus:ring-2 focus:ring-[#F7E290]/50"
      >
        <option value="">Filter by club</option>
        <option value="Epoch">Epoch</option>
        <option value="GDG">GDG</option>
        <option value="Iota">Iota</option>
        <option value="Enigma">Enigma</option>
        <option value="Meraki">Meraki</option>
      </select>

      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full px-3 py-2 rounded-lg bg-[#24222f]/30 border border-[#24222f]/20 text-[#F7E290] focus:outline-none focus:ring-2 focus:ring-[#F7E290]/50"
      >
        <option value="">Filter by Type</option>
        <option value="Technical">Technical</option>
        <option value="Non-Technical">Non-Technical</option>
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
        width: 300px;
        height: 400px;
        transform-style: preserve-3d;
        transition: transform 0.6s ease;
      }
     .card-container:hover .card {
        transform: rotateY(180deg);
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
    `}</style>

    <div className="container mx-auto flex flex-wrap justify-around gap-8">
      {/* {filteredEvents.map((event) => (
        <motion.div
          key={event.id}
          className="card-container"
          whileHover={{ scale: 1.05 }}
        >
          <div className="card">
            <div className="card-face card-front">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

           
            <div 
  className="card-face card-back relative overflow-hidden rounded-2xl p-6 backdrop-blur-md bg-black/40 border border-gray-800 shadow-lg transition-all duration-300 hover:shadow-amber-500/10 group"
  style={{
    background: `
      linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95)),
      url(${event.image2}) center/cover no-repeat
    `
  }}
>
  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-500/20 rounded-tl-2xl"></div>
  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-500/20 rounded-br-2xl"></div>

  <div className="relative z-10">
    <h2 className="text-3xl font-bold text-amber-500 mb-4 tracking-wide font-serif">{event.title}</h2>
    <p className="text-gray-300/90 text-lg leading-relaxed mb-6">{event.description}</p>
    <div className="space-y-3 text-sm text-gray-400">
      <div className="flex items-center gap-3">
        <CalendarDays className="w-5 h-5 text-amber-500/70" />
        <span>{new Date(event.date).toLocaleDateString()}</span>
      </div>
      <div className="flex items-center gap-3">
        <MapPin className="w-5 h-5 text-amber-500/70" />
        <span>{event.location}</span>
      </div>
      <div className="flex items-center gap-3">
        <Users className="w-5 h-5 text-amber-500/70" />
        <span>{event.attendees} attendees</span>
      </div>
    </div>
    <a href={`/event/${event.title}`}>
    <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-gray-900 to-black border border-amber-500/30 hover:border-amber-500/50 rounded-lg text-amber-500 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group relative overflow-hidden">
      <span className="relative z-10 flex items-center justify-center gap-2">
        Know More 
        <Sparkles className="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-amber-950/30 to-amber-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>
    </a>
  </div>

  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
  <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
</div>

          </div>
        </motion.div>
      ))} */}
  
  {filteredEvents.map((event) => (
  <div key={event.title} className="card-container"   onClick={() => toggleCard(this)}>
  <div className="card" >
    <div className="card-img" style={{backgroundImage: `url(${event.image})`}}></div>
    <div className="card-body">
        <span className="bg"></span>
        <span className="bg"></span>
        <span className="bg"></span>
        <div className="content">
          
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-500/20 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-500/20 rounded-br-2xl"></div>

              {/* Content */}
              <div className="relative z-10  rounded-lg  lg:max-w-md w-full">
      <h2 className="text-2xl lg:text-3xl font-bold text-amber-500 mb-4 tracking-wide font-poppins">
        {event.title}
      </h2>
      <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6 font-poppins">
        {event.description}
      </p>
      <div className="space-y-3 text-sm text-gray-400">
        <div className="flex items-center gap-3">
          <CalendarDays className="w-5 h-5 text-amber-500/70" />
          <span className="font-poppins text-sm lg:text-base">
            {new Date(event.date).toLocaleDateString()}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-amber-500/70" />
          <span className="font-poppins text-sm lg:text-base">{event.location}</span>
        </div>
      </div>
      <a href={`/event/${event.title}`} className="block mt-6">
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

    
  );
}

export default App;