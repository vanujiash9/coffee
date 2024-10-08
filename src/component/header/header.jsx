import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/website/coffee_logo.png";
import { FaShoppingCart, FaUser, FaSearch, FaSignOutAlt } from "react-icons/fa";
import "./header.css"; // Import the updated CSS file

const Menus = [
  { id: 1, name: "HOME", link: "/coffee/home" },
  { id: 2, name: "MENU", link: "/coffee/menu" },
  { id: 3, name: "ABOUT", link: "/coffee/about" },
  { id: 4, name: "CONTACT", link: "/coffee/contact" },
];

const searchOptions = [
  { id: 1, name: "Sản phẩm yêu thích", link: "/coffee/profile" },
  { id: 2, name: "Tin nhắn", link: "/coffee/profile" },
  { id: 3, name: "Giỏ hàng", link: "/coffee/cart" },
  { id: 4, name: "Menu", link: "/coffee/menu" },
  { id: 5, name: "Liên hệ", link: "/coffee/contact" },
  { id: 6, name: "Giới thiệu", link: "/coffee/about" },
  { id: 7, name: "Hỗ trợ", link: "/coffee/contact" },
  { id: 8, name: "Tin tức", link: "/coffee/news" },
  { id: 9, name: "Cài đặt", link: "/coffee/settings" },
  { id: 10, name: "Đăng nhập", link: "/coffee/login" },
  { id: 11, name: "Đăng ký", link: "/coffee/register" },
  { id: 12, name: "Music", link: "/coffee/music" },
  { id: 13, name: "Đơn hàng", link: "/coffee/profile" },
  { id: 14, name: "Đánh giá", link: "/coffee/feedback2" },
  { id: 15, name: "FAQ", link: "/coffee/faq" },
  { id: 16, name: "Blog", link: "/coffee/blog" },
  { id: 17, name: "Tin tức cập nhật", link: "/coffee/updates" },
  { id: 18, name: "Hướng dẫn sử dụng", link: "/coffee/guide" },
  { id: 19, name: "Chính sách bảo mật", link: "/coffee/privacy" },
  { id: 20, name: "Điều khoản dịch vụ", link: "/coffee/terms" },
];

const defaultAvatar =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmunX_Sj-B11U_k7qT2yTI26xBH1TyEo9vQ&s";

const Header = () => {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [userFullName, setUserFullName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cart quantity from localStorage
    const fetchCartQuantity = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartQuantity(totalQuantity);
    };

    fetchCartQuantity();
  }, []);

  useEffect(() => {
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.firstName && user.lastName) {
      setUserFullName(`${user.firstName} ${user.lastName}`);
    } else {
      setUserFullName(null);
    }
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setShowSuggestions(true);
  };

  const handleSearchFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserFullName(null);
    navigate("/coffee/register");
    alert("Đăng xuất thành công!");
  };

  const filteredSuggestions =
    search.length > 0
      ? searchOptions.filter((option) =>
          option.name.toLowerCase().includes(search.toLowerCase())
        )
      : searchOptions;

  return (
    <header className="header bg-gradient-to-r from-white via-gray-100 to-gray-200 text-gray-900 shadow-md">
      <div className="container py-3 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center gap-4">
          <NavLink to="/coffee/home" className="logo flex items-center gap-3">
            <img src={Logo} alt="Logo" className="logo-image" />
            <span className="logo-text text-xl font-bold">Maxion Coffee</span>
          </NavLink>
        </div>

        {/* Links and Search section */}
        <div className="flex items-center gap-6 flex-grow relative">
          <ul className="flex items-center gap-6">
            {Menus.map((data) => (
              <li key={data.id}>
                <NavLink
                  to={data.link}
                  className={({ isActive }) =>
                    `nav-link ${
                      isActive
                        ? "text-gray-900 font-semibold"
                        : "text-gray-600 hover:text-gray-900"
                    }`
                  }
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Search input */}
          <div className="search-container relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className="search-input px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <FaSearch className="search-icon absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            {showSuggestions && (
              <div className="absolute top-full left-0 w-full bg-gray-100 text-gray-900 rounded-lg mt-2 z-50 shadow-lg grid grid-cols-2 gap-4 p-4 max-h-60 overflow-y-auto">
                {filteredSuggestions.map((suggestion) => (
                  <Link
                    key={suggestion.id}
                    to={suggestion.link}
                    className="suggestion px-4 py-2 hover:bg-gray-200 block rounded-md"
                    onClick={() => {
                      setSearch("");
                      setShowSuggestions(false);
                    }}
                  >
                    {suggestion.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Profile, Login, and Cart buttons */}
        <div className="flex items-center gap-6 relative">
          {userFullName ? (
            <>
              {/* User Profile with Avatar */}
              <div className="flex items-center gap-4">
                <NavLink
                  to="/coffee/profile"
                  className="profile-button flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <img
                    src={defaultAvatar}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="button-text">{userFullName}</span>
                </NavLink>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="logout-button flex items-center gap-2 text-gray-600 hover:text-gray-900"
                >
                  <FaSignOutAlt className="text-lg" />
                  <span className="button-text">Đăng xuất</span>
                </button>

                {/* Cart Button */}
                <NavLink
                  to="/coffee/cart"
                  className="cart-button flex items-center gap-2 text-gray-600 hover:text-gray-900 relative"
                >
                  <FaShoppingCart className="text-lg" />
                  {cartQuantity > 0 && (
                    <span className="cart-quantity bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
                      {cartQuantity}
                    </span>
                  )}
                </NavLink>
              </div>
            </>
          ) : (
            <>
              {/* Login Button */}
              <NavLink
                to="/coffee/login"
                className="login-button flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <FaUser className="text-lg" />
                <span className="button-text">Đăng nhập</span>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
