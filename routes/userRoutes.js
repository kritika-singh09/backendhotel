// import express from "express";
// import { getUsers, addUser } from "../controllers/userController.js";

// const router = express.Router();

// router.get("/get", getUsers);
// router.post("/add", addUser);

// export default router;
import express from "express";
import { getUsers, addUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// GET all users
router.get("/", getUsers);

// POST new user (signup)
router.post("/signup", addUser);

// POST login
router.post("/login", loginUser);

export default router;
