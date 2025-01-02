const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Make sure this is provided
  },
  email: {
    type: String,
    required: true, // Make sure this is provided
  },
  quantity: {
    type: Number,
    required: true, // Make sure this is provided
  },
  product: {
    type: String,
    required: true, // Example field for the product title
  },
  price: {
    type: String,
    required: true, // Example field for price
  },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
