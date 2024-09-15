
const ĐMK = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-semibold mb-4">Đổi mật khẩu</h2>

            {/* Giao diện đổi mật khẩu */}
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="oldPassword"
                >
                  Mật khẩu cũ
                </label>
                <input
                  type="password"
                  id="oldPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập mật khẩu cũ"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="newPassword"
                >
                  Mật khẩu mới
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập mật khẩu mới"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="confirmPassword"
                >
                  Xác nhận mật khẩu mới
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Xác nhận mật khẩu mới"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Đổi mật khẩu
              </button>
            </form>
          </div>
    </div>
  )
}

export default ĐMK
