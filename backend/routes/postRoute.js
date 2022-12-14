const express = require("express");
const router = express.Router();
const {
  getPosts,
  postUpload,
  likePosts,
  unlikePost,
  savePosts,
  unsavePosts,
  UpdatePost,
  postDetail,
  explorePost,
  savedPost
} = require("../controllers/postContorller");

router.route("/upload").post(postUpload);
router.route("/getposts").get(getPosts);
router.route("/likepost/:id").patch(likePosts);
router.route("/unlikepost/:id").patch(unlikePost);
router.route("/savepost/:id").patch(savePosts);
router.route("/explorepost").get(explorePost);

router.route("/unsavepost/:id").patch(unsavePosts);
router.route("/updatepost/:id").patch(UpdatePost);
router.route("/postdetail/:id").get(postDetail)
router.route("/savedPost").get(savedPost);



module.exports = router;
