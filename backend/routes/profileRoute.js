const express = require("express");

const router = express.Router();
const {
  searchProfile,
  followUser,
  unfollowUser,
  recommend,

  userProfile,

  updateUserDetails,

} = require("../controllers/profileController");

router.route("/:id").patch(followUser).get(userProfile);
router.route("/search").get(searchProfile);
router.route("/userrandom").get(recommend);
router.route("/unfollow/:id").patch(unfollowUser);


router.route("/:id").patch(followUser);
router.route("/updateUser").put(updateUserDetails);

module.exports = router;
