const Blog1 = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">Những Blog Về Cà Phê Trong Tuần</h1>
                    <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">Nếu bạn đang tìm kiếm những bài viết thú vị về cà phê, bạn đã đến đúng nơi. Khám phá các công thức, mẹo và xu hướng cà phê mới nhất tại đây.</p>
                </div>
                <div className="lg:flex items-stretch md:mt-12 mt-8">
                    <div className="lg:w-1/2">
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                            <div className="sm:w-1/2 relative">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 Tháng Tư 2024</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold text-white">Hướng Dẫn Pha Cà Phê Espresso Tại Nhà</h2>
                                        <p className="text-base leading-4 text-white mt-2">Bí Quyết Để Có Ly Espresso Hoàn Hảo</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Đọc Thêm</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full" alt="Espresso" />
                            </div>
                            <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">15 Tháng Tư 2024</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold text-white">Khám Phá Các Loại Hạt Cà Phê</h2>
                                        <p className="text-base leading-4 text-white mt-2">Tìm Hiểu Đặc Điểm Của Các Loại Hạt Cà Phê Khác Nhau</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Đọc Thêm</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full" alt="Coffee Beans" />
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">20 Tháng Tư 2024</p>
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-xl font-semibold text-white">Công Thức Cà Phê Cold Brew Tại Nhà</h2>
                                    <p className="text-base leading-4 text-white mt-2">Cách Làm Cà Phê Cold Brew Mát Lạnh</p>
                                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none">Đọc Thêm</p>
                                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="Cold Brew" className="w-full mt-8 md:mt-6 hidden sm:block" />
                            <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="Cold Brew" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                        <div className="relative">
                            <div>
                                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">25 Tháng Tư 2024</p>
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-xl font-semibold text-white">Tạo Ra Latte Art Đẹp Mắt</h2>
                                    <p className="text-base leading-4 text-white mt-2">Kỹ Thuật Vẽ Hình Trên Cà Phê Latte</p>
                                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none">Đọc Thêm</p>
                                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="Latte Art" className="w-full sm:block hidden" />
                            <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="Latte Art" />
                        </div>
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                            <div className="relative w-full">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">28 Tháng Tư 2024</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold text-white">Cách Làm Cappuccino Đúng Cách</h2>
                                        <p className="text-base leading-4 text-white mt-2">Hướng Dẫn Pha Cappuccino Hoàn Hảo</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Đọc Thêm</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full" alt="Cappuccino" />
                            </div>
                            <div className="relative w-full sm:mt-0 mt-4">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">30 Tháng Tư 2024</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold text-white">Bí Quyết Chọn Hạt Cà Phê Tốt</h2>
                                        <p className="text-base leading-4 text-white mt-2">Những Yếu Tố Cần Xem Xét Khi Chọn Mua Cà Phê</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Đọc Thêm</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full" alt="Coffee Selection" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog1;
