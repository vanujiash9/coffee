import { useState } from "react";
import Hero from "./Hero";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Footer from "../header/Footer";
import Caresoult from "./caresoult";
import News from "./News";
import Info from "./Info";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div
      className={
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }
    >
      {/* Dark Mode Toggle */}
      <div className="fixed bottom-4 right-4 z-30">
        <button
          aria-label={
            isDarkMode ? "Switch to light mode" : "Switch to dark mode"
          }
          className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? "Chế Độ Sáng" : "Chế Độ Tối"}
        </button>
      </div>

      {/* Hero Component */}
      <Hero />
      <Caresoult />

      {/* Main Content */}
      <div className="relative flex flex-col bg-cover bg-center">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Header */}
        <header className="flex justify-between items-center p-5 z-30">
          <button
            className="w-12 h-12 relative sm:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <div className="block w-5 absolute left-5 top-1/3 transform -translate-x-1/2 -translate-y-1/2 z-50">
              <span
                className={`block h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-7 text-white bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>
          <nav className="hidden sm:flex gap-5 items-center">
            {/* Placeholder for Desktop Menu Items */}
          </nav>
          <button className="block sm:hidden bg-transparent border border-orange-600 py-1.5 px-5 rounded-md text-white hover:bg-orange-600">
            Đăng Nhập
          </button>
        </header>

        {/* Mobile Menu */}
        <div
          className={`transition-transform ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-64 bg-[#2D4263] h-full`}
        >
          <div
            className="flex pt-5 items-center justify-end text-xl font-bold px-[10%] w-full"
            onClick={toggleMenu}
          >
            <img
              src="/assets/nft/infytoken/close.svg"
              alt="Close Menu"
              className="h-7 cursor-pointer"
            />
          </div>
          <div className="flex flex-col w-full items-center justify-center h-screen gap-[30px] sm:gap-[50px] text-lg leading-7 font-normal md:gap-[60px]">
            {/* Mobile Menu Items */}
            <a href="#" className="text-white">Dashboard</a>
            <a href="#" className="text-white">Notifications</a>
            <a href="#" className="text-white">Personal messages</a>
            <a href="#" className="text-white">My profile</a>
            <a href="#" className="text-white">My orders</a>
            <a href="#" className="text-white">My wishlist</a>
            <a href="#" className="text-white">Settings</a>
            <a href="#" className="text-white">Change password</a>
            <a href="#" className="text-white">Logout</a>
          </div>
        </div>

        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8 bg-white shadow-xl rounded-lg p-6 mb-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-6">
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-800">
                Giới thiệu về chúng tôi
              </h1>
              <p className="text-base md:text-lg leading-7 text-gray-700">
                Chúng tôi là một quán cà phê với không gian ấm cúng và sang
                trọng, nơi bạn có thể thưởng thức những ly cà phê tuyệt hảo. Đến
                với chúng tôi để trải nghiệm những phút giây thư giãn tuyệt vời
                trong không gian độc đáo của quán.
              </p>
            </div>
            <div className="w-full lg:w-7/12">
              <img
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                alt="Nhóm người"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 bg-white shadow-xl rounded-lg p-6">
            <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-6">
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-800">
                Câu chuyện của chúng tôi
              </h1>
              <p className="text-base md:text-lg leading-7 text-gray-700">
                Chúng tôi chia sẻ câu chuyện về hành trình xây dựng quán cà phê
                của mình, từ những ngày đầu cho đến những thành công hiện tại.
                Khám phá những giá trị và niềm đam mê của chúng tôi qua từng
                giai đoạn phát triển.
              </p>
            </div>
            <div className="w-full lg:w-7/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                <div className="p-4 flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                    src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                    alt="Alexa"
                  />
                  <p className="font-semibold text-lg leading-6 text-gray-800 mt-4">
                    Alexa
                  </p>
                </div>
                <div className="p-4 flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                    src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                    alt="Olivia"
                  />
                  <p className="font-semibold text-lg leading-6 text-gray-800 mt-4">
                    Olivia
                  </p>
                </div>
                <div className="p-4 flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                    src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                    alt="Liam"
                  />
                  <p className="font-semibold text-lg leading-6 text-gray-800 mt-4">
                    Liam
                  </p>
                </div>
                <div className="p-4 flex flex-col items-center bg-gray-100 rounded-lg shadow-md">
                  <img
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                    src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                    alt="Elijah"
                  />
                  <p className="font-semibold text-lg leading-6 text-gray-800 mt-4">
                    Elijah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Lịch Sử và Di Sản
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Quán cà phê của chúng tôi đã có một hành trình dài từ những ngày
                đầu thành lập. Chúng tôi tự hào về sự phát triển không ngừng và
                cam kết cung cấp những sản phẩm cà phê chất lượng cao. Dưới đây
                là những mốc quan trọng trong lịch sử của chúng tôi:
              </p>
              <ul className="mt-4 list-disc pl-5 text-gray-600 dark:text-gray-300">
                <li>Mở cửa lần đầu vào năm 2000.</li>
                <li>Giành giải thưởng Quán cà phê tốt nhất vào năm 2010.</li>
                <li>Đạt được chứng nhận cà phê hữu cơ vào năm 2015.</li>
                {/* Thêm các mốc quan trọng khác nếu có */}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img
                className="w-full h-auto rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lịch sử và Di sản"
              />
            </div>
          </div>
        </div>
      </section>

      <News />
      <div>
        <div className="relative">
          {/* Nền trắng */}
          <div className="absolute inset-0 bg-white dark:bg-gray-900 h-full" />
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 h-full z-0" />
        </div>
        <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={2}
          >
            <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800 dark:text-gray-200">
              Khách hàng của chúng tôi
              <br />
              nói gì
            </h1>
            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-gray-800 dark:text-gray-200">
              Khách hàng của chúng tôi nói gì
            </h1>
            <Slider>
              <Slide index={0} tabIndex="null">
                <div className="flex flex-col lg:flex-row items-center mt-14">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img
                      src="https://i.ibb.co/4g1D9cv/imgslider1.png"
                      alt="Hình ảnh hồ sơ"
                      className="w-full h-full object-cover shadow-lg rounded"
                    />
                    <div className="w-32 hidden md:flex items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                        alt="Dấu ngoặc kép"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/3 xl:ml-32 md:ml-20 mt-4 lg:mt-0 flex flex-col justify-between">
                    <div>
                      <h1 className="text-2xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        Dịch vụ của chúng tôi đã làm hài lòng khách hàng!
                      </h1>
                      <p className="text-base font-medium leading-6 mt-4 text-gray-600 dark:text-gray-400">
                        Chúng tôi cam kết cung cấp dịch vụ tốt nhất với sự chăm sóc và
                        chú ý đến từng chi tiết. Khách hàng là ưu tiên hàng đầu của chúng
                        tôi, và chúng tôi không ngừng nỗ lực để mang đến những trải nghiệm
                        tuyệt vời nhất.
                      </p>
                    </div>
                    <div className="mt-8">
                      <p className="text-base font-medium leading-4 text-gray-800 dark:text-gray-200">
                        Anna Smith
                      </p>
                      <p className="text-base leading-4 mt-2 mb-4 text-gray-600 dark:text-gray-400">
                        Chuyên gia thiết kế giao diện
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>

            <div className="flex items-center mt-8">
              <ButtonBack
                className="cursor-pointer"
                role="button"
                aria-label="trượt trước"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg"
                  alt="trước"
                />
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="trượt tiếp theo"
                className="cursor-pointer ml-2"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg"
                  alt="tiếp theo"
                />
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <Info />
      <Footer />
    </div>
  );
};

export default About;
