import { useEffect , useRef } from "react";

function HeroComponent() {
    const videoRef = useRef(null);
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY; // Get current scroll position
        const rotationDegree = (scrollPosition * 0.5) % 360; // Rotation speed and degree
    
        if (videoRef.current) {
          // Combine transformations in one `transform` string
          videoRef.current.style.transform = `rotateX(${rotationDegree}deg)`;
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      // Cleanup listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
  
  return (
    <div className="relative h-screen">
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient z-1"
        style={{
          background: "linear-gradient(to bottom,transparent,  #24222d 130%)",
          backgroundPosition: "bottom",
        }}
      />

      <video
        ref={videoRef}
        src="/assets/homePageBG.mp4"
        muted
        playsInline
        className="h-full w-full object-cover"
        autoPlay
        loop
      >
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="text-[#f5e0a9] absolute top-[30vh] left-[54vw] -translate-x-1/2 -translate-y-1/2 lg:top-[32vh] lg:left-[51vw] rounded-full z-20">
        <div className="flex flex-col items-start">
          <div className="flex items-center flex-col mt-[20px] translate-y-[20px]">
            <img src="./logo.png" className="w-[50px] height-auto"/>
            <img src="./Abhisarga_1.png" className="w-[350px] height-auto"/>
            <img src="./Abhisarga_2.png" className="w-[70px] height-auto"/>
            {/* <p className="text-[36px] lg:text-[40px] font-cinzelDecorative font-bold">
              ABHISARGA
            </p> */}
            {/* <p className="text-white font-serif -translate-y-[5px]">2025</p> */}
          </div>
          {/* <button className="text-black p-2 w-[160px] lg:text-[20px] mt-[32px] font-serif rounded-[30px] bg-[#f5e0a9]">
            Register Now
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;