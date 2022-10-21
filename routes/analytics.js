import express from "express";
import * as Controller from "../controllers/analytics.js";

const router = express.Router();

router.get("/overview", Controller.overview);
router.get("/analytics", Controller.analytics);

export default router;
