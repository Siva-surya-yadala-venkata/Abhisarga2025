"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Wand2, X } from "lucide-react";

const benefits = [
  "Link to your website on our fest's website",
  "Logo on fest's social media handles",
  "Branding through online media partners",
  "Formal event sponsors",
  "Items through goodies",
  "On-Campus branding",
  "Backdrop on stages",
  "Online meetings",
  "Access to participants' database",
  "Feature in after-movie",
  "Standees",
  "Main stage/gate branding",
  "Promotional events",
  "Head/CEO to be honored at stage",
  "Logos on certificates/invitation & merch",
  "1-on-1 meetings",
  "Multiplicity exposure",
];

const tierLevels = {
  "Title Sponsor": 17,
  "Diamond Sponsor": 13,
  "Platinum Sponsor": 10,
  "Gold Sponsor": 7,
  "Silver Sponsor": 4,
  "Bronze Sponsor": 2,
};

export default function BenefitsModal({ isOpen, onClose, tier }) {
  const benefitCount = tierLevels[tier] || 0;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative max-w-lg w-full rounded-2xl overflow-hidden
            bg-gradient-to-br from-gray-900 via-black to-gray-900
            backdrop-blur-xl border border-gray-700 shadow-lg"
        >
          {/* Title */}
          <div className="relative p-8">
            <motion.h2
              className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent 
                bg-gradient-to-r from-yellow-400 to-yellow-600"
            >
              {tier} Benefits
            </motion.h2>

            {/* Benefits List */}
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300
                    backdrop-blur-md border border-gray-700
                    ${index < benefitCount ? "" : "bg-gray-800 opacity-40"}`}
                >
                  {index < benefitCount ? (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: index * 0.05 + 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full" />
                      <Wand2 className="w-6 h-6 text-yellow-400 relative" />
                    </motion.div>
                  ) : (
                    <div className="w-6 h-6" />
                  )}
                  <span
                    className={`font-medium ${
                      index < benefitCount ? "text-yellow-400" : "text-gray-400"
                    }`}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Close Button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-6 right-6 p-2 rounded-full 
                bg-gray-800 border border-gray-700 text-yellow-400
                hover:bg-gray-700 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
