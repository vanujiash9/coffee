import BannerImg from "../assets/website/coffee-white.png";
import BgTexture from "../assets/website/coffee-texture.jpg";

import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",  // Ensure the image covers the entire area
  height: "100%",           // Ensure the div takes full height
  width: "100%",            // Ensure the div takes full width
};

const Banner = () => {
    return (
      <>
        <span id="about"></span>
        <div style={bgImage}>
          <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Image section */}
                <div data-aos="zoom-in">
                  <img
                    src={BannerImg}
                    alt="Cà phê banner"
                    className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                  />
                </div>
                {/* Text content section */}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                  <h1
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl font-bold "
                  >
                    Cà Phê Hòa Quyện Hảo Hạng
                  </h1>
                  <p
                    data-aos="fade-up"
                    className="text-sm text-gray-500 tracking-wide leading-5"
                  >
                    Khám phá hương vị cà phê tinh túy của chúng tôi với những
                    sự kết hợp hoàn hảo. Tận hưởng không gian ấm cúng và dịch vụ
                    chu đáo tại quán cà phê của chúng tôi.
                  </p>
  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-5">
                      <div data-aos="fade-up" className="flex items-center gap-3">
                        <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                        <span>Cà Phê Hảo Hạng</span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="flex items-center gap-3"
                      >
                        <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                        <span>Cà Phê Nóng</span>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="flex items-center gap-3"
                      >
                        <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                        <span>Cà Phê Lạnh</span>
                      </div>
                    </div>
                    <div
                      data-aos="slide-left"
                      className="border-l-4 border-primary/50 pl-6 space-y-2"
                    >
                      <h1 className="text-2xl font-semibold font-cursive ">
                        Yêu Thích Trà
                      </h1>
                      <p className="text-sm text-gray-500">
                        Giống như việc viết mã, pha trà hoàn hảo cần có sự kiên nhẫn,
                        chính xác, và một chút đam mê để tạo ra sự kết hợp hương vị
                        thú vị.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

export default Banner;
