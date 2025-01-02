const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');



// Route pour créer une commande
router.post('/orderRoutes', async (req, res) => {
  const { name, email, quantity, product, price } = req.body;

  try {
    const order = new Order({ name, email, quantity, product, price });
    await order.save();
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    console.error('Error creating order:', error);  // Log the error
    res.status(500).json({ message: 'Failed to create order', error });
  }
});


module.exports = router;
