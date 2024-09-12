import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Cart = () => {
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
    avatar: "https://bazaarvietnam.vn/wp-content/uploads/2022/01/phim-hay-nhat-cua-lee-do-hyun-ldh_sky.jpg",
  });
  const [, setPaymentMethod] = useState("Cash on Delivery");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Cash on Delivery");

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
    if (quantity < 1) return;

    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: Math.max(quantity, 1) } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateTotalQuantity(updatedCart);
    setCartItems(updatedCart);
    updateTotalPrice(updatedCart);
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

  const discount = 28000;
  const shipping = 8000;
  const finalPrice = totalPrice * 1000 - discount + shipping;

  // Calculate total quantity
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
                      {(item.price * item.quantity * 1000).toLocaleString()} VNĐ
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        className="bg-gray-200 px-3 py-1 rounded"
                        onClick={() =>
                          handleUpdateQuantity(index, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <p className="text-base font-semibold">{item.quantity}</p>
                      <button
                        className="bg-gray-200 px-3 py-1 rounded"
                        onClick={() =>
                          handleUpdateQuantity(index, item.quantity + 1)
                        }
                      >
                        +
                      </button>
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
            <h2 className="text-xl font-semibold mb-4">Tóm tắt</h2>
            <div className="flex justify-between mb-2">
              <p>Tổng cộng</p>
              <p>{(totalPrice * 1000).toLocaleString()} VNĐ</p>
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
            <div className="flex justify-between mb-4 font-semibold">
              <p>Tổng tiền</p>
              <p>{finalPrice.toLocaleString()} VNĐ</p>
            </div>
            <div className="flex justify-between mb-4 font-semibold">
              <p>Số lượng sản phẩm</p>
              <p>{totalQuantity}</p>
            </div>
            
          </div>
        </div>

        <div className="xl:w-1/3">
          <div className="bg-gray-100 p-6 mb-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Thông tin khách hàng</h2>
            <div className="flex items-center mb-4">
              <img
                src={customerInfo.avatar}
                alt="Avatar"
                className="w-16 h-16 object-cover rounded-full mr-4"
              />
              {isEditing ? (
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleCustomerInfoChange}
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Tên"
                  />
                  <input
                    type="text"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleCustomerInfoChange}
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Địa chỉ"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleCustomerInfoChange}
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Số điện thoại"
                  />
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleCustomerInfoChange}
                    className="w-full mb-2 p-2 border border-gray-300 rounded"
                    placeholder="Email"
                  />
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleCustomerInfoSave}
                  >
                    Lưu thay đổi
                  </button>
                </div>
              ) : (
                <div className="flex-1">
                  <p className="text-lg font-semibold">{customerInfo.name}</p>
                  <p>{customerInfo.address}</p>
                  <p>{customerInfo.phone}</p>
                  <p>{customerInfo.email}</p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                    onClick={() => setIsEditing(true)}
                  >
                    Chỉnh sửa thông tin
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Ghi chú cho đơn hàng</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              value={note}
              onChange={handleNoteChange}
            />
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleNoteSubmit}
              >
                Gửi ghi chú
              </button>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Gợi ý ghi chú</h3>
                <ul className="list-disc pl-5">
                  {noteSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="cursor-pointer text-blue-600 underline"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Phương thức thanh toán
            </h2>
            <div className="flex flex-col">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked={selectedPaymentMethod === "Cash on Delivery"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Thanh toán khi nhận hàng
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  checked={selectedPaymentMethod === "Credit Card"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Thẻ tín dụng
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Bank Transfer"
                  checked={selectedPaymentMethod === "Bank Transfer"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Chuyển khoản ngân hàng
              </label>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={handlePaymentMethodConfirm}
              >
                Xác nhận phương thức thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
