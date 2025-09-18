import express from "express";
import { getUsers, addUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/get", getUsers);
router.post("/add", addUser);

export default router;
