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

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json(category);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

const showCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);

    if (!category) {
      return res.status(404).json({ err: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.categoryId,
      {
        name: req.body.name,
        description: req.body.description,
        picture: req.body.picture,
      },
      { new: true, runValidators: true }
    );

    if (!category) {
      return res.status(404).json({ err: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.categoryId);

    if (!category) {
      return res.status(404).json({ err: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  getCategories,
  createCategory,
  showCategory,
  updateCategory,
  deleteCategory,
};