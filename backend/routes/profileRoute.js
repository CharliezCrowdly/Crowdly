const express = require("express");

const router = express.Router();
const {
  searchProfile,
  followUser,
  unfollowUser,
  recommend,
} = require("../controllers/profileController");

router.route("/search").get(searchProfile);
router.route("/userrandom").get(recommend);
router.route("/unfollow/:id").patch(unfollowUser);
router.route("/:id").patch(followUser);


module.exports = router;
