import { useState } from "react";

function MenuCard(props) {
  const [count, setCount] = useState(0);
  const stock = Number(props.quantity);

  const getStableRating = () => {
    if (typeof props.rating === "number") {
      return props.rating;
    }

    const seed = props.id ?? props.name.length ?? 0;
    const raw = ((seed * 31 + (props.name?.length ?? 0)) % 41 + 10) / 10;
    return Number(raw.toFixed(1));
  };

  const ratingValue = getStableRating();

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
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
          description: props.description,
          quantity: props.quantity,
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
        <p>${props.price.toFixed(2)}</p>

        <h2>{stock < 5 ? "LOW STOCK:" : "STOCK:"}</h2>
        <p className={stock < 5 ? "stock-low" : ""}>{props.quantity}</p>

        <h2>RATING:</h2>
        <p>{ratingValue.toFixed(1)}</p>

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