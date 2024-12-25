import React from 'react';

export function EventHero() {
  return (
    <div className="relative h-[30vh] w-full">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7488367.jpg&f=1&nofb=1&ipt=472f88043caf2c2ad7234717d3bbb00ab744b54752a6932260837a411fc2795b&ipo=images"
        alt="Event cover"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#24222d] bg-opacity-70" />
    </div>
  );
}