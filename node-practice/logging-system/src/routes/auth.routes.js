const express = require("express");
const { register, login } = require("../controllers/auth.controller");
const rateLimit = require("../middlewares/rateLimit.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", rateLimit, login);

module.exports = router;