import PropTypes from 'prop-types';
import { useState } from 'react';

const MenuCart = ({ img, title, price }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    const handleAddToCart = () => {
        const quantity = 1; // You can adjust this based on user input if needed
        const item = { img, title, price, quantity };

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = cart.findIndex(cartItem => cartItem.title === title);

        if (itemIndex > -1) {
            cart[itemIndex].quantity += quantity; // Update quantity if item already exists
        } else {
            cart.push(item); // Add new item
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const handleAddToFavorites = () => {
        const item = { img, title, price };
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.find(favItem => favItem.title === title)) {
            favorites.push(item);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            // Update state to reflect changes
            setIsFavorited(true);
        } else {
            // Optionally handle the case where the item is already favorited
        }
    };

    return (
        <div className="w-full lg:w-1/4 p-5 shadow-md rounded-lg flex flex-col items-center relative">
            <img 
                src={img} 
                alt={title} 
                className="w-full h-25 rounded-xl object-cover mb-4" 
            />
            <button 
                className={`absolute top-2 right-2 text-2xl ${isFavorited ? 'text-red-500' : 'text-gray-500'}`}
                onClick={handleAddToFavorites}
            >
                <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                </svg>
            </button>
            <div className="text-center mb-2">
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <div className="text-lg font-bold mb-4">
                {price}
            </div>
            <button 
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark flex items-center justify-center"
                onClick={handleAddToCart}
            >
                Add to cart
            </button>
        </div>
    );
};

MenuCart.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default MenuCart;
