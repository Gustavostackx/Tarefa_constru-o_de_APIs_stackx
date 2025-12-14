import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controller.js";
import { validate } from "../middleware/validate.js";
import { userSchema } from "../validation/user.validation.js";

const router = Router();

router.post("/", validate(userSchema), createUser);
router.get("/", getAllUsers);

export default router;
