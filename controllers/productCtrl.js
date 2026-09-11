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

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

const showProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId).populate(
      'category'
    );

    if (!product) {
      return res.status(404).json({ err: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      {
        ref: req.body.ref,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        pictures: req.body.pictures,
        category: req.body.category,
      },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ err: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);

    if (!product) {
      return res.status(404).json({ err: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  showProduct,
  updateProduct,
  deleteProduct,
};