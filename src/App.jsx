import { useState } from "react";
import MenuCard from "./Components/MenuCard";
import "./Components/MenuCard.css";
import "./App.css";

function App() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Burger",
      price: 120,
      rating: 9.5,
      image: "https://via.placeholder.com/280x180.png?text=Burger",
    },
    {
      id: 2,
      name: "Pizza",
      price: 250,
      rating: 9.2,
      image: "https://via.placeholder.com/280x180.png?text=Pizza",
    },
    {
      id: 3,
      name: "Fries",
      price: 80,
      rating: 8.8,
      image: "https://via.placeholder.com/280x180.png?text=Fries",
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleDelete = (id) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  const handleAddToCart = (item, quantity) => {
    if (quantity > 0) {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        setCart(
          cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          )
        );
      } else {
        setCart([...cart, { ...item, quantity }]);
      }
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Event Planner</h1>
        <button className="cart-btn" onClick={() => setShowCart(!showCart)}>
          🛒 Cart ({cart.length})
        </button>
      </div>

      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <div className="cart-header">
              <h2>Shopping Cart</h2>
              <button className="close-btn" onClick={() => setShowCart(false)}>✕</button>
            </div>
            
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <h3>{item.name}</h3>
                        <p>₱{item.price.toFixed(2)} x {item.quantity}</p>
                        <p className="cart-item-total">₱{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <h3>Total: ₱{calculateTotal().toFixed(2)}</h3>
                  <button className="checkout-btn">Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="menu-container">
        {menu.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            rating={item.rating}
            image={item.image}
            onDelete={handleDelete}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;