import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import imn1 from "../assets/website/2c96dab0ec3706fdf4d6b21090a104ac.jpg";
import imn2 from "../assets/website/27780fc651dff0eb419b06ecf93a3055.jpg";
import imn3 from "../assets/website/d191162bab13fb9f788a1dc3334eecf6.jpg";
import imn4 from "../assets/website/3c46922bbf6faa03c92f4b7fa29e233e.jpg";
import imn5 from "../assets/website/faddc7a59fc2cf3ba774a25821c951f9.jpg";
import imn6 from "../assets/website/e3615d551329c1343da0a052b4173ae6.jpg";
import imn7 from "../assets/website/3c46922bbf6faa03c92f4b7fa29e233e.jpg";
import imn8 from "../assets/website/166be34df841eff4d5a6303cb031d3b0.jpg";
import imn9 from "../assets/website/1bbf21967acbd14e429803d4dbe29d49.jpg";

const productImages = {
  1: imn7,
  2: imn2,
  3: imn3,
  4: imn1,
  5: imn5,
  6: imn9,
  7: imn6,
  8: imn4,
  9: imn8,
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const menuItems = [
      {
        img: imn7,
        title: "Espresso",
        price: "150000",
        id: 1,
        stock: 10,
        discount: false,
        description: "Một tách espresso đậm đà và mạnh mẽ...",
        rating: 5,
      },
      {
        img: imn2,
        title: "Latte",
        price: "180000",
        id: 2,
        stock: 5,
        discount: true,
        originalPrice: "200000",
        description: "Sự kết hợp mượt mà giữa espresso và sữa hơi...",
        rating: 4,
      },
      {
        img: imn3,
        title: "Cappuccino",
        price: "200000",
        id: 3,
        stock: 8,
        discount: false,
        description: "Hương vị cappuccino cổ điển với lớp bọt sữa dày...",
        rating: 4,
      },
      {
        img: imn1,
        title: "Americano",
        price: "170000",
        id: 4,
        stock: 12,
        discount: true,
        originalPrice: "190000",
        description: "Một ly americano đậm đà với hương vị mạnh mẽ...",
        rating: 5,
      },
      {
        img: imn5,
        title: "Mocha",
        price: "220000",
        id: 5,
        stock: 7,
        discount: false,
        description: "Sự kết hợp tuyệt vời giữa cà phê espresso và sô cô la...",
        rating: 4,
      },
      {
        img: imn9,
        title: "Macchiato",
        price: "160000",
        id: 6,
        stock: 6,
        discount: true,
        originalPrice: "180000",
        description: "Cà phê espresso với một lớp bọt sữa nhẹ...",
        rating: 3,
      },
      {
        img: imn6,
        title: "Flat White",
        price: "190000",
        id: 7,
        stock: 5,
        discount: false,
        description: "Cà phê espresso với lớp sữa hơi tạo ra sự mịn màng...",
        rating: 5,
      },
      {
        img: imn4,
        title: "Affogato",
        price: "210000",
        id: 8,
        stock: 4,
        discount: true,
        originalPrice: "230000",
        description: "Cà phê espresso đổ lên trên kem vani thơm ngon...",
        rating: 4,
      },
      {
        img: imn8,
        title: "Cold Brew",
        price: "180000",
        id: 9,
        stock: 8,
        discount: false,
        description: "Cà phê lạnh chiết xuất chậm với hương vị tinh tế...",
        rating: 5,
      },
    ];

    const foundProduct = menuItems.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setQuantity(1);
    }
  }, [id]);

  if (!product) return <p className="text-center text-gray-500">Loading...</p>;

  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    } else {
      Swal.fire("Error", "Số lượng sản phẩm trong kho đã hết", "error");
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const item = {
      img: product.img,
      title: product.title,
      price: product.price, // Làm tròn giá tiền đến số nguyên
      id: product.id,
      quantity: quantity,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += item.quantity;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleAddToCart = () => {
    try {
      addToCart();
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

  const handleBuyNow = () => {
    if (!product) return;

    const item = {
      img: product.img,
      title: product.title,
      price: parseFloat(product.price).toFixed(0), // Làm tròn giá tiền đến số nguyên
      id: product.id,
      quantity: quantity,
    };

    localStorage.setItem("buyNowCart", JSON.stringify([item]));
    navigate("/coffee/checkout3");
  };

  return (
    <div className="flex flex-col items-center p-5 min-h-screen bg-gray-100">
      <img
        src={productImages[product.id]}
        alt={product.title}
        className="w-full max-w-lg rounded-lg shadow-lg border border-gray-300"
      />
      <div className="text-center mt-5">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          {product.title}
        </h1>
        <p className="text-2xl text-green-600 mb-2 font-semibold">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(parseFloat(product.price))}
        </p>
        {product.discount && (
          <p className="text-lg text-red-500 line-through">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(parseFloat(product.originalPrice))}
          </p>
        )}
        <p className="text-gray-700 mt-2">{product.description}</p>
        <div className="flex items-center justify-center mt-4">
          {[...Array(product.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
            </svg>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={handleDecrease}
            className="bg-gray-200 p-2 rounded-l"
          >
            -
          </button>
          <span className="px-4 py-2 border-t border-b border-gray-300">
            {quantity}
          </span>
          <button
            onClick={handleIncrease}
            className="bg-gray-200 p-2 rounded-r"
          >
            +
          </button>
        </div>
        <div className="flex space-x-4 mt-4">
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Thêm vào giỏ hàng
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600"
          >
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
