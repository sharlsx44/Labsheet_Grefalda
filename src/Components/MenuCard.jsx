import { useState } from "react";

function MenuCard(props) {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    if (count > 0) {
      props.onAddToCart(
        {
          id: props.id,
          name: props.name,
          price: props.price,
          rating: props.rating,
          image: props.image,
          description: props.description
        },
        count
      );
      setCount(0);
    } else {
      alert("Please select a quantity first!");
    }
  };

  return (
    <div className="menu-card">
      <div className="image-container">
        <img
          src={props.image}
          alt={props.name}
        />
      </div>

      <div className="info">
        <h2>NAME:</h2>
        <p>{props.name}</p>

        <h2>Description:</h2>
        <p>{props.description}</p>

        <h2>PRICE:</h2>
        <p>₱{props.price.toFixed(2)}</p>

      </div>

      <div className="quantity">
        <button onClick={decrease} disabled={count === 0}>−</button>

        <span>{count}</span>

        <button onClick={increase}>+</button>
      </div>

      <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default MenuCard;