import express from "express";
const router = express.Router();

import {
  createProduct,
  getProduct,
} from "../controllers/productController.js";

router.post("/create", createProduct);
router.get("/", getProduct);
export default router;
