import { Router } from "express";
import passport from "passport";
import { userPremium } from "../controllers/users.controllers.js";

const router = Router();

router.get(
  "/premium/:uid",
  passport.authenticate("jwt", { session: false }),
  userPremium
);

export default router;
