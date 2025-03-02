const express = require("express");
const router = express.Router();
const { getAllUsers, createUser,signIn } = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.post("/create", createUser);
router.post("/signIn", signIn);

module.exports = router;
