import React, { useState } from 'react';

const ProductCard = ({ imgSrc, title, description, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: 1,
  });

  // Function to open the form
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the form
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData, // Correct usage of spread operator
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior
    try {
      const response = await fetch('http://localhost:5000/api/orderRoutes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          quantity: formData.quantity,
          product: title,  // Ajout du titre du produit
          price: price,    // Ajout du prix
        }),      });

      if (response.ok) {
        alert('Purchase successful!');
        setIsModalOpen(false); // Close modal after successful submission
      } else {
        alert('Failed to complete the purchase.');
      }
    } catch (error) {
      console.error('Error submitting purchase:', error);
      alert('An error occurred. Please try again.');
    }
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
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                required
              />

              <button type="submit">Confirm Purchase</button>
            </form>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
