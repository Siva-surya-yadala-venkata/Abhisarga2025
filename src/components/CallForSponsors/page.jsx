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
  MagicSparkles,
} from "./magical-effects";
import { BenefitsModal } from "./benefits-modal";
import { useState } from "react";
import SpotlightCard from '../ui/SpotLightCard'
import ParallaxComponent from '../ParllaxComponent'
export default function CallForSponsors() {
  return (
    <>
     <ParallaxComponent
            backgroundImage={"/CallForSponsors.jpeg"}
            heading={"Call For Sponsors"}
          />
    <main 
    className="min-h-screen bg-gradient-to-b from-midnight-blue via-deep-purple to-midnight-blue text-white overflow-hidden relative"
    style={{
      background: `
  linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
      url('CallForSponsorBg.jpeg') center/cover no-repeat fixed,
      radial-gradient(circle at top, #24222d, #131433)
    `,
    }}
    >
      <div className="stars"></div>
      <div className="twinkling"></div>
      <MagicSparkles />
      <SponsorTiers />
      <Contact />
    </main>
    </>
  );
}



function SponsorTiers() {
  const tiers = [
    {
      name: "Title Sponsor",
      amount: "₹12 Lakhs",
      icon: Crown,
      description: "The Grand Sorcerer tier, commanding the highest magical influence",
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
    <section id="sponsor-tiers" className="py-20 px-4 relative bg-black text-gold"
    style={{
      background: `
  linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
      url('CallForSponsorMiddle.jpeg') center/cover no-repeat fixed,
      radial-gradient(circle at top, #24222d, #131433)
    `,
    }}
    >
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold magical-text mb-6 text-gold">
              Sponsorship Tiers
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose your tier and join us in creating an unforgettable experience.
            </p>
          </motion.div>
        </div>
        <div className="mt-12 mb-12 text-center">
          <a
            href="/Final_Draft_Sponsorship.pdf"
            download
            className="bg-gold text-white  px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors duration-300"
          >
             Brochure
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <SpotlightCard 
        className="relative bg-gray-900 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden group shadow-lg"
        key={tier} 
      >

            <SponsorCard
              onopen={() => {
                setIsOpen(true);
                setTier(tier);
              }}
              key={tier.name}
              tier={tier}
              index={index}
            />
            </SpotlightCard>
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
              <div 
              className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
              />
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
              abhisarga.sponsorships@iiits.in
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

