import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header with Logo and Title */}
        <div className="flex items-center gap-6 mb-12">
          <Link href="https://www.iiits.ac.in" className="shrink-0">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="IIIT Sri City Logo"
                width={80}
                height={80}
                className="brightness-0 invert"
              />
            </div>
          </Link>

          <h1 className="text-6xl md:text-8xl font-bold text-white">
            ABOUT
            <br />
            IIIT SRI CITY
          </h1>
        </div>

        {/* Content */}
        <div className="max-w-3xl space-y-6 text-lg text-gray-200">
          <p>
            Indian Institute of Information Technology Sri City, Chittoor known as IIIT Sri City (IIITS) 
            was established in 2013 by Ministry of Education, Government of India as an Institute of 
            National importance by an Act of Parliament. IIITS is one among the 20 Institutes across 
            India, focusing on Information Technology education, research and development.
          </p>

          <p>
            The institute is located in Sri City (www.sricity.in) located about 60 KMs from Chennai 
            on the Nellore Highway. The nearest airports are Chennai (70 KMs) and Tirupati (70 KMs).
          </p>

          <p>
            The Institute was setup by the Government of India along with Government of Andhra Pradesh 
            and Industry Partners represented by Sri City Foundation as a Public-Private-Partnership (PPP) 
            institution. The Institute is governed by the Board of Governors consisting of eminent 
            personalities from the Government, Industry and Academia.
          </p>

          <p>
            IIITS offers B. Tech, M.Tech, M.S. and Ph. D. programmes in the areas of Computer Science & 
            Engineering and Electronics & Communications Engineering.
          </p>
        </div>
      </div>
    </div>
  )
}

