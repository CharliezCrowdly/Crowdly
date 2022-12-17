const Post = require("../models/Post");
const User = require("../models/UserModel");

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

    if (posts.length < 1) {
      const post = await Post.aggregate([{ $sample: { size: 27 } }]);

      const posts = await Post.populate(post, { path: "userid" });
      return res.status(StatusCodes.OK).json({ posts });
    }

    res.status(StatusCodes.OK).json({ posts });
  } catch (error) {
    console.log(error);
  }
};

const likePosts = async (req, res) => {
  console.log(req.params.id);
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

const savePosts = async (req, res) => {
  const post = await Post.find({
    _id: req.params.id,
    saved: req.user.userId,
  });

  if (post.length === 0) {
    const bookmark = await Post.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { saved: req.user.userId },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ bookmark });
  }
  res.status(StatusCodes.OK).json({ post });
};

const unsavePosts = async (req, res) => {
  const post = await Post.find({
    _id: req.params.id,
    saved: req.user.userId,
  });

  if (post.length > 0) {
    const bookmark = await Post.findOneAndUpdate(
      { _id: req.params.id },
      {
        $pull: { saved: req.user.userId },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ bookmark });
  }
  res.status(StatusCodes.OK).json({ post });
};

const postDetail = async (req, res) => {
  const { id: postId } = req.params;
  const post = await Post.findById({ _id: postId })
    .populate("userid likesid", "profilePicture username location")
    .sort("-createdAt");

  if (!post) {
    throw new BAD_REQUESTError("no such post");
  }

  res.status(StatusCodes.OK).json({ post });
};

const explorePost = async (req, res) => {
  const post = await Post.aggregate([{ $sample: { size: 27 } }
  ]);

  const posts = await Post.populate(post, { path: "userid" });
  res.status(StatusCodes.OK).json({ posts });
};

const UpdatePost = async (req, res) => {
  const { id: postId } = req.params;

  const { description, location } = req.body;

  if (!description) {
    throw new BAD_REQUESTError("Please provide description");
  }

  const post = await Post.findOne({ _id: postId })
    .populate("userid likesid", "profilePicture username location")
    .sort("-createdAt");

  if (!post) {
    throw new NotFoundError(`No post with id ${postId}`);
  }

  if (req.files) {
    const { filePath } = req.files;

    const src = `/posts/${filePath.name}`;

    const imagePath = path.join(
      __dirname,
      "../public/posts/" + `${filePath.name}`
    );
    await filePath.mv(imagePath);
    const { filetype } = req.body;
    post.filetype = filetype;
    post.postfile = src;
  }

  // check permissions

  // checkPermissions(req.user,post.userid);

  post.location = location;
  post.description = description;

  await post.save();

  res.status(StatusCodes.OK).json({ post });
};

const savedPost = async (req, res) => {
  try {
    const posts = await Post.find({
      saved: req.user.userId,
    })
      .populate("userid likesid", "profilePicture username location")
      .sort("-createdAt");

    console.log(posts.length);

    res.status(StatusCodes.OK).json({ posts });
  } catch (error) {
    console.log(error);
  }
};


const deletePost = async (req, res) => {
  const { id: postId } = req.params;

  const post = await Post.findOne({ _id: postId });

  if (!post) {
    throw new CustomError.NotFoundError(`No post with id : ${postId}`);
  }
  console.log(req.user);
  console.log(req.createdBy);

  checkPermissions(req.user, post.userid);

  await post.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Job removed" });
};

module.exports = {
  postUpload,
  getPosts,
  likePosts,
  unlikePost,
  savePosts,
  unsavePosts,
  postDetail,
  UpdatePost,
  explorePost,
  savedPost,
  deletePost
};
