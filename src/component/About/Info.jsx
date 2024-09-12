
const Info= () => {
  return (
    <div>
            <div className="2xl:mx-auto 2xl:container mx-4 py-16">
        <div className="w-full relative flex items-center justify-center">
          {/* Ảnh nền cho quán cà phê */}
          <img
            src="https://i.ibb.co/4sYZ8gC/img-2.png"
            alt="cafe-interior"
            className="w-full h-full absolute z-0 hidden xl:block"
          />
          <img
            src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png"
            alt="cafe-interior"
            className="w-full h-full absolute z-0 hidden sm:block xl:hidden"
          />
          <img
            src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png"
            alt="cafe-interior"
            className="w-full h-full absolute z-0 sm:hidden "
          />
          <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
            <h1 className="text-4xl font-semibold leading-9 text-white text-center">
              Đừng bỏ lỡ cơ hội!
            </h1>
            <p className="text-base leading-normal text-center text-white mt-6">
              Đăng ký nhận bản tin của chúng tôi để luôn cập nhật những tin tức
              mới nhất. <br /> Bản tin của chúng tôi được gửi vào mỗi thứ Sáu
              hàng tuần, hãy đăng ký để nhận tin tức và cập nhật mới nhất.
            </p>
            <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
              <input
                className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                placeholder="Địa chỉ email"
              />
              <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;
