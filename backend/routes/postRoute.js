const express = require("express");
const router = express.Router();
const {
  getPosts,
  postUpload,
  likePosts,
  unlikePost,
  savePosts,
  unsavePosts
} = require("../controllers/postContorller");

router.route("/upload").post(postUpload);
router.route("/getposts").get(getPosts);
router.route("/likepost/:id").patch(likePosts);
router.route("/unlikepost/:id").patch(unlikePost);
router.route("/savepost/:id").patch(savePosts);
router.route("/unsavepost/:id").patch(unsavePosts);

module.exports = router;
