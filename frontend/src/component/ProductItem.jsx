// ProductItem.jsx
import "./ProductItem.css";

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product">
      <p>
        Product Name: {product.productName} - Description: {product.description} - Price: ${product.price} - Size: {product.size} - Quantity: {product.quantity}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
