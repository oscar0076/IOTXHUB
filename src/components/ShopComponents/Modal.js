import React, { useState } from 'react';

const ProductCard = ({ imgSrc, title, description, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the form
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the form
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={openModal}>Buy Now</button>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Purchase {title}</h2>
            <form>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" name="quantity" min="1" required />

              <button type="submit">Confirm Purchase</button>
            </form>
            <button className="close-modal" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
