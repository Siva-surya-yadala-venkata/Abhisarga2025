import { cn } from "./libs/Cn";
import Marquee from "./ui/Marquee";

const sponsors = [
    { id: 1, logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" }, // Nike
    { id: 2, logo: "/google.svg" }, // McDonald's
    { id: 3, logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Apple_logo_black.svg" }, // Apple
    { id: 4, logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Google_2015_logo.svg" }, // Google
    { id: 5, logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adidas_Logo.svg" }, // Adidas
    { id: 6, logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Spotify_logo_with_text.svg" }, // Spotify
  ];
  
const firstRow = sponsors.slice(0, sponsors.length);

export default function SponsorCarousel() {
  return (
    <>
      <div className="flex flex-row justify-center items-center space-x-4">
        <img
          src="/assets/header-flourish.svg"
          alt=""
          className="h-3 transform scale-x-[-1] mb-10"
        />
        <h1
          className="text-4xl font-bold text-center text-[#F7E290] mb-10"
          style={{ fontFamily: "MedievalSharp, serif" }}
        >
          Sponsors
        </h1>
        <img src="/assets/header-flourish.svg" alt="" className="h-3 mb-10" />
      </div>

    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((sponsor) => (
          <img
            key={sponsor.id}
            src={sponsor.logo}
            alt={`Sponsor ${sponsor.id}`}
            className={cn(
              "h-24 w-30 object-contain transform transition-transform duration-300 hover:scale-110"
            )}
          />
        ))}
      </Marquee>
     </div>
     <div className="flex flex-row justify-center items-center space-x-4">
        <h1
          className="text-2xl  text-center text-[#F7E290] mb-10"
          style={{ fontFamily: "MedievalSharp, serif" , textDecoration:"underlined" }}
        >
          <a href="/sponsors">More</a>
        </h1>
      </div>
   
</>
  );
}
