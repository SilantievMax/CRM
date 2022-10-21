import express from "express";
import * as Controller from "../controllers/position.js";

const router = express.Router();

router.get("/:categoryId", Controller.getByCategoryId);
router.post("/", Controller.create);
router.patch("/:id", Controller.update);
router.delete("/:id", Controller.remove);

export default router;
