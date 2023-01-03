const Post = require("../models/Post");
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

const { BAD_REQUESTError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");

const path = require("path");

const userProfile = async (req, res) => {
  const { id: userId } = req.params;

  const user = await User.findOne({ _id: userId }).populate(
    "followers following",
    "profilePicture username"
  );
  const post = await Post.find({ userid: userId })
    .populate("userid likesid", "profilePicture username location")
    .sort("-createdAt");

  const followings = await User.find({ _id: [...user.following] });
  const followers = await User.find({ _id: [...user.followers] });

  res.status(StatusCodes.OK).json({ user, post, followings, followers });
};
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
    const { followers } = await User.findById(req.user.userId);

    const post = await User.aggregate([
      { $match: { _id: { $nin: [req.user.userId] } } },
      { $sample: { size: 4 } },
    ]);

    const user = await User.populate(post, { path: "userid" });
    res.status(StatusCodes.OK).json({ user });
  } catch (e) {
    res.status(StatusCodes.OK).json({ error: e });
  }
};

const updateUserDetails = async (req, res, next) => {
  const userId = req.user.userId;
  console.log(req.body);

  var user;
  try {
    user = await User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          name: req.body.values.fullname,
          sector: req.body.values.sector,
          description: req.body.values.description,
          educationSet: req.body.values.educationSet.map((edu) => ({
            degree: edu.degree,
            college: edu.college,
            startDate: edu.startDate,
            endDate: edu.endDate,
          })),
          workSet: req.body.values.workSet.map((work) => ({
            title: work.title,
            company: work.company,
            location: work.location,
            startDate: work.startDate,
            endDate: work.endDate,
          })),
          skillSet: req.body.values.skills.map((skill) => ({
            skill: skill.skill,
          })),
        },
      }
    );
    const updatedDetails = await User.findById(userId);
    return res.status(200).json({
      status: true,
      user: updatedDetails,
    });
  } catch (e) {
    console.log(e);
  }
  return res.status(500).json({
    status: false,
  });
};

const removefollower = async (req, res) => {
  const user = await User.find({
    _id: req.user.userId,
    followers: req.params.id,
  });
  if (!user) {
    throw new BAD_REQUESTError("user not found");
  }

  if (user.length > 0) {
    const followers = await User.findOneAndUpdate(
      { _id: req.user.userId },
      {
        $pull: { followers: req.params.id },
      },
      { new: true }
    );
    const following = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $pull: { following: req.user.userId },
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ success: false, followers, following });
  } else {
    res.status(StatusCodes.OK).json({ success: true });
  }
};

const editcoverpage = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });

  if (req.files) {
    console.log(req.files);
    const { coverpage } = req.files;
    const postPath = coverpage;

    const src = `/posts/${coverpage.name}`;

    const imagePath = path.join(
      __dirname,
      "../public/posts/" + `${coverpage.name}`
    );

    await postPath.mv(imagePath);
    user.coverpage = src;
    await user.save();
    console.log(user);
    res.status(StatusCodes.OK).json({ user });
  }
};

const editprofileimg = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });

  if (req.files) {
    console.log(req.files);
    const { profileimg } = req.files;
    const postPath = profileimg;

    const src = `/posts/${profileimg.name}`;

    const imagePath = path.join(
      __dirname,
      "../public/posts/" + `${profileimg.name}`
    );

    await postPath.mv(imagePath);
    user.profilePicture = src;
    await user.save();
    res.status(StatusCodes.OK).json({ user });
  }
};

const changepassword = async (req, res) => {
  const { oldp, newp, vnewp } = req.body;
  if (!oldp || !newp || !vnewp) {
    throw new BAD_REQUESTError("provide all value");
  }
  let user = await User.findById(req.user.userId).select("+password");
  const salt = await bcrypt.genSalt(10);
  const isPasswordCorrect = await user.comparePassword(oldp);
  if (newp.length < 4) {
    throw new BAD_REQUESTError("New Password is too short");
  }

  if (isPasswordCorrect) {
    if (newp === vnewp) {
      const newpassword = await bcrypt.hash(newp, salt);
      user.password = newp;

      await user.save();
      return res
        .status(StatusCodes.OK)
        .json({ success: true, message: "Password Changed " });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "verfiy Password incorrect " });
    }
  } else {
    console.log(user.password);
    return res.status(400).json({ success: false, message: "Wrong password " });
  }
};

module.exports = {
  searchProfile,
  followUser,
  unfollowUser,
  recommend,
  userProfile,
  updateUserDetails,
  removefollower,
  editcoverpage,
  editprofileimg,
  changepassword,
};
