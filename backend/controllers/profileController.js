const Post = require("../models/Post");
const User = require("../models/UserModel");

const { BAD_REQUESTError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");

const path = require("path");

const searchProfile = async (req, res) => {
  const users = await User.find({ username: { $regex: req.query.username } })
    .limit(10)
    .select("name username profilePicture");

  if (!users) {
    throw BAD_REQUESTError("no user found");
  }

  res.status(StatusCodes.OK).json({ users });
};

const followUser = async (req, res) => {
  const user = await User.find({
    _id: req.params.id,
    followers: req.user.userId,
  });

  if (user.length === 0) {
    const followers = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { followers: req.user.userId },
      },
      { new: true }
    );
    const following = await User.findOneAndUpdate(
      { _id: req.user.userId },
      {
        $push: { following: req.params.id },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ success: true });
  } else {
    res.status(StatusCodes.OK).json({ success: false, usercount: user.length });
  }
};

const unfollowUser = async (req, res) => {
  const user = await User.find({
    _id: req.params.id,
    followers: req.user.userId,
  });

  if (user.length > 0) {
    const followers = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $pull: { followers: req.user.userId },
      },
      { new: true }
    );
    const following = await User.findOneAndUpdate(
      { _id: req.user.userId },
      {
        $pull: { following: req.params.id },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ success: false, followers, following });
  } else {
    res.status(StatusCodes.OK).json({ success: true });
  }
};

const recommend = async (req, res) => {
  try {
    const post = await User.aggregate([
      { $match: { _id: { $ne: req.user.userId } } },
      { $sample: { size: 4 } },
    ]);

    const user = await User.populate(post, { path: "userid" });
    res.status(StatusCodes.OK).json({ user });
  } catch (e) {
    res.status(StatusCodes.OK).json({ error: e });
  }
};
module.exports = {
  searchProfile,
  followUser,
  unfollowUser,
  recommend,
};
