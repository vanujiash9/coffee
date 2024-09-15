import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    updateTotalPrice(cart);
    updateTotalQuantity(cart);
  }, []);

  const updateTotalPrice = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const updateTotalQuantity = (items) => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem("cartQuantity", totalQuantity);
  };

  const handleRemoveItem = (index) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Sản phẩm này sẽ bị xóa khỏi giỏ hàng của bạn.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        updateTotalQuantity(updatedCart);
        setCartItems(updatedCart);
        updateTotalPrice(updatedCart);
      }
    });
  };

  const handleUpdateQuantity = (index, quantity) => {
    const stock = 100; // Assuming stock is 100 for every item

    if (quantity > stock) {
      Swal.fire({
        icon: "error",
        title: "Số lượng sản phẩm trong kho đã hết",
        text: `Chỉ còn lại ${stock} sản phẩm trong kho.`,
      });
      return;
    }

    if (quantity < 0) return;

    if (quantity === 0) {
      Swal.fire({
        title: "Bạn có muốn xóa sản phẩm này?",
        text: "Số lượng hiện tại là 1. Nếu giảm thêm sản phẩm, nó sẽ bị xóa.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      }).then((result) => {
        if (result.isConfirmed) {
          handleRemoveItem(index);
        } else {
          const updatedCart = cartItems.map((item, i) =>
            i === index ? { ...item, quantity: 1 } : item
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          updateTotalQuantity(updatedCart);
          setCartItems(updatedCart);
          updateTotalPrice(updatedCart);
        }
      });
      return;
    }

    if (quantity < cartItems[index].quantity) {
      const currentQuantity = cartItems[index].quantity;
      if (currentQuantity === 1 && quantity < currentQuantity) {
        Swal.fire({
          title: "Bạn có muốn xóa sản phẩm này?",
          text: "Số lượng hiện tại là 1. Nếu giảm thêm sản phẩm, nó sẽ bị xóa.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Xóa",
          cancelButtonText: "Hủy",
        }).then((result) => {
          if (result.isConfirmed) {
            handleRemoveItem(index);
          }
        });
        return;
      }
    }

    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: Math.min(quantity, stock) } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateTotalQuantity(updatedCart);
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Giỏ hàng trống!",
        text: "Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán.",
        icon: "warning",
        confirmButtonText: "OK",
      });
    } else {
      navigate("/coffee/checkout");
    }
  };

  const discount = 28000;
  const shipping = 8000;
  const finalPrice = totalPrice - discount + shipping;

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold mb-2">Giỏ hàng của bạn</h1>
        <p className="text-lg text-gray-600">Ngày hôm nay</p>
      </div>
      <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-8">
        <div className="xl:w-2/3">
          <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Giỏ hàng</h2>
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600">
                Giỏ hàng của bạn đang trống.
              </p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex items-center border-b py-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-20 object-cover mr-4 rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-base font-semibold">
                      {item.price.toLocaleString()} VNĐ x {item.quantity}
                    </p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <p className="text-lg font-semibold">
                      {(item.price * item.quantity).toLocaleString()} VNĐ
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        className="bg-gray-200 px-2 py-1 rounded-md"
                        onClick={() =>
                          handleUpdateQuantity(index, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-gray-200 px-2 py-1 rounded-md"
                        onClick={() =>
                          handleUpdateQuantity(index, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
                        onClick={() => handleRemoveItem(index)}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="xl:w-1/3">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Tổng kết đơn hàng</h2>
            <div className="flex justify-between mb-2">
              <span>Tổng số lượng:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tổng giá:</span>
              <span>{totalPrice.toLocaleString()} VNĐ</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Giảm giá:</span>
              <span>{discount.toLocaleString()} VNĐ</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Phí vận chuyển:</span>
              <span>{shipping.toLocaleString()} VNĐ</span>
            </div>
            <div className="flex justify-between mb-4 font-semibold">
              <span>Tổng cộng:</span>
              <span>{finalPrice.toLocaleString()} VNĐ</span>
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md w-full"
              onClick={handleCheckout}
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
