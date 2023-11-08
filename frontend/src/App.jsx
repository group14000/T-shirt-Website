// App.js
import { useState, useEffect } from "react"; // Import necessary React hooks
import "./App.css"; // Import CSS file for styling
import ProductForm from "./component/ProductForm"; // Import the ProductForm component
import ProductItem from "./component/ProductItem"; // Import the ProductItem component
import CartModal from "./component/CartModal"; // Import the CartModal component

function App() {
  // Retrieve data from local storage on initial load
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Load cart items from local storage or use an empty array
  const [productList, setProductList] = useState([]); // Initialize state for the list of products
  const [formData, setFormData] = useState({
    // Initialize state for form data
    productName: "",
    description: "",
    price: "",
    size: "Medium",
    quantity: 1,
  });
  const [cartCount, setCartCount] = useState(storedCartItems.length); // Initialize cart count state
  const [showCart, setShowCart] = useState(false); // Initialize state to control whether the cart modal is shown
  const [cartItems, setCartItems] = useState(storedCartItems); // Initialize state for cart items

  useEffect(() => {
    // Save cart items to local storage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Store the updated cart items in local storage
  }, [cartItems]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const product = { ...formData }; // Create a product object from the form data
    setProductList([...productList, product]); // Add the new product to the product list
    setFormData({
      productName: "",
      description: "",
      price: "",
      size: "Medium",
      quantity: 1,
    });
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]); // Add a product to the cart
    setCartCount(cartCount + 1); // Increase the cart count
    setShowCart(true); // Show the cart modal
  };

  const handleRemoveFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item !== product); // Remove a product from the cart
    setCartItems(updatedCartItems);
    setCartCount(cartCount - 1); // Decrease the cart count
  };

  const handleCloseCart = () => {
    setShowCart(false); // Close the cart modal
  };

  return (
    <div className="App">
      <div className="cart-button">
        <button onClick={() => setShowCart(true)}>Cart ({cartCount})</button>
      </div>
      <h1>Add Products</h1>
      <ProductForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <div className="product-list">
        {productList.map((product, index) => (
          <ProductItem
            key={index}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          /> // Map and render each product using the ProductItem component
        ))}
      </div>
      {showCart && (
        <CartModal
          productList={cartItems}
          onCloseCart={handleCloseCart}
          onRemoveFromCart={handleRemoveFromCart}
        /> // Render the cart modal when showCart is true
      )}
    </div>
  );
}

export default App;
