import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Giả sử sản phẩm được lưu trong localStorage với key là 'products'
    const allProducts = JSON.parse(localStorage.getItem("products")) || [];
    // Lọc các sản phẩm theo ID đơn hàng
    const orderProducts = allProducts.filter(
      (product) => product.orderId === id
    );
    setProducts(orderProducts);
  }, [id]);

  if (products.length === 0)
    return (
      <div className="text-center py-24">No products found for this order.</div>
    );

  return (
    <div>
      <section className="py-24 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Products for Order #{id}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-6 bg-white shadow rounded-lg border border-gray-200"
              >
                <h3 className="font-semibold text-xl text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-500">Price: {product.price}</p>
                <p className="text-gray-500">Quantity: {product.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
