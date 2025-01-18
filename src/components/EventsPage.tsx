import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wand2, CalendarDays, MapPin, Users, Sparkles } from 'lucide-react';
import React ,{ useState , useEffect } from 'react';
interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: 'Technical' | 'Non-Technical';
  club: 'Epoch' | 'GDG' | 'Iota' | 'Enigma' | 'Meraki';
  attendees: number;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Triwizard Tournament Opening Ceremony",
    date: "2024-04-15",
    location: "Great Hall",
    type: "Non-Technical",
    club: "Epoch",
    attendees: 500,
    image: "/assets/Event.png"
  },
  {
    id: 2,
    title: "club Quidditch Finals",
    date: "2024-05-01",
    location: "Quidditch Pitch",
    type: "Non-Technical",
    club: "GDG",
    attendees: 300,
    image: "/assets/Event.png"
  },
  {
    id: 3,
    title: "Halloween Feast",
    date: "2024-10-31",
    location: "Great Hall",
    type: "Non-Technical",
    club: "Iota",
    attendees: 400,
    image: "/assets/Event.png"
  },
  {
    id: 4,
    title: "Advanced Defense Against Dark Arts",
    date: "2024-06-15",
    location: "Defense Classroom",
    type: "Technical",
    club: "Enigma",
    attendees: 30,
    image: "/assets/Event.png"
  },
  {
    id: 5,
    title: "Yule Ball",
    date: "2024-12-25",
    location: "Great Hall",
    type: "Non-Technical",
    club: "Epoch",
    attendees: 450,
    image: "/assets/Event.png"
  },
  {
    id: 6,
    title: "Potions Championship",
    date: "2024-09-01",
    location: "Dungeons",
    type: "Technical",
    club: "Meraki",
    attendees: 100,
    image: "/assets/Event.png"
  }
];

const clubColors = {
  Epoch: "bg-gradient-to-r from-purple-900/40 to-amber-500/40 text-amber-200 border-amber-500/50",
  GDG: "bg-gradient-to-r from-purple-900/40 to-emerald-500/40 text-emerald-200 border-emerald-500/50",
  Iota: "bg-gradient-to-r from-purple-900/40 to-yellow-500/40 text-yellow-200 border-yellow-500/50",
  Enigma: "bg-gradient-to-r from-purple-900/40 to-blue-500/40 text-blue-200 border-blue-500/50",
  Meraki: "bg-gradient-to-r from-purple-900/40 to-red-500/40 text-red-200 border-red-500/50",
};

