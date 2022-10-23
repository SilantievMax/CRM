import express from "express";
import passport from "passport";
import upload from "../middleware/upload.js";
import * as Controller from "../controllers/category.js";

const router = express.Router();

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    Controller.getAll
);
router.get(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    Controller.getById
);
router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    Controller.remove
);
router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    upload.single("image"),
    Controller.create
);
router.patch(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    upload.single("image"),
    Controller.update
);

export default router;
