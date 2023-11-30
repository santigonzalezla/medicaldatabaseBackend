import express from "express";
import {
    getInventory,
    getAllInventories,
    createInventory,
    updateInventory,
    deleteInventory
} from "../controller/inventory.js";

const router = express.Router();

router.get("/:id", getInventory);
router.get("/", getAllInventories);
router.post("/", createInventory);
router.put("/:id", updateInventory);
router.delete("/:id", deleteInventory);

export default router;