function SplashScreen() {
    return (
      <div
        className="relative flex items-center justify-center h-screen bg-black bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/homePageBG.jpeg')`,
        }}
      >
        {/* Backdrop overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60  z-0"></div>
  
        {/* Video Background */}
        <video
          className="absolute z-0 min-w-full min-h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="" type="video/mp4" />
        </video>
  
        {/* Content */}
        <div className="absolute z-10 flex flex-col items-center justify-center">
          <img className="w-1/2" src="/Abhisarga.png" alt="Logo" />
        </div>
      </div>
    );
  }
  
  export default SplashScreen;
  