"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, Moon, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import AccomodationCard from "./AccomodationCard/AccomodationCard";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.png";
import ParallaxComponent from "./ParllaxComponent";
export default function AccommodationPage() {
  const [stars, setStars] = useState([]);
  const [hover, setHover] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2 });

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardsData = [
    {
      title: "BH - 1",
      details: [
        "Details to be announced soon",
      ],
      price: "₹50/-",
      gradient: "bg-gradient-to-r from-orange-500 to-yellow-500",
      image: bg1,
    },
    {
      title: "BH - 2",
      details: [
        "Details to be announced soon",
      ],
      price: "₹50/-",
      gradient: "bg-gradient-to-r from-green-500 to-teal-500",
      image: bg2,
    },
    {
      title: "BH - 3",
      details: [
        "Details to be announced soon",
      ],
      price: "₹50/-",
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-500",
      image: bg1,
    },
  ];

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
    linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url('AccomodationMain.jpeg') center/cover no-repeat fixed,
        radial-gradient(circle at top, #24222d, #131433)
      `,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={ref}
    >
      <ParallaxComponent
        backgroundImage={"/AccomodationBg.jpg"}
        heading={"Accomodations"}
      />
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-2xl rounded-full animate-float" />
        <div className="absolute bottom-32 right-20 w-60 h-60 bg-gradient-to-r from-blue-500 to-teal-500 opacity-30 blur-2xl rounded-full animate-float-delayed" />

        {/* Stars */}
        <div className="stars-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                animation: `twinkle ${
                  hover ? "3s" : star.animationDuration
                } ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="h-[40vh] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center space-y-4 px-4">
            <motion.div
              className="flex items-center justify-center gap-2"
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Sparkles className="w-6 h-6" style={{ color: "#F7E290" }} />
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
                We believe in making your experience at Abhisarga seamless and
                memorable!
              </p>
              <Sparkles className="w-6 h-6" style={{ color: "#F7E290" }} />
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <main className="main-container mx-auto py-12 space-y-16">
          {/* Accommodation Details */}
          <img src="/divider.png" className="mx-auto block" alt="" />

          <motion.section
            className="flex flex-wrap items-center justify-center gap-8"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="p-6 bg-[#24222d]/50 backdrop-blur-sm border border-[#F7E290]/20 rounded-lg w-[450px] h-[300px] flex flex-col justify-between mr-5 ml-5">
              <div className="flex items-center gap-2 mb-4">
                <Moon className="w-6 h-6" style={{ color: "#F7E290" }} />
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: "#F7E290" }}
                >
                  Stay Details
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed flex-grow">
                To ensure you feel at home, the college will take care of all
                your accommodation needs. Relax, unwind, and enjoy the fest
                without any worries. Our magical accommodations provide a
                comfortable and secure environment for all participants.
              </p>
            </div>

            <div className="p-6 bg-[#24222d]/50 backdrop-blur-sm border border-[#F7E290]/20 rounded-lg w-[450px] h-[300px] flex flex-col justify-between mr-5 ml-5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6" style={{ color: "#F7E290" }} />
                <h2
                  className="text-2xl font-semibold"
                  style={{ color: "#F7E290" }}
                >
                  Amenities
                </h2>
              </div>
              <ul className="text-gray-300 space-y-2 flex-grow">
                <li>• 24/7 Security</li>
                <li>• Clean and comfortable rooms</li>
                <li>• Basic amenities provided</li>
                <li>• Common areas for socializing</li>
                <li>• Near to event venues</li>
              </ul>
            </div>
          </motion.section>

          <div className="w-full flex flex-wrap justify-center items-center flex-grow">
            {cardsData.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap justify-center items-center m-5 w-[400px]"
              >
                <AccomodationCard
                  title={card.title}
                  details={card.details}
                  price={card.price}
                  gradient={card.gradient}
                  image={card.image}
                />
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <div
            className="min-h-screen p-4 xl:p-16 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundSize: "contain",
            }}
          >
            <div className="grid p-4 xl:p-8 md:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
              {/* Contact Information Section */}
              <motion.section
                className="space-y-8 mr-0 md:mr-8"
                initial="hidden"
                animate="visible"
              >
                <h2
                  className="text-3xl font-bold text-center"
                  style={{ color: "#F7E290" }}
                >
                  Contact Information
                </h2>
                <div className="grid gap-6">
                  {[
                    {
                      icon: Phone,
                      title: "Phone",
                      content: "+91 xxxxxxxxxx",
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: "abhisarga@iiits.in",
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      content: "IIIT Sri City, 630 Gnan Marg, Sri City, Andhra Pradesh 517646",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="p-6 bg-[#24222d]/50 backdrop-blur-sm border border-[#F7E290]/20 rounded-lg">
                        <div className="flex flex-col items-center gap-3 justify-center text-center">
                          <item.icon
                            className="w-8 h-8"
                            style={{ color: "#F7E290" }}
                          />
                          <h3
                            className="text-xl font-semibold"
                            style={{ color: "#F7E290" }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-gray-300">{item.content}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Map Section */}
              <motion.section
                className="space-y-8 h-full"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <h2
                  className="text-3xl font-bold text-center"
                  style={{ color: "#F7E290" }}
                >
                  How to Reach
                </h2>
                <div className="aspect-video w-full h-[calc(100%-5rem)] rounded-lg overflow-hidden border border-[#F7E290]/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31028.893224027328!2d80.0227328!3d13.5593984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d773f1e0f8721%3A0xadb0842ffc2719e4!2sIndian%20Institute%20of%20Information%20Technology%2C%20Sri%20City%2C%20Chittoor!5e0!3m2!1sen!2sin!4v1737188121631!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.section>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
