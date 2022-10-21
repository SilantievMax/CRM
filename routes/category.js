import express from "express";
import * as Controller from "../controllers/category.js";

const router = express.Router();

router.get("/", Controller.getAll);
router.get("/:id", Controller.getById);
router.delete("/:id", Controller.remove);
router.post("/", Controller.create);
router.patch("/:id", Controller.update);

export default router;
