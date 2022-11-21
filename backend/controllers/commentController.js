const Post = require("../models/Post");
const Comments = require("../models/Comment");
const { StatusCodes } = require("http-status-codes");
const NotFoundError = require("../errors/not-found");
const checkPermissions = require("../utils/checkPermission");

const createComment = async (req, res) => {
  const { postId, content } = req.body;

  const post = await Post.findById(postId);
  if (!post) return res.status(400).json({ msg: "This post does not exist." });

  const newComment = new Comments({
    commentedBy: req.user.userId,
    content,
    postId,
  });

  await Post.findOneAndUpdate(
    { _id: postId },
    {
      $push: { commentsid: newComment._id },
    },
    { new: true }
  );

  await newComment.save();

  res.status(StatusCodes.OK).json({ newComment });
};

const deleteComment = async (req, res) => {
  const cmt = await Comments.findOne({ _id: req.params.id });

  if (cmt) {
    const post = await Post.findOneAndUpdate(
      { _id: cmt.postId },
      {
        $pull: { commentsid: cmt._id },
      },
      { new: true }
    );
    console.log(post);

    await Comments.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(StatusCodes.OK).json({ msg: "Deleted Comment!" });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ msg: "comment not found" });
  }
};

const getComments = async (req, res) => {
  const comment = await Comments.find({ postId: req.params.id })
    .populate("commentedBy", "profilePicture username")
    .sort("-createdAt");

  res.status(StatusCodes.OK).json({ comment });
};

const UpdateComment = async (req, res) => {
  const { id: commentId } = req.params;

  console.log(req.body.content);
  const { content } = req.body;
  const comment = await Comments.findOne({ _id: commentId });

  if (!comment) {
    throw new NotFoundError("no comment found");
  }

  checkPermissions(req.user, comment.commentedBy);

  comment.content = content;
  await comment.save();
  res.status(StatusCodes.OK).json({ comment });
};
module.exports = { createComment, deleteComment, getComments, UpdateComment };
