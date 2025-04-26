const Product = require('../db/models/product-Schema');

module.exports.getProducts = async (req, res) => {
  try {
    const { price, minprice, maxprice, category } = req.query;
    console.log(req.query);
    const query = {};
    if (minprice && maxprice) {
      query.price = { $gte: Number(minprice), $lte: Number(maxprice) };
    }
    if (category) {
      query.category = category;
    }
    // console.log(query);
    const response = await Product.find(query);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Product.find(id);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.addProduct = async (req, res) => {
  try {
    const body = req.body;
    console.log(req.body);
    const response = await Product.create(body);
    return res.status(200).json({ message: 'Product Added' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const response = await Product.findByIdAndUpdate(id, body);
    return res.status(200).json({ message: 'Updated' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Deleted Product' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
