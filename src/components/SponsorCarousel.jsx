import { cn } from "./libs/Cn";
import Marquee from "./ui/Marquee";

const sponsors = [
  { id: 1, logo: "https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg" }, // Nike
  { id: 2, logo: "https://www.svgrepo.com/show/303108/google-icon-logo.svg" }, // McDonald's
  {
    id: 3,
    logo: "https://www.svgrepo.com/show/303149/creative-cloud-cc-logo.svg",
  }, // Apple
  { id: 4, logo: "https://www.svgrepo.com/show/303110/apple-black-logo.svg" }, // Google
  {
    id: 5,
    logo: "https://www.svgrepo.com/show/303154/instagram-2016-logo.svg",
  }, // Adidas
  { id: 6, logo: "https://www.svgrepo.com/show/303130/snapchat-logo.svg" }, // Spotify
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
        <h1 className="text-4xl font-bold text-center text-[#F7E290] mb-10 font-mysticalFont">
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
                "h-20 w-20 object-contain transform transition-transform duration-300 hover:scale-110"
              )}
            />
          ))}
        </Marquee>
      </div>
      <div className="flex flex-row justify-center items-center space-x-4">
        <h1 className="text-2xl  text-center text-[#F7E290] mb-10 font-mysticalFont text-underline">
          <a href="/sponsors">More</a>
        </h1>
      </div>
    </>
  );
}
