const matkhau = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-4">Thông báo</h2>
        <div className="notification-container">
          <div className="notification bg-yellow-100 p-4 rounded-lg mb-2">
            <p className="font-bold">Thông báo 1:</p>
            <p className="text-sm">Đơn hàng của bạn đã được xác nhận.</p>
            <span className="text-xs text-gray-500">9:30 AM</span>
          </div>
          <div className="notification bg-yellow-100 p-4 rounded-lg mb-2">
            <p className="font-bold">Thông báo 2:</p>
            <p className="text-sm">
              Bạn có một tin nhắn mới từ hỗ trợ khách hàng.
            </p>
            <span className="text-xs text-gray-500">9:15 AM</span>
          </div>
          <div className="notification bg-yellow-100 p-4 rounded-lg mb-2">
            <p className="font-bold">Thông báo 3:</p>
            <p className="text-sm">Cập nhật: Chính sách bảo mật đã thay đổi.</p>
            <span className="text-xs text-gray-500">8:45 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default matkhau;
