const express = require("express");

const router = express.Router();
const {
  searchProfile,
  followUser,
  unfollowUser,
  recommend,

  userProfile,

  updateUserDetails,
  removefollower,
  editcoverpage

} = require("../controllers/profileController");

router.route("/editcoverpage").patch(editcoverpage);
router.route("/search").get(searchProfile);
router.route("/userrandom").get(recommend);
router.route("/:id").patch(followUser).get(userProfile);
router.route("/unfollow/:id").patch(unfollowUser);

router.route("/removefollower/:id").patch(removefollower);


router.route("/:id").patch(followUser);
router.route("/updateUser").put(updateUserDetails);


module.exports = router;
