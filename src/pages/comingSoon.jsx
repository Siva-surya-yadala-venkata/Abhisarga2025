import React, { useState, useEffect } from "react";
import { Timer, Mail, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

function ComingSoon() {
  const [email, setEmail] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set launch date to 30 days from when the component first mounts
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    launchDate.setHours(0, 0, 0, 0); // Reset to midnight for clean counting

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription here
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />

      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Coming Soon
            </h1>
            <p className="text-xl text-gray-300">
              We're working hard to bring you something amazing. Stay tuned!
            </p>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <div className="text-3xl font-bold">{item.value}</div>
                <div className="text-gray-400">{item.label}</div>
              </div>
            ))}
          </div> */}
          {/* 
          <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all backdrop-blur-sm"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-2 px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Notify Me
              </button>
            </div>
          </form> */}

          <div className="flex justify-center space-x-6 pt-8">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/abhisarga", label: "Instagram" },
              { Icon: Linkedin, href: "https://www.linkedin.com/company/abhisarga-iiits", label: "LinkedIn" },
              { Icon: Youtube, href: "https://www.youtube.com/@abhisarga", label: "YouTube" },
              { Icon: Twitter, href: "https://x.com/Abhisarga_iiits", label: "Twitter" },
              { Icon: Mail, href: "mailto:abhisarga@iiits.in", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
