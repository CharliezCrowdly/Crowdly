const express = require("express");
const router = express.Router();
const { register } = require("../controllers/authController");

router.route("/register").post(register);
module.exports = router;
