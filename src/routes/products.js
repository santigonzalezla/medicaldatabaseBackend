import express from "express";
import {
    getProduct,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/product.js";

const router = express.Router();

router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;