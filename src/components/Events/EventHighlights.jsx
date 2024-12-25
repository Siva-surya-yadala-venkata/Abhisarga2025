import React from 'react';

export function EventHighlights() {
  const highlights = [
    {
      title: 'Keynote Speakers',
      description: 'Industry experts sharing insights on future tech trends',
    },
    {
      title: 'Interactive Workshops',
      description: 'Hands-on sessions with cutting-edge technologies',
    },
    {
      title: 'Networking',
      description: 'Connect with industry professionals and innovators',
    },
  ];

  return (
    <div className="mt-8 grid md:grid-cols-3 gap-6">
      {highlights.map((highlight) => (
        <div key={highlight.title} className="bg-[#131433] p-4 rounded-lg">
          <h3 className="font-semibold text-white">{highlight.title}</h3>
          <p className="text-gray-400 text-sm mt-2">{highlight.description}</p>
        </div>
      ))}
    </div>
  );
}