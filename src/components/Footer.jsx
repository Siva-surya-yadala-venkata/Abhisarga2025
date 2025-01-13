function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-[#f5e0a9] py-6">
      <div className="container mx-auto px-6 flex flex-col items-center justify-between md:flex-row">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm lg:text-base font-serif">
            © 2025 IIITS Abhisarga. All rights reserved.
          </p>
          <p className="text-xs lg:text-sm font-serif mt-2">
            Designed with ❤️ by IIITS Team
          </p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5e0a9] hover:text-white transition duration-200"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5e0a9] hover:text-white transition duration-200"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f5e0a9] hover:text-white transition duration-200"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;