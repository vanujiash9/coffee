import PropTypes from "prop-types";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"; // Import Link for navigation

const MenuCart = ({ img, title, price, id, addToCart }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddToCart = () => {
    try {
      addToCart(); // Call the addToCart function passed as a prop
      Swal.fire({
        title: "Added to Cart",
        text: "Product has been added to your cart successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while adding the item to the cart.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error handling cart:", error);
    }
  };

  const handleAddToFavorites = (e) => {
    e.stopPropagation();
    try {
      const item = { img, title, price, id };
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const isAlreadyFavorited = favorites.some((favItem) => favItem.id === id);

      if (!isAlreadyFavorited) {
        favorites.push(item);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavorited(true);
        Swal.fire({
          title: "Added to Favorites",
          text: "Product has been added to your favorites!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Already in Favorites",
          text: "This product is already in your favorites list.",
          icon: "info",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while adding the item to favorites.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error handling favorites:", error);
    }
  };

  return (
    <div className="w-full lg:w-1/4 p-5 shadow-md rounded-lg flex flex-col items-center relative">
      <Link to={`/coffee/productdetail/${id}`}> {/* Wrap the image with a Link */}
        <img
          src={img}
          alt={title}
          className="w-full h-25 rounded-xl object-cover mb-4 cursor-pointer"
        />
      </Link>
      <button
        className={`absolute top-2 right-2 text-2xl ${isFavorited ? "text-red-500" : "text-gray-500"}`}
        onClick={handleAddToFavorites}
        aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>
      <div className="text-center mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="text-lg font-bold mb-4">{price} VNĐ</div>
      <div className="flex space-x-2">
        <button
          className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
        >
          Add to Cart
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(); // You might want to adjust this if you have a specific buy now function
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

MenuCart.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default MenuCart;
