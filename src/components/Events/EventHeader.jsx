import React, { useState } from 'react';
import { Share2, Heart } from 'lucide-react';
import { Toast } from './Toast';
import { shareEvent } from '/src/utils/share.js';

export function EventHeader() {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const message = await shareEvent(
      'Tech Innovation Summit 2024',
      'Join us for the premier tech innovation event of the year!',
      window.location.href
    );
    
    if (message) {
      setToastMessage(message);
      setShowToast(true);
    }
  };

  return (
    <>
      <div className="flex justify-between items-start">
        <div>
          {/* <span className="px-6 py-2 bg-[#3e3e8f] text-[#F7E290] rounded-full text-lg font-medium shadow-lg">
            CONFERENCE
          </span> */}
          <h1 className="mt-4 text-4xl font-extrabold text-[#F7E290]">
            Tech Innovation Summit 2024
          </h1>
        </div>
        <div className="flex gap-4">
          <button 
            className="p-3 text-gray-500 hover:text-white rounded-full transition-all duration-300 shadow-md transform hover:scale-105"
            onClick={handleShare}
            aria-label="Share event"
          >
            <Share2 className="w-7 h-7" />
          </button>
        </div>
      </div>
      
      <Toast 
        message={toastMessage} 
        isVisible={showToast} 
        onHide={() => setShowToast(false)} 
      />
    </>
  );
}
