import React, { useState } from "react";
import "../ShopComponents/ProductCard.css";  // Your existing CSS styles

const ProductCard = ({ imgSrc, title, description, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: 1,
  });

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);  
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false); 
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
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
          product: title, 
          price: price,
        }),
      });
  
      if (response.ok) {
        
        setIsModalOpen(false);
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        
      }
    } catch (error) {
      console.error('Error submitting purchase:', error);
      
    }
  };
  

  return (
    <div className="product-card">
      <img src={imgSrc} alt={title} width="150" height="150" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Price: {price}</strong></p>
      
      {/* "Buy Now" button */}
      <button onClick={openModal}>Buy Now</button>

      {/* Modal - Conditional rendering */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Purchase {title}</h2>
            
            {/* Form inside the modal */}
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="quantity">Quantity:</label>
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
            
            {/* Close button */}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
