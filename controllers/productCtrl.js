const Product = require('../models/product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');

    res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  getProducts,
};