function App() {
  const [selectedclub, setSelectedclub] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
 const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const filteredEvents = events.filter(event => {
    const matchesclub = selectedclub ? event.club === selectedclub : true;
    const matchesType = selectedType ? event.type === selectedType : true;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesclub && matchesType && matchesSearch;
  });
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Check initially
    checkMobile()
    
    // Add resize listener
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return (
    <div className="min-h-screen bg-[#24222d]">
      <div className="relative  h-[500px] mb-16">
        <div
          // className="  h-[500px]  inset-0 bg-[url('https://images.unsplash.com/photo-1598153346810-860daa814c4b?auto=format&fit=crop&q=80')] bg-cover bg-center bg-attachment-fixed"
         className='parallax'
         >
        
          <div className="absolute inset-0 bg-black/50"> <div className=" h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-4 font-magical text-white"
          >
            <span className="text-[#F7E290]">Events</span>
          </motion.h1>
        </div>   </div>
        </div> 
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
    {!isMobile && (
      <div className="wrapper relative w-full min-h-screen">
        <style>{`
          .card {
            transform-style: preserve-3d;
            transform: perspective(2000px);
            transition: all 1s ease;
          }
          
          .card:hover {
            transform: perspective(2000px) rotateX(-10deg);
          }
          
          .img-container {
            transform-origin: top;
            transition: transform 1s ease;
          }
          
          .card:hover .img-container {
            transform: rotateX(-80deg) scale(0);
            }
          
          .card-details {
            transform: perspective(2000px) translateZ(0);
            opacity: 0;
            transition: opacity 0.5s ease;
          }
          
          .card:hover .card-details {
            opacity: 1;
          }
        `}</style>

        <div className="container mx-auto flex flex-wrap justify-around gap-8">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              ref={ref}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
              transition={{ duration: 0.5 }}
              className="card relative w-[300px] h-[400px] bg-[#24222d]/30 shadow-lg preserve-3d perspective-2000"
              // whileHover={{ rotateZ: -10 }}
            >
              <div className="img-container absolute inset-0 bg-[#24222d]/20 border border-[#24222d]/10 overflow-hidden rotate-x-[-135deg]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-500"
                />
              </div>
              <div className="card-details absolute inset-0 p-6 bg-[#24221f]/95 text-amber-200 bg-gradient-to-r from-[#24222d]/95 to-[#000]/50">
                <h2 className="text-2xl font-semibold text-amber-300 mb-4">
                  {event.title}
                </h2>
                <div className="space-y-4">
                  <p className="text-purple-200/90 text-lg leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-amber-200/50" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-200/50" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-200/50" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 mt-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-amber-500/20 border border-purple-500/30 hover:border-amber-500/30 text-amber-200 transition-all duration-300 flex items-center justify-center">
                  <a href="/event"> <span>Join Event</span> </a>
                  <Wand2 className="w-4 h-4 ml-2 opacity-50 club-hover:opacity-100 club-hover:rotate-12 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )}
   {isMobile && filteredEvents.map((event) => {
  return (
    <motion.div
      key={event.id}
      ref={ref}
      transition={{ duration: 0.5 }}
      className="club w-full max-w-sm mx-auto mb-6 border-2 border-amber-500"
    >
      <div className="overflow-hidden bg-[#24224d]/30 border border-[#24222d]/10 rounded-lg shadow-sm hover:shadow-md hover:shadow-[#24222d]/10 transition-shadow duration-300">
        {/* Image Section */}
        <div className="relative h-40 sm:h-48">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="p-4 space-y-3">
          <h2 className="text-lg sm:text-xl font-semibold text-amber-200 club-hover:text-amber-300 transition-colors">
            {event.title}
          </h2>
          <div className="space-y-1 text-sm sm:text-base text-purple-200/70">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-amber-200/50" />
              <span>{new Date(event.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-200/50" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-200/50" />
              <span>{event.attendees} attendees</span>
            </div>
          </div>
          <button className="w-full px-3 py-2 rounded-md bg-gradient-to-r from-purple-500/20 to-amber-500/20 border border-purple-500/30 hover:border-amber-500/30 text-amber-200 transition-all duration-300 flex items-center justify-center">
           <a href="/event"> <span>Join Event</span> </a>
            <Wand2 className="w-4 h-4 ml-2 opacity-50 club-hover:opacity-100 club-hover:rotate-12 transition-all" />
          </button>
        </div>
      </div>
    </motion.div>
  );
    })}
    </div>
    </div>
   
    // <div className="wrapper relative w-full min-h-screen">
    //   <style jsx>{`
    //     .card {
    //       transform-style: preserve-3d;
    //       transform: perspective(2000px);
    //       transition: all 1s ease;
    //     }
        
    //     .img-container {
    //       transform-origin: left;
    //       transition: transform 1s ease;
    //     }
        
    //     .card-details {
    //       transform: perspective(2000px) translateZ(0);
    //       opacity: 0;
    //       transition: opacity 0.5s ease;
    //     }
        
    //     @media (hover: hover) {
    //       .card:hover {
    //         transform: perspective(2000px) rotate(-10deg);
    //       }
          
    //       .card:hover .img-container {
    //         transform: rotateY(-135deg);
    //       }
          
    //       .card:hover .card-details {
    //         opacity: 1;
    //       }
    //     }
        
    //     .card.animate {
    //       transform: perspective(2000px) rotate(-10deg);
    //     }
        
    //     .card.animate .img-container {
    //       transform: rotateY(-135deg);
    //     }
        
    //     .card.animate .card-details {
    //       opacity: 1;
    //     }
    //   `}</style>

    //   <div className="container mx-auto flex flex-wrap justify-around gap-8">
    //     {filteredEvents.map((event) => {
    //       const EventComponent = () => {
    //         const [ref, inView] = useInView({
    //           triggerOnce: true,
    //           threshold: 0.7,
    //         });

    //         return (
    //           <motion.div
    //             ref={ref}
    //             initial={{ opacity: 0, y: 20 }}
    //             animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
    //             transition={{ duration: 0.5 }}
    //             className={`card relative w-[300px] h-[400px] bg-purple-950/30 shadow-lg ${inView ? 'animate' : ''}`}
    //           >
    //             <div className="img-container absolute inset-0 bg-purple-950/30 border border-purple-500/20 overflow-hidden">
    //               <img
    //                 src={event.image}
    //                 alt={event.title}
    //                 className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-500"
    //               />
    //               <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
    //               <div className="absolute bottom-0 left-0 right-0 p-4">
    //                 <span className={`inline-block px-3 py-1 rounded-full text-sm ${clubColors[event.club]} border`}>
    //                   {event.club}
    //                 </span>
    //               </div>
    //             </div>

    //             <div className="card-details absolute inset-0 p-6 bg-purple-950/95 text-amber-200">
    //               <h2 className="text-2xl font-semibold text-amber-300 mb-4">
    //                 {event.title}
    //               </h2>
    //               <div className="space-y-4">
    //                 <p className="text-purple-200/90 text-lg leading-relaxed">
    //                   {/* event.description does not exist, so we'll just remove it */}
    //                 </p>
    //                 <div className="space-y-2">
    //                   <div className="flex items-center gap-2">
    //                     <CalendarDays className="w-4 h-4 text-amber-200/50" />
    //                     <span>{new Date(event.date).toLocaleDateString()}</span>
    //                   </div>
    //                   <div className="flex items-center gap-2">
    //                     <MapPin className="w-4 h-4 text-amber-200/50" />
    //                     <span>{event.location}</span>
    //                   </div>
    //                   <div className="flex items-center gap-2">
    //                     <Users className="w-4 h-4 text-amber-200/50" />
    //                     <span>{event.attendees} attendees</span>
    //                   </div>
    //                 </div>
    //                 <button className="w-full px-4 py-2 mt-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-amber-500/20 border border-purple-500/30 hover:border-amber-500/30 text-amber-200 transition-all duration-300 flex items-center justify-center">
    //                   <span>Join Event</span>
    //                   <Wand2 className="w-4 h-4 ml-2 opacity-50 club-hover:opacity-100 club-hover:rotate-12 transition-all" />
    //                 </button>
    //               </div>
    //             </div>
    //           </motion.div>
    //         );
    //       };
    //       return <EventComponent key={event.id} />;
    //     })}
    //   </div>
    // </div>

  );
}

export default App;