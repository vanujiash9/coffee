// import { useParams } from "react-router-dom";

// const OrderDetail = () => {
//   const { id } = useParams();
  
//   // Tìm kiếm và hiển thị thông tin đơn hàng theo ID
//   // Ví dụ: giả sử bạn có danh sách đơn hàng trong trạng thái hoặc từ API
//   // Đây là ví dụ đơn giản, trong thực tế bạn có thể fetch dữ liệu từ API

//   const orders = [
//     { id: 123456, date: "12/09/2024", amount: "1.200.000 VND", status: "Đã giao", items: ["Espresso", "Latte"] },
//     { id: 654321, date: "10/09/2024", amount: "850.000 VND", status: "Đang giao", items: ["Cappuccino"] },
//     { id: 789012, date: "08/09/2024", amount: "2.500.000 VND", status: "Đã hủy", items: ["Macchiato", "Mocha"] }
//   ];

//   const order = orders.find(order => order.id === parseInt(id));

//   if (!order) return <p>Đơn hàng không tìm thấy.</p>;

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-4">
//       <h2 className="text-2xl font-semibold mb-4">Chi Tiết Đơn Hàng #{order.id}</h2>
//       <p><strong>Ngày đặt hàng:</strong> {order.date}</p>
//       <p><strong>Số tiền:</strong> {order.amount}</p>
//       <p><strong>Trạng thái:</strong> {order.status}</p>
//       <p><strong>Danh sách sản phẩm:</strong> {order.items.join(", ")}</p>
//     </div>
//   );
// };

// export default OrderDetail;
