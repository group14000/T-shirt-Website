// CartModal.jsx
import "./CartModal.css";

function CartModal({ productList, onCloseCart, onRemoveFromCart }) {
  // Calculate the total price
  const totalPrice = productList.reduce(
    (total, product) => total + parseFloat(product.price) * product.quantity,
    0
  );

  const handleRemoveFromCart = (product) => {
    onRemoveFromCart(product);
  };

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <span className="close" onClick={onCloseCart}>
          &times;
        </span>
        <h2>Shopping Cart</h2>
        <ul>
          {productList.map((product, index) => (
            <li key={index}>
              Product Name: {product.productName} - Description:{" "}
              {product.description} - Price: ${product.price} - Size:{" "}
              {product.size} - Quantity: {product.quantity}
              <button onClick={() => handleRemoveFromCart(product)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartModal;
