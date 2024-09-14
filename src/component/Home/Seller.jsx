import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import imn2 from "../assets/website/27780fc651dff0eb419b06ecf93a3055.jpg";
import imn3 from "../assets/website/d191162bab13fb9f788a1dc3334eecf6.jpg";

const bestSellers = [
  { img: imn2, title: "Latte", originalPrice: "200.000", discountedPrice: "180.000", id: 2 },
  { img: imn3, title: "Cappuccino", originalPrice: "220.000", discountedPrice: "200.000", id: 3 },
  // Add more products here as needed
];

const Seller = () => {
  const addToCart = (product) => {
    // Get the cart from local storage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    
    if (existingProductIndex > -1) {
      // If the product is already in the cart, increment the quantity
      cart[existingProductIndex].quantity += 1;
    } else {
      // If the product is not in the cart, add it with quantity 1
      cart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart back to local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show a notification that the item has been added to the cart
    Swal.fire({
      icon: "success",
      title: "Added to cart!",
      text: `${product.title} has been added to your cart.`,
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Best Sellers</h2>
      <div className="relative m-3 flex flex-wrap mx-auto justify-center">
        {bestSellers.map((product) => (
          <div
            key={product.id}
            className="relative max-w-sm min-w-[340px] bg-white shadow-lg rounded-3xl p-4 mx-2 my-4 transform transition-transform duration-300 hover:scale-105"
          >
            <Link to={`/coffee/productdetail/${product.id}`}>
              <div className="overflow-hidden rounded-2xl relative">
                <img
                  className="h-48 rounded-2xl w-full object-cover transform transition-transform duration-300 hover:opacity-90"
                  src={product.img}
                  alt={product.title}
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 shadow-lg cursor-pointer">
                  <span className="text-sm font-semibold">Best Seller</span>
                </div>
              </div>
            </Link>
            <div className="mt-4 flex flex-col items-center">
              <p className="text-lg font-semibold text-gray-900 mb-1">
                {product.title}
              </p>
              <div className="flex items-center">
                <p className="text-md text-gray-800 line-through mr-2">
                  {product.originalPrice}
                </p>
                <p className="text-md text-red-500 font-semibold">
                  {product.discountedPrice}
                </p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="bg-black text-white py-1 px-4 rounded-full shadow-md hover:bg-gray-800 transition-colors duration-300 mt-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seller;
