import Img2 from "../assets/website/coffee2.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description: "Cà phê Espresso đậm đà với hương vị mạnh mẽ, thích hợp cho những ai yêu thích sự mạnh mẽ và tinh tế.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description: "Cà phê Americano có vị nhẹ nhàng hơn với sự pha trộn hoàn hảo của cà phê espresso và nước nóng.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description: "Cappuccino là sự kết hợp hoàn hảo giữa espresso, sữa hơi và lớp bọt sữa mềm mại.",
    aosDelay: "500",
  },
];

const Service = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold  text-gray-800">
              Các Loại Cà Phê Tuyệt Vời
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                key={service.id}
                className="rounded-2xl bg-white hover:bg-blue-950 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[150px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-12 group-hover:scale-105 group-hover:rotate-3 duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h1 className="text-2xl font-semibold">{service.name}</h1>
                  <p className="text-gray-600 group-hover:text-white duration-300 text-base line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
