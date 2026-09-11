const User = require('../models/user');

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ err: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
      },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ err: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
};

module.exports = {
  getUser,
  updateUser,
};