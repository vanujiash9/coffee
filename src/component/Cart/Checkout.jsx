import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [note, setNote] = useState("");
  const [noteSuggestions] = useState([
    "Xin vui lòng gói hàng cẩn thận.",
    "Giao hàng vào buổi tối nếu có thể.",
    "Tôi cần hóa đơn kèm theo đơn hàng.",
    "Để lại hàng ở cửa hàng nếu không có ai ở nhà.",
    "Liên hệ tôi qua số điện thoại nếu cần thêm thông tin.",
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "David Kent",
    address: "123 Phố Hòa Bình, Quận 1, TP.HCM",
    phone: "0123-456-789",
    email: "david.kent@example.com",
    avatar:
      "https://bazaarvietnam.vn/wp-content/uploads/2022/01/phim-hay-nhat-cua-lee-do-hyun-ldh_sky.jpg",
  });
  const [, setPaymentMethod] = useState("Cash on Delivery");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Cash on Delivery");
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
    updateTotalPrice(cart);
  }, []);

  const updateTotalPrice = (items) => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    setTotalPrice(0);
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
        setCartItems(updatedCart);
        updateTotalPrice(updatedCart);
      }
    });
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleNoteSubmit = () => {
    Swal.fire({
      title: "Ghi chú của bạn đã được gửi",
      text: `Ghi chú: ${note}`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleCustomerInfoChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleCustomerInfoSave = () => {
    setIsEditing(false);
    Swal.fire("Thông tin đã được cập nhật!", "", "success");
  };

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handlePaymentMethodConfirm = () => {
    Swal.fire({
      title: "Xác nhận phương thức thanh toán",
      text: `Bạn chọn phương thức thanh toán: ${selectedPaymentMethod}`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        setPaymentMethod(selectedPaymentMethod);
        Swal.fire(
          "Đã xác nhận!",
          `Phương thức thanh toán đã được thay đổi thành: ${selectedPaymentMethod}`,
          "success"
        );
      }
    });
  };

  const handleSuggestionClick = (suggestion) => {
    setNote((prevNote) => prevNote + (prevNote ? "\n" : "") + suggestion);
  };

  const handlePayment = () => {
    if (
      customerInfo.name &&
      customerInfo.address &&
      customerInfo.phone &&
      customerInfo.email
    ) {
      const order = {
        id: Date.now(), // Unique identifier for the order
        date: new Date().toLocaleDateString(),
        status: "Đã thanh toán", // Payment status
        total: finalPrice.toLocaleString(), // Total price
        items: cartItems, // Save cart items with order
        note: note, // Save note with order
        paymentMethod: selectedPaymentMethod, // Save payment method with order
        customerInfo: customerInfo, // Save customer info with order
      };

      // Get existing orders from local storage
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

      // Add new order to the list
      existingOrders.push(order);

      // Save updated orders to local storage
      localStorage.setItem("orders", JSON.stringify(existingOrders));

      Swal.fire({
        title: "Thanh toán thành công!",
        text: "Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        clearCart(); // Clear cart after payment confirmation
        navigate("/coffee/cart"); // Redirect to a success page
      });
    } else {
      Swal.fire({
        title: "Thông tin chưa đầy đủ",
        text: "Vui lòng kiểm tra lại thông tin khách hàng.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const discount = 28000;
  const shipping = 8000;
  const finalPrice = totalPrice - discount + shipping;

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold mb-2">Xác nhận đơn hàng</h1>
        <p className="text-lg text-gray-600">Kiểm tra và hoàn tất thanh toán</p>
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
                        className="bg-red-500 text-white px-3 py-1 rounded"
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

          <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Tóm tắt đơn hàng</h2>
            <div className="flex justify-between mb-2">
              <p>Tổng cộng</p>
              <p>{totalPrice.toLocaleString()} VNĐ</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>
                Giảm giá{" "}
                <span className="bg-gray-200 p-1 text-xs">HỌC SINH</span>
              </p>
              <p>-{discount.toLocaleString()} VNĐ</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Phí vận chuyển</p>
              <p>{shipping.toLocaleString()} VNĐ</p>
            </div>
            <div className="flex justify-between font-semibold">
              <p>Tổng tiền phải trả</p>
              <p>{finalPrice.toLocaleString()} VNĐ</p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Ghi chú</h2>
            <textarea
              className="w-full p-4 border rounded-md"
              rows="4"
              value={note}
              onChange={handleNoteChange}
            />
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleNoteSubmit}
            >
              Gửi ghi chú
            </button>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Gợi ý ghi chú:</h3>
              <div className="flex flex-wrap space-x-2">
                {noteSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="bg-gray-200 px-3 py-1 rounded text-sm"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-1/3">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Thông tin khách hàng</h2>
            {isEditing ? (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Tên</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-2 border rounded-md"
                    value={customerInfo.name}
                    onChange={handleCustomerInfoChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Địa chỉ</label>
                  <input
                    type="text"
                    name="address"
                    className="w-full p-2 border rounded-md"
                    value={customerInfo.address}
                    onChange={handleCustomerInfoChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full p-2 border rounded-md"
                    value={customerInfo.phone}
                    onChange={handleCustomerInfoChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 border rounded-md"
                    value={customerInfo.email}
                    onChange={handleCustomerInfoChange}
                  />
                </div>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={handleCustomerInfoSave}
                >
                  Lưu thông tin
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center mb-4">
                  <img
                    src={customerInfo.avatar}
                    alt="Avatar"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {customerInfo.name}
                    </h3>
                    <p className="text-sm">{customerInfo.address}</p>
                    <p className="text-sm">{customerInfo.phone}</p>
                    <p className="text-sm">{customerInfo.email}</p>
                  </div>
                </div>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded"
                  onClick={() => setIsEditing(true)}
                >
                  Chỉnh sửa thông tin
                </button>
              </>
            )}
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-xl font-semibold mb-4">
              Phương thức thanh toán
            </h2>
            <div>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value="Cash on Delivery"
                  checked={selectedPaymentMethod === "Cash on Delivery"}
                  onChange={handlePaymentMethodChange}
                  className="form-radio"
                />
                <span className="ml-2">Thanh toán khi nhận hàng</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Credit Card"
                  checked={selectedPaymentMethod === "Credit Card"}
                  onChange={handlePaymentMethodChange}
                  className="form-radio"
                />
                <span className="ml-2">Thẻ tín dụng</span>
              </label>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handlePaymentMethodConfirm}
              >
                Xác nhận phương thức thanh toán
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg"
              onClick={handlePayment}
            >
              Hoàn tất thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
