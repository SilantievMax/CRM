import express from "express";
import passport from "passport";
import * as Controller from "../controllers/position.js";

const router = express.Router();

router.get(
    "/:categoryId",
    passport.authenticate("jwt", { session: false }),
    Controller.getByCategoryId
);
router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    Controller.create
);
router.patch(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    Controller.update
);
router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    Controller.remove
);

export default router;
