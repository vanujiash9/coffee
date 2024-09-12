import { Link } from 'react-router-dom';
import { FaUser, FaProductHunt, FaShoppingCart, FaChartBar, FaCog } from 'react-icons/fa';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/admin/users" className="dashboard-card bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600">
          <FaUser className="text-4xl mb-2" />
          <h2 className="text-xl">User Management</h2>
          <p>Manage users and their roles</p>
        </Link>
        
        <Link to="/admin/products" className="dashboard-card bg-green-500 text-white p-4 rounded-lg shadow-lg hover:bg-green-600">
          <FaProductHunt className="text-4xl mb-2" />
          <h2 className="text-xl">Product Management</h2>
          <p>Manage products and inventory</p>
        </Link>
        
        <Link to="/admin/orders" className="dashboard-card bg-orange-500 text-white p-4 rounded-lg shadow-lg hover:bg-orange-600">
          <FaShoppingCart className="text-4xl mb-2" />
          <h2 className="text-xl">Order Management</h2>
          <p>Track and manage orders</p>
        </Link>
        
        <Link to="/admin/reports" className="dashboard-card bg-purple-500 text-white p-4 rounded-lg shadow-lg hover:bg-purple-600">
          <FaChartBar className="text-4xl mb-2" />
          <h2 className="text-xl">Reports & Analytics</h2>
          <p>View reports and analytics</p>
        </Link>
        
        <Link to="/admin/settings" className="dashboard-card bg-gray-500 text-white p-4 rounded-lg shadow-lg hover:bg-gray-600">
          <FaCog className="text-4xl mb-2" />
          <h2 className="text-xl">Settings</h2>
          <p>Configure system settings</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
