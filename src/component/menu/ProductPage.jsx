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
        { img: imn7, title: "Espresso", price: "150.000 VNĐ", id: 1, stock: 10, discount: false, description: "Một tách espresso đậm đà và mạnh mẽ, lý tưởng cho những ai yêu thích sự mạnh mẽ và sự phong phú trong mỗi ngụm.", rating: 5 },
        { img: imn2, title: "Latte", price: "180.000 VNĐ", id: 2, stock: 5, discount: true, originalPrice: "200.000 VNĐ", description: "Sự kết hợp mượt mà giữa espresso và sữa hơi, được phủ một lớp bọt nhẹ nhàng. Hoàn hảo cho những ai yêu thích một trải nghiệm cà phê mềm mại và nhẹ nhàng.", rating: 4 },
        { img: imn3, title: "Cappuccino", price: "200.000 VNĐ", id: 3, stock: 8, discount: false, description: "Espresso đậm đà kết hợp với lớp bọt mịn, mang đến hương vị cân bằng với kết cấu bọt nhẹ nhàng. Một lựa chọn cổ điển với lý do rõ ràng.", rating: 4 },
        { img: imn1, title: "Americano", price: "170.000 VNĐ", id: 4, stock: 12, discount: false, description: "Đậm đà và mượt mà, Americano của chúng tôi là lựa chọn đơn giản nhưng thỏa mãn cho những ai yêu thích hương vị thuần khiết của espresso pha loãng với nước nóng.", rating: 5 },
        { img: imn5, title: "Macchiato", price: "190.000 VNĐ", id: 5, stock: 7, discount: true, originalPrice: "210.000 VNĐ", description: "Một tách espresso mạnh mẽ với một chút sữa hơi, mang đến hương vị đậm đà với một chút kem.", rating: 4 },
        { img: imn9, title: "Mocha", price: "220.000 VNĐ", id: 6, stock: 4, discount: false, description: "Hòa quyện giữa sô cô la đậm đặc và espresso, được phủ lên lớp kem tươi. Hoàn hảo cho những ai yêu thích một trải nghiệm cà phê ngọt ngào và indulgent.", rating: 5 },
        { img: imn6, title: "Flat White", price: "210.000 VNĐ", id: 7, stock: 6, discount: false, description: "Cà phê mượt mà được làm từ một shot espresso kép và lớp bọt sữa mịn màng. Một lựa chọn yêu thích cho những ai muốn thưởng thức một tách cà phê mạnh mẽ nhưng mềm mại.", rating: 4 },
        { img: imn4, title: "Affogato", price: "250.000 VNĐ", id: 8, stock: 3, discount: true, originalPrice: "270.000 VNĐ", description: "Một món cà phê kiểu tráng miệng với một shot espresso rưới lên một viên kem vani mịn màng. Sự kết hợp hoàn hảo giữa nóng và lạnh, cà phê và ngọt ngào.", rating: 5 },
        { img: imn8, title: "Irish Coffee", price: "280.000 VNĐ", id: 9, stock: 2, discount: false, description: "Một sự kết hợp tinh tế giữa cà phê, whiskey Ireland và lớp kem tươi trên cùng. Hoàn hảo cho những ai muốn thưởng thức một món cà phê có hương vị đặc biệt.", rating: 5 },
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
      Swal.fire('Error', 'Số lượng sản phẩm trong kho đã hết', 'error');
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    
    Swal.fire({
      icon: "success",
      title: "Thành công",
      text: `${product.title} đã được thêm vào giỏ hàng với số lượng ${quantity}.`,
      confirmButtonText: "OK",
    });
  };

  const buyNow = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate('/coffee/checkout2');
  };

  return (
    <div className="flex flex-col items-center p-5 min-h-screen bg-gray-100">
      {/* Product Image */}
      <img src={productImages[product.id]} alt={product.title} className="w-full max-w-lg rounded-lg shadow-lg border border-gray-300" />

      {/* Product Info */}
      <div className="text-center mt-5">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{product.title}</h1>
        <p className="text-2xl text-green-600 mb-2 font-semibold">{product.price}</p>
        {product.discount && (
          <p className="text-lg text-red-500 line-through">{product.originalPrice}</p>
        )}
        <p className="text-gray-700 mt-2">{product.description}</p>
        <div className="flex items-center justify-center mt-4">
          {[...Array(product.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={handleDecrease}
          className="bg-gray-300 p-2 rounded-l-lg text-xl font-semibold hover:bg-gray-400 transition-colors"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-16 text-center border border-gray-300 rounded-md"
        />
        <button
          onClick={handleIncrease}
          className="bg-gray-300 p-2 rounded-r-lg text-xl font-semibold hover:bg-gray-400 transition-colors"
        >
          +
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={addToCart}
          className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
        <button
          onClick={buyNow}
          className="bg-green-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
