import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Dịch vụ của quán cà phê thật tuyệt vời. Tôi đã có những trải nghiệm thật sự thú vị và hài lòng với chất lượng cà phê tại đây.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sabir Ali",
    text: "Quán cà phê có không gian rất ấm cúng và dễ chịu. Cà phê ngon và nhân viên thân thiện, chắc chắn tôi sẽ quay lại.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dipankar Kumar",
    text: "Cà phê tại đây là tuyệt nhất trong khu vực. Tôi rất ấn tượng với chất lượng và dịch vụ. Highly recommend!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Satya Narayan",
    text: "Một địa điểm lý tưởng để thư giãn và thưởng thức cà phê. Đồ uống tuyệt vời và không gian thoải mái.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slides every 3 seconds
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header section */}
        <div className="mb-10">
          <h1 data-aos="fade-up" className="text-center text-4xl font-bold ">
            Ý Kiến Khách Hàng
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6 px-4">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl bg-primary/10 relative">
                  {/* Image section */}
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* Content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
