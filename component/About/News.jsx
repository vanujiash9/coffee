
const News = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Tin Tức Mới Nhất Về Quán Cà Phê
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src="https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tin tức 1"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
                  Khách Sạn Mới Mở Cửa Tại Trung Tâm Thành Phố
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                  Quán cà phê mới được mở cửa tại trung tâm thành phố với không
                  gian sang trọng và dịch vụ chuyên nghiệp. Đến thưởng thức cà
                  phê và thư giãn cùng chúng tôi.
                </p>
                <a
                  href="/coffee/blog"
                  className="text-blue-600 dark:text-blue-400 mt-4 block"
                >
                  Đọc Thêm
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src="https://images.unsplash.com/photo-1561082909-b4f331568933?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tin tức 2"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
                  Khuyến Mãi Đặc Biệt Cho Ngày Lễ
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                  Chúng tôi đang có chương trình khuyến mãi đặc biệt nhân dịp
                  ngày lễ. Hãy đến quán để nhận ưu đãi và trải nghiệm những món
                  cà phê tuyệt vời.
                </p>
                <a
                  href="/coffee/blog"
                  className="text-blue-600 dark:text-blue-400 mt-4 block"
                >
                  Đọc Thêm
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col h-full">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src="https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tin tức 3"
                />
                <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
                  Sự Kiện Ra Mắt Sản Phẩm Mới
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">
                  Chúng tôi vui mừng thông báo sự kiện ra mắt sản phẩm cà phê
                  mới với hương vị độc đáo. Đừng bỏ lỡ cơ hội trải nghiệm sản
                  phẩm mới này.
                </p>
                <a
                  href="/coffee/blog"
                  className="text-blue-600 dark:text-blue-400 mt-4 block"
                >
                  Đọc Thêm
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default News;