const express = require("express");
const router = express.Router();
const {
  getPosts,
  postUpload,
  likePosts,
  unlikePost,
} = require("../controllers/postContorller");

router.route("/upload").post(postUpload);
router.route("/getposts").get(getPosts);
router.route("/likepost/:id").patch(likePosts);
router.route("/unlikepost/:id").patch(unlikePost);

module.exports = router;
