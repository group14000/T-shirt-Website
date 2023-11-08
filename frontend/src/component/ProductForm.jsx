// ProductForm.jsx
import "./ProductForm.css";
function ProductForm({ formData, handleInputChange, handleSubmit }) {
  return (
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
        <select name="size" value={formData.size} onChange={handleInputChange}>
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
  );
}

export default ProductForm;
