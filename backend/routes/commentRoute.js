const express = require("express");

const router = express.Router();
const {
  createComment,
  deleteComment,
  getComments,
  UpdateComment,
} = require("../controllers/commentController");

router.route("/post").post(createComment);
router.route("/delete/:id").delete(deleteComment);
router.route("/get/:id").get(getComments);
router.route("/update/:id").patch(UpdateComment);

module.exports = router;
