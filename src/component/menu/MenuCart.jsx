import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const MenuCart = ({ img, title, price }) => {
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

        Swal.fire({
            icon: 'success',
            title: 'Added to cart',
            text: `${title} has been added to your cart.`,
            confirmButtonText: 'OK',
        });
    };

    return (
        <div className="w-full lg:w-1/4 p-5 shadow-md rounded-lg flex flex-col items-center">
            <img 
                src={img} 
                alt={title} 
                className="w-full h-25 rounded-xl object-cover mb-4" 
            />
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
