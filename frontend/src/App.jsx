// App.js
import { useState, useEffect } from "react";
import "./App.css";
import ProductForm from "./component/ProductForm";
import ProductItem from "./component/ProductItem";
import CartModal from "./component/CartModal";

function App() {
  // Retrieve data from local storage on initial load
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [productList, setProductList] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    size: "Medium",
    quantity: 1,
  });
  const [cartCount, setCartCount] = useState(storedCartItems.length);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(storedCartItems);

  useEffect(() => {
    // Save cart items to local storage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const product = { ...formData };
    setProductList([...productList, product]);
    setFormData({
      productName: "",
      description: "",
      price: "",
      size: "Medium",
      quantity: 1,
    });
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
    setShowCart(true);
  };

  const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item !== product);
    setCartItems(updatedCartItems);
    setCartCount(cartCount - 1);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div className="App">
      <div className="cart-button">
        <button onClick={() => setShowCart(true)}>Cart ({cartCount})</button>
      </div>
      <h1>Add Products</h1>
      <ProductForm formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      <div className="product-list">
        {productList.map((product, index) => (
          <ProductItem key={index} product={product} onAddToCart={() => handleAddToCart(product)} />
        ))}
      </div>
      {showCart && (
        <CartModal productList={cartItems} onCloseCart={handleCloseCart} onRemoveFromCart={handleRemoveFromCart} />
      )}
    </div>
  );
}

export default App;
