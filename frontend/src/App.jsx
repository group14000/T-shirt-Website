import  { useState } from 'react';
import './App.css';

function App() {
  const [productList, setProductList] = useState([]);
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    price: '',
    size: 'Medium',
    quantity: 1,
  });
  const [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

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
      productName: '',
      description: '',
      price: '',
      size: 'Medium',
      quantity: 1,
    });
  };

  return (
    <div className="App">
      <div className="cart-button">
        <button onClick={() => setShowCart(true)}>Cart ({cartCount})</button>
      </div>
      <h1>Add Products</h1>
      <form>
        <div className="form-section">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-section">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-section">
          <label>Size:</label>
          <select
            name="size"
            value={formData.size}
            onChange={handleInputChange}
          >
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </div>
        <div className="form-section">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="product-list">
        {productList.map((product, index) => (
          <div className="product" key={index}>
            <p>
              Product Name: {product.productName} - Description: {product.description} - Price: ${product.price} - Size: {product.size} - Quantity: {product.quantity}
            </p>
            <button
              onClick={() => {
                setCartCount(cartCount + 1);
                setShowCart(true);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {showCart && (
        <div className="cart-modal">
          <div className="cart-content">
            <span className="close" onClick={() => setShowCart(false)}>
              &times;
            </span>
            <h2>Shopping Cart</h2>
            <ul>
              {productList.map((product, index) => (
                <li key={index}>
                  Product Name: {product.productName} - Description: {product.description} - Price: ${product.price} - Size: {product.size} - Quantity: {product.quantity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
