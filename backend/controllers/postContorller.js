const Post = require("../models/Post");
const User = require("../models/user");

const { BAD_REQUESTError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");
const checkPermissions = require("../utils/checkPermission");



const path = require("path");

const postUpload = async (req, res, next) => {
  const { location, description, filetype } = req.body;
  const userId = req.user.userId;

  if (req.files) {
    const { postfile } = req.files;
    const postPath = postfile;
    const src = `/posts/${postfile.name}`;

    const imagePath = path.join(
      __dirname,
      "../public/posts/" + `${postfile.name}`
    );
    await postPath.mv(imagePath);

    const post = await Post.create({
      postfile: src,
      location: location,
      description: description,
      userid: userId,
      filetype: filetype,
    });
    res.status(StatusCodes.CREATED).json({ post });
  } else {
    throw new BAD_REQUESTError("please provide file");
  }
};

const getPosts = async (req, res) => {
  try {
    const following = await User.findOne({ _id: req.user.userId });
    const posts = await Post.find({
      userid: [...following.following, req.user.userId],
    })
      .populate("userid likesid", "profilePicture username location")
      .sort("-createdAt");

    res.status(StatusCodes.OK).json({ posts });
  } catch (error) {
    console.log(error);
  }
};

const likePosts = async (req, res) => {
  const post = await Post.find({
    _id: req.params.id,
    likesid: req.user.userId,
  });

  if (post.length === 0) {
    const like = await Post.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { likesid: req.user.userId },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ like });
  } else {
    res.status(StatusCodes.OK).json({ post });
  }
};

const unlikePost = async (req, res) => {
  const like = await Post.findOneAndUpdate(
    { _id: req.params.id },
    {
      $pull: { likesid: req.user.userId },
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ like });

  if (!like) {
    throw new BAD_REQUESTError('this post does"not exist');
  }
};

module.exports = {
  postUpload,
  getPosts,
  likePosts,
  unlikePost,
};
