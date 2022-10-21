import express from "express";
import * as Controller from "../controllers/order.js";

const router = express.Router();

router.get("/", Controller.getAll);
router.post("/", Controller.create);

export default router;
