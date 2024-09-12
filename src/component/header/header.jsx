import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/website/coffee_logo.png";
import { FaCoffee, FaShoppingCart, FaUser, FaSearch, FaUserCircle } from "react-icons/fa";
import './header.css'; // Import the updated CSS file

const Menus = [
  { id: 1, name: "HOME", link: "/coffee/home" },
  { id: 2, name: "MENU", link: "/coffee/menu" },
  { id: 3, name: "ABOUT", link: "/coffee/about" },
  { id: 4, name: "CONTACT", link: "/coffee/contact" },
];

const Header = () => {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0); // State for cart quantity

  useEffect(() => {
    // Function to fetch cart quantity from local storage
    const fetchCartQuantity = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartQuantity(totalQuantity);
    };

    fetchCartQuantity(); // Fetch cart quantity when the component mounts

    // Optionally, you can add an event listener or use other techniques to update the quantity when items are changed
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSearchFocus = () => {
    setShowSuggestions(search.length > 0);
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100); // Delay to allow clicking on suggestions
  };

  const suggestions = ["Coffee", "Latte", "Espresso", "Cappuccino"]; // Example suggestions

  return (
    <header className="header bg-gradient-to-r from-white via-gray-100 to-gray-200 text-gray-900 shadow-md">
      <div className="container py-3 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center gap-4">
          <NavLink to="/" className="logo flex items-center gap-3">
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
              <div className="absolute top-full left-0 w-full bg-gray-100 text-gray-900 rounded-lg mt-2 z-50 shadow-lg">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="suggestion px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Profile, Login, and Cart buttons */}
        <div className="flex items-center gap-6">
          {/* Profile button */}
          <NavLink
            to="/coffee/profile"
            className="profile-button flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <FaUserCircle className="text-xl" />
            <span className="button-text">Profile</span>
          </NavLink>

          {/* Login button */}
          <NavLink
            to="/coffee/login"
            className="login-button flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <FaUser className="text-lg" />
            <span className="button-text">Login</span>
          </NavLink>

          {/* Cart Icon and Quantity */}
          <div className="relative">
  <Link to="/coffee/cart" className="cart-button flex items-center gap-2 text-gray-600 hover:text-gray-900">
    <FaShoppingCart className="text-xl" />
    {cartQuantity > 0 && (
      <span className="cart-count">
        {cartQuantity}
      </span>
    )}
  </Link>
</div>

        </div>

        {/* Mobile Icon */}
        <div className="sm:hidden">
          <button className="text-gray-900 text-3xl">
            <FaCoffee />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
