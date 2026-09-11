const Category = require('../models/category');

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  getCategories,
};