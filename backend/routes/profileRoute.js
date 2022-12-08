const express = require("express");

const router = express.Router();
const {
  searchProfile,
  followUser,
  unfollowUser,
} = require("../controllers/profileController");

router.route("/search").get(searchProfile);
router.route("/unfollow/:id").patch(unfollowUser);
router.route("/:id").patch(followUser);


module.exports = router;
