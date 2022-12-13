const express = require("express");

const router = express.Router();
const {
  searchProfile,
  followUser,
  unfollowUser,
  recommend,
  userProfile
} = require("../controllers/profileController");

router.route("/:id").patch(followUser).get(userProfile);
router.route("/search").get(searchProfile);
router.route("/userrandom").get(recommend);
router.route("/unfollow/:id").patch(unfollowUser);


module.exports = router;
