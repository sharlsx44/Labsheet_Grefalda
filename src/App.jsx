import { useState, useEffect } from "react";
import MenuCard from "./Components/MenuCard";
import "./Components/MenuCard.css";
import "./App.css";

const initialMenu = [
  {
    id: 1,
    name: "iPhone",
    description: "The iPhone is a line of smartphones designed and marketed by Apple Inc. It runs on Apple's iOS operating system and is known for its sleek design, high-quality camera, and user-friendly interface.",
    price: 100,
    category: "Mobile",
    quantity: 10,
    rating: 4.5,
    image: "https://imgs.search.brave.com/ldOJA6UFpr4UagBC-f7OqOHevrmJ3ywCMaYXC29ODlU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWFjcnVtb3Jz/LmNvbS9hcnRpY2xl/LW5ldy8yMDI1LzA5/L2lQaG9uZS0xNy1D/b2xvcnMuanBn",
  },
  {
    id: 2,
    name: "Computer Monitor",
    price: 120,
    description: "A computer monitor is an output device that displays information in visual form. It is an essential component of a computer system, allowing users to interact with the computer and view the graphical user interface (GUI).",
    category: "Computer",
    quantity: 8,
    rating: 4.2,
    image: "https://imgs.search.brave.com/togm6o_WTgMlNd69fgxtCcEKGSa1SuptguuDFbq2MmI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy5r/dGNwbGF5LmNvbS9j/ZG4vc2hvcC9maWxl/cy9IMzJTMTdGXzJl/MTQ4YjQ0LTVkMmYt/NGFmNS1iNjc5LWY4/YTg4MTAzNDAwMS5w/bmc_dj0xNzQ1NzQ4/MDc0JndpZHRoPTQw/MDA",
  },
  {
    id: 3,
    name: "Keyboard",
    price: 60,
    description: "A keyboard is a panel of buttons or keys that allows a user to input text, numbers, and commands into a computer or other electronic device.",
    category: "Accessories",
    quantity: 15,
    rating: 4.0,
    image: "https://imgs.search.brave.com/NyhWqXC2ULbnjjM9G9Gd50meXyh8XgCqvy2GZvIOwFQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWRy/YWdvbnNob3AuY29t/L2Nkbi9zaG9wL2Zp/bGVzL1JlZHJhZ29u/QU5UT05JVU1LNzQ1/UFJPS2V5Ym9hcmRf/MS5wbmc_dj0xNzc2/MzIzMTc3JndpZHRo/PTUzMw",
  },
  {
    id: 4,
    name: "CCTV Camera",
    price: 50,
    description: "A CCTV camera is a type of video surveillance camera that is used to monitor and record activities in a specific area. It is commonly used for security purposes in homes, businesses, and public spaces.",
    category: "Camera",
    quantity: 5,
    rating: 3.8,
    image: "https://imgs.search.brave.com/HS8w7tHQql_fJs9g5WoytlwbGUX-rsI88vh5t0aiXIk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kb21h/ci5jb20vY2RuL3No/b3AvcHJvZHVjdHMv/cngxZDR6LTEuanBn/P3Y9MTc1NDgzOTM4/MiZ3aWR0aD0xMDAw",
  },
  {
    id: 5,
    name: "Television",
    price: 70,
    description: "A television (TV) is an electronic device that receives broadcast signals and displays them on a screen. It is used for entertainment, news, and educational purposes, providing a wide range of content to viewers.",
    category: "TV",
    quantity: 7,
    rating: 4.1,
    image: "https://imgs.search.brave.com/jeLrgoVCRt6TUGtWhccP8GEkBRzsiAeq0ifIb0j2ScA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmZtLmNvbS9kdy9p/bWFnZS92Mi9CREZN/X1BSRC9vbi9kZW1h/bmR3YXJlLnN0YXRp/Yy8tL1NpdGVzLW5m/bS1tYXN0ZXItY2F0/YWxvZy9kZWZhdWx0/L2R3ZDU2Y2M5MTQv/aW1hZ2VzLzA2OS80/NC82OTQ0Nzg1Mi0x/LmpwZz9zdz0zNjUm/c2g9MzY1JnNtPWZp/dA",
  },
  {
    id: 6,
    name: "Mouse",
    price: 30,
    description: "A computer mouse is a handheld input device that allows users to interact with a computer by controlling the movement of a cursor on the screen. It typically has buttons and a scroll wheel for various functions.",
    category: "Accessories",
    quantity: 12,
    rating: 4.3,
    image: "https://imgs.search.brave.com/3MSZP4fH7W6WeJz9xT31_M_iNySbEMFN-V9KSB9j_dM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/ZS5hbG5hYmFhLmNv/bS9jZG4vc2hvcC9m/aWxlcy9Mb2dpdGVj/aEdQUk9YU1VQRVJM/SUdIVFdpcmVsZXNz/R2FtaW5nTW91c2Vf/YWxuYWJhYS5jb21f/YzgzMDBhYmItZGE0/Yy00MGUyLWI5MmUt/YWUzYmRiMTYxYjE5/LmpwZz92PTE2ODQ0/MDc4NjYmd2lkdGg9/MTk0Ng",
  },
  {
    id: 7,
    name: "CPU",
    price: 20,
    description: "A central processing unit (CPU) is the primary component of a computer that performs most of the processing inside a computer. It executes instructions from programs and is often referred to as the 'brain' of the computer.",
    category: "Computer",
    quantity: 9,
    rating: 4.4,
    image: "https://imgs.search.brave.com/P7znYLdFb2hbLZl8GqechGroUsHE-lYhsTP4XLRoibA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcnRwaXhlbC5h/aS9zcGFpL3FfbG9z/c3krcmV0X2ltZyt0/b19hdXRvL3d3dy5w/Y2d1aWRlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/My81OTAwWC5qcGc",
  },
  {
    id: 8,
    name: "GPU",
    description: "A graphics processing unit (GPU) is a specialized electronic circuit designed to accelerate the processing of images and videos. It is commonly used in gaming, video editing, and other applications that require high-performance graphics rendering.",
    price: 50,
    category: "Computer",
    quantity: 6,
    rating: 4.7,
    image: "https://imgs.search.brave.com/VAfaoR9aBmvdQDJRCqheW1ZH2dlrg7v7SbH-W1b_5-s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzExSTBWNWlzMkwu/anBn",
  },
  {
    id: 9,
    name: "Printer",
    price: 45,
    description: "A printer is an output device that produces a hard copy of digital documents or images on paper. It is commonly used in offices and homes for printing text, graphics, and photos.",
    category: "Computer",
    quantity: 11,
    rating: 3.9,
    image: "https://imgs.search.brave.com/2ojLDBKysbrbpX0FnCN2F57Lu-jNRRs9QYoPS1FcXXA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5vZmZpY2VkZXBv/dC5jb20vaW1hZ2Vz/L3RfbGFyZ2UsZl9h/dXRvL3Byb2R1Y3Rz/LzkyMTU2MDAvMS5q/cGc",
  },
  {
    id: 10,
    name: "Smart Watch",
    price: 25,
    description: "A smart watch is a wearable device that combines the functionality of a traditional watch with advanced features such as fitness tracking, notifications, and connectivity to smartphones. It allows users to access information and perform tasks directly from their wrist.",
    category: "Mobile",
    quantity: 14,
    rating: 4.0,
    image: "https://imgs.search.brave.com/xs_O5KjN3VIG2cmPcdzgFKdsTKlY28ppVkooTsrbeGk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXBwbGUuY29tL3Yv/YXBwbGUtd2F0Y2gt/c2VyaWVzLTExL2Mv/aW1hZ2VzL292ZXJ2/aWV3L29uLXRoZS1n/by93cmlzdF9mbGlj/a19hbHRfZW5kZnJh/bWVfX2MyNTVkdnd1/cjljaV9sYXJnZS5q/cGc",
  },
];

