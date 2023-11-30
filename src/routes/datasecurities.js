import express from "express";
import {
    getDataSecurity,
    getAllDataSecurities,
    createDataSecurity,
    updateDataSecurity,
    deleteDataSecurity
} from "../controller/datasecurity.js";

const router = express.Router();

router.get("/:id", getDataSecurity);
router.get("/", getAllDataSecurities);
router.post("/", createDataSecurity);
router.put("/:id", updateDataSecurity);
router.delete("/:id", deleteDataSecurity);

export default router;