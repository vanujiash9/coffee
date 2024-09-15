import { useEffect, useState } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const storedOrders = localStorage.getItem("orders");
      if (storedOrders) {
        const parsedOrders = JSON.parse(storedOrders);

        // Check if the parsed data is an array and has elements
        if (Array.isArray(parsedOrders)) {
          setOrders(parsedOrders);
        } else {
          console.error("Stored orders data is not an array.");
        }
      }
    } catch (error) {
      console.error("Failed to retrieve or parse orders from localStorage:", error);
    }
  }, []);

  if (orders.length === 0) {
    return <div className="text-center py-24">Không có đơn hàng nào.</div>;
  }

  return (
    <div>
      <section className="py-24 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Lịch sử đơn hàng</h2>
          <div className="grid grid-cols-1 gap-8">
            {orders.map((order) => (
              <div
                key={order.id}
                className="p-6 bg-white shadow rounded-lg border border-gray-200"
              >
                <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                  <h3 className="font-semibold text-xl text-gray-800">
                    Đơn hàng #{order.id}
                  </h3>
                  <p className="text-gray-500">Ngày: {order.date}</p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {order.total}
                  </h2>
                  <p className="text-lg font-medium text-indigo-600">
                    {order.status}
                  </p>
                </div>
                {order.customer && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Khách hàng</h4>
                    <p className="text-gray-600">Tên: {order.customer.name || "N/A"}</p>
                    <p className="text-gray-600">Địa chỉ: {order.customer.address || "N/A"}</p>
                    <p className="text-gray-600">Điện thoại: {order.customer.phone || "N/A"}</p>
                    <p className="text-gray-600">Email: {order.customer.email || "N/A"}</p>
                  </div>
                )}
                {order.items && order.items.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Chi tiết đơn hàng</h4>
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center mb-4">
                        <img
                          src={item.img || "/path/to/placeholder-image.jpg"} // Use a placeholder if img is missing
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded mr-4"
                        />
                        <div>
                          <h5 className="text-gray-800 font-semibold">{item.title}</h5>
                          <p className="text-gray-600">{item.quantity} x {item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {order.note && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Ghi chú</h4>
                    <p className="text-gray-600">{order.note}</p>
                  </div>
                )}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <button className="rounded-full px-8 py-3 bg-white text-gray-900 border border-gray-300 font-semibold text-base transition hover:bg-gray-50">
                    <a href="/coffee/menu">Mua Lại</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderHistory;
