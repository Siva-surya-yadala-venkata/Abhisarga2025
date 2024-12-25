import React from 'react';
import { EventHero } from '../components/Events/EventHero';
import { EventHeader } from '../components/Events/EventHeader';
import { EventDetails } from '../components/Events/EventDetails';
import { EventHighlights } from '../components/Events/EventHighlights';
import Navbar from '../components/Navbar';

function Event() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <EventHero />

      {/* Event Details Card */}
      <div className="max-w-4xl mx-auto -mt-24 relative px-4">
        <div className="bg-[#24222d] rounded-lg border border-gray-800 shadow-xl p-6 md:p-8">
          <EventHeader />
          <EventDetails />

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">About This Event</h2>
            <p className="text-gray-300 leading-relaxed">
              Join us for the premier tech innovation event of the year! The Tech Innovation Summit brings together industry leaders, innovators, and tech enthusiasts for a day of inspiring talks, workshops, and networking opportunities. Discover the latest trends in AI, blockchain, and sustainable technology while connecting with like-minded professionals.
            </p>
          </div>

          {/* <EventHighlights /> */}

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <button className="bg-[#F7E270] text-[#24222d] px-8 py-3 rounded-lg font-semibold hover:bg-[#F7E260] transition-colors">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;