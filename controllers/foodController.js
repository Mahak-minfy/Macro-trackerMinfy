const Food = require('../models/Food');

// Search food by name
exports.searchFoods = async (req, res) => {
  try {
    const search = req.query.search || '';
    const foods = await Food.find({
      name: { $regex: search, $options: 'i' }
    }).limit(20);
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch foods', error: err.message });
  }
};
