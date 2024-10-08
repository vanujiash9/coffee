import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Swal from "sweetalert2"; // Import SweetAlert2
import MenuCart from "./MenuCart";
import Footer from "../header/Footer";
import Review from "./review";
import Index from "./feedback2";
import imn1 from "../assets/website/2c96dab0ec3706fdf4d6b21090a104ac.jpg";
import imn2 from "../assets/website/27780fc651dff0eb419b06ecf93a3055.jpg";
import imn3 from "../assets/website/d191162bab13fb9f788a1dc3334eecf6.jpg";
import imn4 from "../assets/website/3c46922bbf6faa03c92f4b7fa29e233e.jpg";
import imn5 from "../assets/website/faddc7a59fc2cf3ba774a25821c951f9.jpg";
import imn6 from "../assets/website/e3615d551329c1343da0a052b4173ae6.jpg";
import imn7 from "../assets/website/3c46922bbf6faa03c92f4b7fa29e233e.jpg";
import imn8 from "../assets/website/166be34df841eff4d5a6303cb031d3b0.jpg";
import imn9 from "../assets/website/1bbf21967acbd14e429803d4dbe29d49.jpg";

const menuItems = [
  { img: imn7, title: "Espresso", price: "150.000", id: 1 },
  { img: imn2, title: "Latte", price: "180.000", id: 2 },
  { img: imn3, title: "Cappuccino", price: "200.000", id: 3 },
  { img: imn1, title: "Americano", price: "170.000", id: 4 },
  { img: imn5, title: "Macchiato", price: "190.000", id: 5 },
  { img: imn9, title: "Mocha", price: "220.000", id: 6 },
  { img: imn6, title: "Flat White", price: "210.000", id: 7 },
  { img: imn4, title: "Affogato", price: "250.000", id: 8 },
  { img: imn8, title: "Irish Coffee", price: "280.000", id: 9 },
];

const Menu = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show notification when added to cart
    Swal.fire({
      icon: "success",
      title: "Added to cart!",
      text: `${product.title} has been added to your cart.`,
      confirmButtonText: "OK",
    });
  };

  const filteredItems = menuItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-gray-300" : "bg-white text-gray-900"}`}>
      {/* Header Section */}
      <div className="relative overflow-hidden group h-[500px] bg-primary card-hidden">
        <img
          src="https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3"
          className="h-full transition-all delay-300 duration-400 ease-in w-full absolute group-hover:scale-105 object-center"
          alt="Decorative background"
        />
        <div className="absolute p-8 z-50 gap-4 flex flex-col justify-end bg-opacity-45 h-full w-full bottom-0">
          <span className="text-[20px] sm:text-[24px] text-white md:text-[28px] font-canela">
            Welcome to our Menu
          </span>
          <p className="group-hover:block text-white text-[14px] hidden">
            Enjoy amazing beverages at our shop. Strong coffee, fragrant tea, and more are waiting for you!
          </p>

          <a href="contactus.html" className="flex items-center gap-2">
            <div className="flex group-hover:bg-secondary justify-center items-center rounded-full bg-primary min-h-10 min-w-10 max-h-10 max-w-10">
              <img
                src="https://images.unsplash.com/photo-1595239244990-b609da3d95f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                className="w-[28px] h-8 rounded-full overflow-hidden"
                alt="Contact Us"
              />
            </div>
            <h2 className="font-bold text-[16px] text-white">Maxion coffee</h2>
          </a>
        </div>
        <div className="absolute transition-all duration-400 ease-in bg-gradient-to-b from-transparent to-black min-h-[650px] text-white bottom-0 group-hover:bottom-0 group-hover:min-h-[900px] w-full z-30" />
      </div>

      {/* Menu Section */}
      <div className="p-5 flex flex-col items-center min-h-screen">
        <div className="flex flex-col justify-center items-center w-full mb-10">
          <h1 className="text-4xl font-semibold text-center">Our Menu</h1>
          <input
            type="text"
            placeholder="Search for a drink..."
            className="mt-4 p-2 border rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <label className="inline-flex items-center cursor-pointer mt-5">
            <input
              type="checkbox"
              className="sr-only"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className={`relative w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${darkMode ? "bg-blue-900" : "bg-gray-200"}`}>
              <span className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out ${darkMode ? "translate-x-full" : ""}`} />
            </div>
            <span className="ml-3 text-gray-500">{darkMode ? "Dark" : "Light"}</span>
          </label>
        </div>

        <div className="flex flex-wrap gap-8 justify-center items-center lg:px px-5">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <MenuCart
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                id={item.id}
                addToCart={() => addToCart(item)}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">No items match your search.</p>
          )}
        </div>

        <div className="mt-8">
          <Link to="/coffee/music">
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
              You can order songs for the café here
            </button>
          </Link>
        </div>
      </div>

      {/* Additional Sections */}
      <Review />
      <Index />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Menu;
