import express from "express";
import {
    getProvider,
    getAllProviders,
    createProvider,
    updateProvider,
    deleteProvider
} from "../controller/provider.js";

const router = express.Router();

router.get("/:id", getProvider);
router.get("/", getAllProviders);
router.post("/", createProvider);
router.put("/:id", updateProvider);
router.delete("/:id", deleteProvider);

export default router;