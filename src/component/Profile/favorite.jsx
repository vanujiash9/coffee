import { useState, useEffect } from "react";

const FavoritesSection = () => {
  // State to hold favorite items
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when component mounts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-semibold mb-4">Danh sách yêu thích</h2>

      {/* Giao diện danh sách yêu thích */}
      <div className="favorite-list">
        {favorites.length > 0 ? (
          favorites.map((item, index) => (
            <div key={index} className="favorite-item flex items-center mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>Giá: {item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Danh sách yêu thích của bạn đang trống.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesSection;
