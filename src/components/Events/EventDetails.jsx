import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function EventDetails() {
  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-3 text-gray-300">
        <Calendar className="w-5 h-5" />
        <span>March 15, 2024</span>
      </div>
      <div className="flex items-center gap-3 text-gray-300">
        <Clock className="w-5 h-5" />
        <span>9:00 AM - 5:00 PM PST</span>
      </div>
      <div className="flex items-center gap-3 text-gray-300">
        <MapPin className="w-5 h-5" />
        <span>Innovation Center, 123 Tech Boulevard, San Francisco, CA</span>
      </div>
    </div>
  );
}