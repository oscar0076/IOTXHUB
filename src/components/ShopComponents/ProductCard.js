import React, { useState } from "react";
import "../ShopComponents/ProductCard.css";  // Your existing CSS styles
// Step 1: Create the ProductCard component with a modal (form)

const ProductCard = ({ imgSrc, title, description, price }) => {
  // Step 2: State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Step 3: Open the modal
  const openModal = () => {
    setIsModalOpen(true);  // Set modal visibility to true
  };

  // Step 4: Close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Set modal visibility to false
  };

  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} width="150" height="150" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Price: {price}</strong></p>
      
      {/* Step 5: Buy Now button */}
      <button onClick={openModal}>Buy Now</button>

      {/* Step 6: Modal - Conditional rendering */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Purchase {title}</h2>
            
            {/* Step 7: Form inside modal */}
            <form>
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" required />

              <button type="submit">Confirm Purchase</button>
            </form>
            
            {/* Step 8: Close button */}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
