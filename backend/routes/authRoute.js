const express = require("express");
const router = express.Router();
const {
  register,
  login,
  allUsers,
  verifyEmail,
  resetPasswordVerify,
  resetpassword,
} = require("../controllers/authController");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/user").post(verifyEmail);
router.route("/user/:id/:token").post(resetPasswordVerify);
router.route("/resetpassword").post(resetpassword);

module.exports = router;
