import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Fill all necessary fields"],
  },
  price: {
    type: String,
    required: [true, "Fill all necessary fields"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = model("Product", productSchema);

export default Product;
