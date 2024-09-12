import Background from "../assets/website/photo-1540380968028-950d9ea1507e.avif";

const Navbar = () => {
  return (
    <div className="relative min-h-[550px] sm:min-h-[600px] flex justify-center items-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Background} type="video/mp4" />
      </video>
      <div className="container pb-8 sm:pb-0 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Text content section */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <div className="flex flex-col justify-center">
              
              
            </div>
          </div>
          {/* Image content section */}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
