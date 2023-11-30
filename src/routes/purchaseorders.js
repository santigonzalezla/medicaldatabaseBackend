import express from "express";
import {
    getPurchaseOrder,
    getAllPurchaseOrders,
    createPurchaseOrder,
    updatePurchaseOrder,
    deletePurchaseOrder
} from "../controller/purchaseorder.js";

const router = express.Router();

router.get("/:id", getPurchaseOrder);
router.get("/", getAllPurchaseOrders);
router.post("/", createPurchaseOrder);
router.put("/:id", updatePurchaseOrder);
router.delete("/:id", deletePurchaseOrder);

export default router;