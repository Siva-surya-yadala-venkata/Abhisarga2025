import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wand2, CalendarDays, MapPin, Users, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: 'Quidditch' | 'Feast' | 'Class' | 'Tournament';
  house: 'Gryffindor' | 'Slytherin' | 'Hufflepuff' | 'Ravenclaw';
  attendees: number;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Triwizard Tournament Opening Ceremony",
    date: "2024-04-15",
    location: "Great Hall",
    type: "Tournament",
    house: "Gryffindor",
    attendees: 500,
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&q=80&w=2069"
  },
  {
    id: 2,
    title: "House Quidditch Finals",
    date: "2024-05-01",
    location: "Quidditch Pitch",
    type: "Quidditch",
    house: "Slytherin",
    attendees: 300,
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 3,
    title: "Halloween Feast",
    date: "2024-10-31",
    location: "Great Hall",
    type: "Feast",
    house: "Hufflepuff",
    attendees: 400,
    image: "https://images.unsplash.com/photo-1509024644558-2f56ce76c490?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 4,
    title: "Advanced Defense Against Dark Arts",
    date: "2024-06-15",
    location: "Defense Classroom",
    type: "Class",
    house: "Ravenclaw",
    attendees: 30,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 5,
    title: "Yule Ball",
    date: "2024-12-25",
    location: "Great Hall",
    type: "Feast",
    house: "Gryffindor",
    attendees: 450,
    image: "https://images.unsplash.com/photo-1461696114087-397271a7aedc?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 6,
    title: "Potions Championship",
    date: "2024-09-01",
    location: "Dungeons",
    type: "Tournament",
    house: "Slytherin",
    attendees: 100,
    image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?auto=format&fit=crop&q=80&w=2070"
  }
];

const houseColors = {
  Gryffindor: "bg-gradient-to-r from-purple-900/40 to-amber-500/40 text-amber-200 border-amber-500/50",
  Slytherin: "bg-gradient-to-r from-purple-900/40 to-emerald-500/40 text-emerald-200 border-emerald-500/50",
  Hufflepuff: "bg-gradient-to-r from-purple-900/40 to-yellow-500/40 text-yellow-200 border-yellow-500/50",
  Ravenclaw: "bg-gradient-to-r from-purple-900/40 to-blue-500/40 text-blue-200 border-blue-500/50",
};

function App() {
  const [selectedHouse, setSelectedHouse] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter(event => {
    const matchesHouse = selectedHouse ? event.house === selectedHouse : true;
    const matchesType = selectedType ? event.type === selectedType : true;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesHouse && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#1a0b2e]">
      <div className="relative h-[60vh] mb-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598153346810-860daa814c4b?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-bl/70 backdrop-blur-sm" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold mb-4 font-magical bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-purple-400"
          >
            Events
          </motion.h1>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
          <div className="grid grid-cols-3 gap-4 backdrop-blur-xl bg-purple-950/30 p-4 rounded-xl border border-purple-500/20 shadow-lg shadow-purple-500/10">
            <select
              value={selectedHouse}
              onChange={(e) => setSelectedHouse(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-purple-950/30 border border-purple-500/20 text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              <option value="">Filter by House</option>
              <option value="Gryffindor">Gryffindor</option>
              <option value="Slytherin">Slytherin</option>
              <option value="Hufflepuff">Hufflepuff</option>
              <option value="Ravenclaw">Ravenclaw</option>
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-purple-950/30 border border-purple-500/20 text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              <option value="">Filter by Type</option>
              <option value="Quidditch">Quidditch</option>
              <option value="Feast">Feast</option>
              <option value="Class">Class</option>
              <option value="Tournament">Tournament</option>
            </select>

            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-purple-950/30 border border-purple-500/20 text-amber-200 placeholder-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={event.id}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="overflow-hidden bg-purple-950/30 border border-purple-500/20 rounded-xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500">
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${houseColors[event.house]} border`}>
                        {event.house}
                      </span>
                    </div>
                  </div>
                  <div className="card-details ">
                    <h2 className="text-xl font-semibold text-amber-200 group-hover:text-amber-300 transition-colors">
                      {event.title}
                    </h2>
                    <div className="space-y-2 text-purple-200/70">
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
                    <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-amber-500/20 border border-purple-500/30 hover:border-amber-500/30 text-amber-200 transition-all duration-300 group flex items-center justify-center">
                      <span>Join Event</span>
                      <Wand2 className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-amber-200/50" />
            <p className="text-xl text-purple-200/70">No magical events found. Try different filters!</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;