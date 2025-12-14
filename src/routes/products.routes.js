import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/products.controllers.js";

import { validate } from "../middleware/validate.js";
import { productSchema } from "../validation/product.validation.js";

const router = Router();

router.post("/", validate(productSchema), createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", validate(productSchema), updateProduct);
router.delete("/:id", deleteProduct);

export default router;
