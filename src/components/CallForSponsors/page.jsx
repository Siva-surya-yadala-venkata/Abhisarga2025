"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Diamond,
  Award,
  Coins,
  Medal,
  Trophy,
  Wand2,
} from "lucide-react";
import { SponsorCard } from './sponsor-card';
import {
  FloatingCandles,
  MagicSparkles,
} from "./magical-effects";
import { BenefitsModal } from "./benefits-modal";
import { useState } from "react";
import ParallaxComponent from '../ParllaxComponent'
export default function CallForSponsors() {
  return (
    <>
     <ParallaxComponent
            backgroundImage={"/CallForSponsors.jpg"}
            heading={"Call For Sponsors"}
          />
    <main className="min-h-screen bg-gradient-to-b from-midnight-blue via-deep-purple to-midnight-blue text-white overflow-hidden relative">
      <div className="stars"></div>
      <div className="twinkling"></div>
      {/* <SpookyTree /> */}
      <FloatingCandles />
      <MagicSparkles />
      {/* <FlyingOwl /> */}
      <HauntedSilhouette />
      
      <SponsorTiers />
      <Contact />
    </main>
    </>
  );
}

function HauntedSilhouette() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-48 pointer-events-none">
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="relative h-48">
          {/* Haunted Castle */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-80"
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute bottom-0 w-full h-3/4 bg-black/30">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-20 bg-black/30">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-black/30 rotate-45" />
                </div>
                <div className="absolute top-1/4 left-4 w-8 h-12 bg-amber-500/20 rounded-t-lg animate-flicker" />
                <div className="absolute top-1/4 right-4 w-8 h-12 bg-amber-500/20 rounded-t-lg animate-flicker delay-75" />
              </div>
            </div>
          </motion.div>

          {/* Magical Trees */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0"
              style={{
                left: `${10 + i * 18}%`,
                height: `${120 + 0.5 * 60}px`,
                width: "2px",
                background: "rgba(0,0,0,0.3)",
              }}
              animate={{
                skew: [0, 2, 0, -2, 0],
                height: [`${120 + 0.5 * 60}px`, `${130 + 0.5 * 60}px`],
              }}
              transition={{
                duration: 3 + 0.5 * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <motion.div
                className="absolute -top-8 -left-12 w-24 h-24 rounded-full bg-black/20"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2 + 0.5 * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}

          {/* Flying Bats */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`bat-${i}`}
              className="absolute"
              initial={{
                x: -100,
                y: 0.5 * 200,
              }}
              animate={{
                x: ["-100%", "100vw"],
                y: [0.5 * 200, 0.5 * 200],
              }}
              transition={{
                duration: 10 + 0.5 * 5,
                repeat: Infinity,
                delay: i * 2,
              }}
            >
              <span className="text-2xl">🦇</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SponsorTiers() {
  const tiers = [
    {
      name: "Title Sponsor",
      amount: "₹12 Lakhs",
      icon: Crown,
      description:
        "The Grand Sorcerer tier, commanding the highest magical influence",
    },
    {
      name: "Diamond Sponsor",
      amount: "₹8 Lakhs",
      icon: Diamond,
      description: "The Archmage tier, wielding powerful magical presence",
    },
    {
      name: "Platinum Sponsor",
      amount: "₹5 Lakhs",
      icon: Award,
      description: "The Master Wizard tier, casting spells of excellence",
    },
    {
      name: "Gold Sponsor",
      amount: "₹3 Lakhs",
      icon: Coins,
      description: "The Enchanter tier, weaving golden opportunities",
    },
    {
      name: "Silver Sponsor",
      amount: "₹2 Lakhs",
      icon: Medal,
      description: "The Spellcaster tier, channeling mystical energy",
    },
    {
      name: "Bronze Sponsor",
      amount: "₹1 Lakh",
      icon: Trophy,
      description: "The Apprentice tier, beginning the magical journey",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [tier, setTier] = useState("");

  return (
    <section id="sponsor-tiers" className="py-20 px-4 relative">
      {isOpen && (
        <BenefitsModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          tier={tier.name}
        />
      )}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold magical-text mb-6">
              Magical Sponsorship Tiers
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose your magical tier and join us in creating an unforgettable
              experience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <SponsorCard
              onopen={() => {
                setIsOpen(true);
                setTier(tier);
              }}
              key={tier.name}
              tier={tier}
              index={index}
            />
          ))}
        </div>

        <motion.div
  className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  {[
    "Food & Beverage Partner",
    "Banking Partner",
    "Travel Partner",
    "Delivery Partner",
    "Educational Partner",
    "Credential Partner",
    "Crypto Partner",
    "Media & Digital Partner",
    "Event Partner",
  ].map((partner) => (
    <motion.div
      key={partner}
      className="bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-105 relative group"
      whileHover={{ scale: 1.1 }}
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Partner Text */}
      <span className="relative z-10 text-yellow-400 font-semibold text-lg tracking-wide">
        {partner}
      </span>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
}



export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Contact the Wizards
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to join the magical journey? Our wizards are waiting to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ContactInfo
            title="Convenors"
            contacts={[
              { name: "Yashwanth S", phone: "+916369096042" },
              { name: "Charvi Palem", phone: "+917671075067" },
              { name: "Suyash Tiwari", phone: "+919755000981" },
            ]}
          />
          <ContactInfo
            title="Sponsorship Team"
            contacts={[
              { name: "M Shree Raj", phone: "+918143272388" },
              { name: "Maithreyan", phone: "+917010497899" },
              { name: "Kannan M", phone: "+919843323497" },
              { name: "Abhinav Mars", phone: "+917569833006" },
            ]}
          />
        </div>

        <motion.div
          className="flex flex-col items-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="mailto:abhisarga.invitations@iiits.in"
            className="group inline-flex items-center text-yellow-400 hover:underline text-lg"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center"
            >
              <Wand2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              abhisarga.invitations@iiits.in
            </motion.span>
          </a>

        
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfo({ title, contacts }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg border border-yellow-500/20 backdrop-blur-sm transform transition-all duration-300 hover:border-yellow-500/50"
    >
      <h3 className="text-2xl font-bold mb-6 text-yellow-400">{title}</h3>
      <ul className="space-y-4">
        {contacts.map((contact, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-3"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Wand2 className="w-4 h-4 text-yellow-400" />
            <div>
              <span className="font-semibold block text-white">{contact.name}</span>
              <span className="text-gray-400">{contact.phone}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}



// 'use client'

// import '../globals.css'
// import { motion } from 'framer-motion'
// import { Crown, Diamond, Award, Coins, Medal, Trophy, Wand2 } from 'lucide-react'
// import { SponsorCard } from '../../components/sponsor-card'
// import { FloatingCandles, MagicSparkles, FlyingOwl, MagicPotions } from '../../components/magical-effects'
// import { SpookyTree } from '../../components/SpookyTree'

// export default function CallForSponsors() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-midnight-blue via-deep-purple to-midnight-blue text-white overflow-hidden relative">
//       <div className="stars"></div>
//       <div className="twinkling"></div>
//       {/* <SpookyTree /> */}
//       <FloatingCandles />
//       <MagicSparkles />
//       <FlyingOwl />
//       <HauntedSilhouette />
//       <Header />
//       <Hero />
//       <SponsorTiers />
//       <Contact />
//     </main>
//   )
// }

// function HauntedSilhouette() {
//   return (
//     <div className="fixed bottom-0 left-0 w-full h-48 pointer-events-none">
//       <motion.div
//         className="absolute bottom-0 left-0 w-full"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//       >
//         <div className="relative h-48">
//           {/* Haunted Castle */}
//           <motion.div
//             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-80"
//             animate={{
//               scale: [1, 1.02, 1],
//               rotate: [0, 1, 0]
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut"
//             }}
//           >
//             <div className="relative w-full h-full">
//               <div className="absolute bottom-0 w-full h-3/4 bg-black/30">
//                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-20 bg-black/30">
//                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-black/30 rotate-45" />
//                 </div>
//                 <div className="absolute top-1/4 left-4 w-8 h-12 bg-amber-500/20 rounded-t-lg animate-flicker" />
//                 <div className="absolute top-1/4 right-4 w-8 h-12 bg-amber-500/20 rounded-t-lg animate-flicker delay-75" />
//               </div>
//             </div>
//           </motion.div>

//           {/* Magical Trees */}
//           {[...Array(6)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute bottom-0"
//               style={{
//                 left: `${10 + i * 18}%`,
//                 height: `${120 + 0.5 * 60}px`,
//                 width: '2px',
//                 background: 'rgba(0,0,0,0.3)',
//               }}
//               animate={{
//                 skew: [0, 2, 0, -2, 0],
//                 height: [`${120 + 0.5 * 60}px`, `${130 + 0.5 * 60}px`],
//               }}
//               transition={{
//                 duration: 3 + 0.5 * 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: i * 0.3
//               }}
//             >
//               <motion.div
//                 className="absolute -top-8 -left-12 w-24 h-24 rounded-full bg-black/20"
//                 animate={{
//                   scale: [1, 1.05, 1],
//                 }}
//                 transition={{
//                   duration: 2 + 0.5 * 2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             </motion.div>
//           ))}

//           {/* Flying Bats */}
//           {[...Array(4)].map((_, i) => (
//             <motion.div
//               key={`bat-${i}`}
//               className="absolute"
//               initial={{
//                 x: -100,
//                 y: 0.5 * 200,
//               }}
//               animate={{
//                 x: ['-100%', '100vw'],
//                 y: [0.5 * 200, 0.5 * 200],
//               }}
//               transition={{
//                 duration: 10 + 0.5 * 5,
//                 repeat: Infinity,
//                 delay: i * 2,
//               }}
//             >
//               <span className="text-2xl">🦇</span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// function Header() {
//   return (
//     <header className="bg-deep-purple/50 backdrop-blur-md py-4 px-6 fixed w-full z-10">
//       <nav className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
//         <h1 className="text-2xl font-bold magical-text mb-4 sm:mb-0">
//           <motion.span
//             className="inline-block"
//           >
//             Abhisarga 2025
//           </motion.span>
//         </h1>
//         <ul className="flex space-x-6">
//           <li>
//             <motion.a
//               href="#sponsor-tiers"
//               className="hover:text-shimmering-gold transition-colors flex items-center"
//               whileHover={{ scale: 1.1 }}
//             >
//               <Crown className="w-4 h-4 mr-1" />
//               Sponsor Tiers
//             </motion.a>
//           </li>
//           <li>
//             <motion.a
//               href="#contact"
//               className="hover:text-shimmering-gold transition-colors flex items-center"
//               whileHover={{ scale: 1.1 }}
//             >
//               <Wand2 className="w-4 h-4 mr-1" />
//               Contact
//             </motion.a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

// function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-radial from-deep-purple/20 to-transparent" />
//       </div>
//       <motion.div
//         className="text-center z-10 max-w-4xl mx-auto"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >

//         <motion.div
//           className="mb-8"
//           animate={{
//             scale: [1, 1.05, 1],
//             rotate: [0, 1, -1, 0],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           {/* <Image
//             src="/hogwarts-crest.png"
//             alt="Magical Crest"
//             width={150}
//             height={150}
//             className="mx-auto"
//           /> */}
//         </motion.div>
//         <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 magical-text leading-tight">
//           Unlock the Magic of Sponsorship
//         </h2>
//         <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
//           Join us in creating an enchanting experience at Abhisarga 2025, where technology meets magic
//         </p>
//         <motion.a
//           href="#sponsor-tiers"
//           className="bg-gradient-to-r from-amber-400 to-amber-600 text-midnight-blue px-8 py-4 rounded-full font-bold hover:from-amber-500 hover:to-amber-700 transition-all duration-300 inline-flex items-center text-lg group relative overflow-hidden"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <span className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           <Crown className="mr-2 relative z-10" />
//           <span className="relative z-10">Explore Sponsorship Tiers</span>
//         </motion.a>
//       </motion.div>
//       <MagicPotions />
//     </section>
//   )
// }

// function SponsorTiers() {
//   const tiers = [
//     {
//       name: "Title Sponsor",
//       amount: "₹12 Lakhs",
//       icon: Crown,
//       description: "The Grand Sorcerer tier, commanding the highest magical influence"
//     },
//     {
//       name: "Diamond Sponsor",
//       amount: "₹8 Lakhs",
//       icon: Diamond,
//       description: "The Archmage tier, wielding powerful magical presence"
//     },
//     {
//       name: "Platinum Sponsor",
//       amount: "₹5 Lakhs",
//       icon: Award,
//       description: "The Master Wizard tier, casting spells of excellence"
//     },
//     {
//       name: "Gold Sponsor",
//       amount: "₹3 Lakhs",
//       icon: Coins,
//       description: "The Potion Master tier, brewing up brilliance"
//     },
//     {
//       name: "Silver Sponsor",
//       amount: "₹1.5 Lakhs",
//       icon: Medal,
//       description: "The Spellcaster tier, enchanting the event with their support"
//     },
//     {
//       name: "Bronze Sponsor",
//       amount: "₹50,000",
//       icon: Trophy,
//       description: "The Sorcerer tier, casting their spell of support"
//     },
//   ]

//   return (
//     <section id="sponsor-tiers" className="py-20 bg-midnight-blue">
//       <div className="text-center text-white mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold magical-text">Sponsorship Tiers</h2>
//         <p className="text-lg max-w-3xl mx-auto">Become a part of the magical journey with Abhisarga 2025</p>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {tiers.map((tier, index) => (
//           <SponsorCard
//             key={index}
//             name={tier.name}
//             amount={tier.amount}
//             icon={tier.icon}
//             description={tier.description}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// function Contact() {
//   return (
//     <section id="contact" className="bg-deep-purple py-20">
//       <div className="max-w-4xl mx-auto text-center text-white">
//         <h2 className="text-3xl sm:text-4xl font-bold magical-text mb-8">Get in Touch</h2>
//         <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-12">For more information on sponsorship or any inquiries, feel free to reach out!</p>
//         <motion.a
//           href="mailto:abhisarga@iiits.ac.in"
//           className="bg-gradient-to-r from-amber-400 to-amber-600 text-midnight-blue px-8 py-4 rounded-full font-bold hover:from-amber-500 hover:to-amber-700 transition-all duration-300"
//           whileHover={{ scale: 1.05 }}
//         >
//           <Wand2 className="mr-2 inline-block" />
//           Contact Us
//         </motion.a>
//       </div>
//     </section>
//   )
// }
