import express from "express";
import passport from "passport";
import * as Controller from "../controllers/order.js";

const router = express.Router();

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    Controller.getAll
);
router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    Controller.create
);

export default router;
