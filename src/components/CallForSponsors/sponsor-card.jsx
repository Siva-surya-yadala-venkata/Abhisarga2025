import { useState } from 'react';
import { motion } from 'framer-motion';
import { BenefitsModal } from './benefits-modal';

export function SponsorCard({ tier, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Icon = tier.icon;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <motion.div
          className="absolute -right-20 -top-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-yellow-400">{tier.name}</h3>
          <Icon className="w-8 h-8 text-yellow-400" />
        </div>
        <p className="text-xl text-gray-300 mb-6">{tier.amount}</p>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 py-2 rounded-md border border-yellow-500/50 transition-all duration-300"
        >
          Learn More
        </motion.button>
      </motion.div>

      <BenefitsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tier={tier.name}
      />
    </>
  );
}
