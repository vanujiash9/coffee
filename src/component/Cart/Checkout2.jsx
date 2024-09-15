import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout2 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [note, setNote] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const buyNowCart = localStorage.getItem("buyNowCart");
      if (buyNowCart) {
        const items = JSON.parse(buyNowCart);
        setCartItems(items);
        const total = items.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
        setTotalPrice(total);
      } else {
        navigate("/coffee/home");
      }
    } catch (error) {
      console.error("Error fetching buyNowCart from localStorage:", error);
      navigate("/coffee/home");
    }
  }, [navigate]);

  const handleNoteChange = (e) => setNote(e.target.value);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handlePayment = () => {
    const { name, address, phone, email } = customerInfo;
    if (name && address && phone && email) {
      if (!validateEmail(email)) {
        Swal.fire({
          title: "Email không hợp lệ",
          text: "Vui lòng nhập địa chỉ email hợp lệ.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
  
      if (!validatePhone(phone)) {
        Swal.fire({
          title: "Số điện thoại không hợp lệ",
          text: "Vui lòng nhập số điện thoại 10 số.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
  
      // Create order object
      const order = {
        id: Date.now(), // Unique ID for the order
        date: new Date().toLocaleDateString(),
        total: `${finalPrice} VNĐ`,
        status: 'Đã thanh toán',
        items: cartItems,
        customer: { name, address, phone, email },
        note,
      };
  
      // Get existing orders from localStorage
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
      // Add the new order to existing orders
      existingOrders.push(order);
      // Save updated orders back to localStorage
      localStorage.setItem("orders", JSON.stringify(existingOrders));
  
      Swal.fire({
        title: "Thanh toán thành công!",
        text: "Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        localStorage.removeItem("buyNowCart"); // Clear the cart after payment
        navigate("/coffee/home"); // Redirect to home page
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
  const finalPrice = totalPrice * 1000 - discount + shipping;

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold mb-2">Xác nhận đơn hàng</h1>
        <p className="text-lg text-gray-600">Kiểm tra và hoàn tất thanh toán</p>
      </div>
      <div className="flex flex-col xl:flex-row space-y-6 xl:space-y-0 xl:space-x-8">
        <div className="w-full xl:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Chi tiết đơn hàng</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b py-2">
                <div className="flex items-center">
                  <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600">Số lượng: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">{item.price*1000} VNĐ</p>
              </div>
            ))}
            <div className="flex justify-between mt-4 text-lg font-semibold">
              <p>Tổng cộng:</p>
              <p>{totalPrice * 1000} VNĐ</p>
            </div>
            <div className="flex justify-between mt-2 text-lg font-semibold">
              <p>Giảm giá:</p>
              <p>- {discount} VNĐ</p>
            </div>
            <div className="flex justify-between mt-2 text-lg font-semibold">
              <p>Phí giao hàng:</p>
              <p>{shipping} VNĐ</p>
            </div>
            <div className="flex justify-between mt-4 text-lg font-semibold border-t pt-4">
              <p>Tổng thanh toán:</p>
              <p>{finalPrice} VNĐ</p>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Thông tin khách hàng</h2>
          <div className="bg-white shadow-md rounded-lg p-4">
            <input
              type="text"
              placeholder="Họ và tên"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
              className="mb-4 p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Địa chỉ"
              value={customerInfo.address}
              onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
              className="mb-4 p-2 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
              className="mb-4 p-2 border rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
              className="mb-4 p-2 border rounded w-full"
            />
            <textarea
              placeholder="Ghi chú"
              value={note}
              onChange={handleNoteChange}
              className="p-2 border rounded w-full"
            />
            <button
              onClick={handlePayment}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 w-full"
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout2;
