import express from "express";
import * as Controller from "../controllers/auth.js";

const router = express.Router();

router.post("/login", Controller.login);
router.post("/register", Controller.register);

export default router;
