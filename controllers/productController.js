import Product from "../models/Product.js";


/**
 * POST /create
 * @summary Creates a product.
 * @bodyContent {ProductBody} application/json
 * @bodyRequired
 * @response 200 - Created
 */
const createProduct = async (req, res) => {
  try {
    const { name, price, createdAt } = req.body;

    const product = await Product.create({ name, price, createdAt });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


/**
 * GET /
 * @summary Returns all products.
 * @response 200 - OK
 * @responseContent {Product} 200.application/json
 */

const getProduct = async (req, res) => {
  try {
    const product = await Product.find();

    res.status(200).json(product);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

export { createProduct, getProduct };