function App() {
  const cleanMenu = (items) =>
    items.filter((item) => item.name !== "DSLR Camera");

  const [menu, setMenu] = useState(() => {
    const storedMenu = localStorage.getItem("menuItems");
    if (storedMenu) {
      try {
        return cleanMenu(JSON.parse(storedMenu));
      } catch (error) {
        console.warn("Failed to parse stored menu, falling back to initial menu.", error);
      }
    }
    return cleanMenu(initialMenu);
  });

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formError, setFormError] = useState("");
  const [newProduct, setNewProduct] = useState({
    image: "",
    name: "",
    category: "",
    description: "",
    price: "",
    quantity: "",
    rating: "",
  });

  const categories = ["All", ...new Set(menu.map((item) => item.category))];

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menu));
  }, [menu]);

  const filteredMenu =
    selectedCategory === "All"
      ? menu
      : menu.filter((item) => item.category === selectedCategory);

  const handleDelete = (id) => {
    setMenu(menu.filter((item) => item.id !== id));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = (event) => {
    event.preventDefault();

    const missingField = Object.entries(newProduct).find(
      ([, value]) => value.toString().trim() === ""
    );

    if (missingField) {
      setFormError("Please fill in all fields before submitting.");
      return;
    }

    const parsedPrice = Number(newProduct.price);
    const parsedQuantity = Number(newProduct.quantity);
    const parsedRating = Number(newProduct.rating);
    const normalizedCategory = newProduct.category.trim();
    const existingCategories = new Set(menu.map((item) => item.category));

    if (!existingCategories.has(normalizedCategory)) {
      setFormError("There's no such category.");
      return;
    }

    if (
      isNaN(parsedPrice) ||
      parsedPrice <= 0 ||
      isNaN(parsedQuantity) ||
      parsedQuantity < 0 ||
      isNaN(parsedRating) ||
      parsedRating < 0 ||
      parsedRating > 5
    ) {
      setFormError(
        "Price must be a positive number, quantity must be a non-negative integer, and rating must be between 0 and 5."
      );
      return;
    }

    const nextId = menu.length ? Math.max(...menu.map((item) => item.id)) + 1 : 1;
    const productToAdd = {
      id: nextId,
      image: newProduct.image,
      name: newProduct.name,
      category: normalizedCategory,
      description: newProduct.description,
      price: parsedPrice,
      quantity: parsedQuantity,
      rating: parsedRating,
    };

    setMenu([productToAdd, ...menu]);
    setNewProduct({
      image: "",
      name: "",
      category: "",
      description: "",
      price: "",
      quantity: "",
      rating: "",
    });
    setFormError("");
    setSelectedCategory("All");
    setShowForm(false);
  };

  const handleAddToCart = (item, quantity) => {
    if (quantity <= 0) {
      return;
    }

    const menuItem = menu.find((menuEntry) => menuEntry.id === item.id);
    if (!menuItem || menuItem.quantity < quantity) {
      alert("Not enough stock available.");
      return;
    }

    setMenu((prevMenu) =>
      prevMenu
        .map((menuEntry) =>
          menuEntry.id === item.id
            ? { ...menuEntry, quantity: menuEntry.quantity - quantity }
            : menuEntry
        )
        .filter((menuEntry) => menuEntry.quantity > 0)
    );

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
        <h1>Electronic Shop</h1>
        <div className="header-actions">
          <button
            className="add-product-btn"
            onClick={() => setShowForm((prev) => !prev)}
          >
            {showForm ? "Close Form" : "Add Product"}
          </button>
          <button
            className="cart-btn"
            onClick={() => setShowCart(!showCart)}
            disabled={cart.length === 0}
          >
            🛒 Cart ({cart.length})
          </button>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <form
            className="product-form product-modal"
            onSubmit={(event) => {
              event.stopPropagation();
              handleAddProduct(event);
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <h2>Add New Product</h2>
              <button
                type="button"
                className="close-modal-btn"
                onClick={() => setShowForm(false)}
              >
                ✕
              </button>
            </div>

            {formError && <p className="form-error">{formError}</p>}
            <div className="form-grid">
              <label>
                Feature Image URL
                <input
                  type="url"
                  name="image"
                  value={newProduct.image}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
              </label>

              <label>
                Product Name
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                />
              </label>

              <label>
                Product Category
                <input
                  type="text"
                  name="category"
                  value={newProduct.category}
                  onChange={handleInputChange}
                  placeholder="e.g. Mobile, Computer"
                />
              </label>

              <label>
                Description
                <textarea
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                  placeholder="Enter a short product description"
                />
              </label>

              <label>
                Price
                <input
                  type="number"
                  name="price"
                  min="0"
                  step="0.01"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  placeholder="Enter price"
                />
              </label>

              <label>
                Quantity
                <input
                  type="number"
                  name="quantity"
                  min="0"
                  step="1"
                  value={newProduct.quantity}
                  onChange={handleInputChange}
                  placeholder="Enter quantity"
                />
              </label>

              <label>
                Rating
                <input
                  type="number"
                  name="rating"
                  min="0"
                  max="5"
                  step="0.1"
                  value={newProduct.rating}
                  onChange={handleInputChange}
                  placeholder="Enter rating 0-5"
                />
              </label>
            </div>

          
            <button type="submit" className="submit-btn">
              Add Product
            </button>
          </form>
        </div>
      )}

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <div className="cart-header">
              <h2>Shopping Cart</h2>
              <button className="close-btn" onClick={() => setShowCart(false)}>
                ✕
              </button>
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
                        <p>
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                        <p className="cart-item-total">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
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
                  <h3>Total: ${calculateTotal().toFixed(2)}</h3>
                  <button className="checkout-btn">Checkout</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className="menu-container">
        {filteredMenu.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            quantity={item.quantity}
            rating={item.rating}
            onDelete={handleDelete}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;