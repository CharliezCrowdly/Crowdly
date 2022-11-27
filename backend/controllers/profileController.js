const Post = require( "../models/Post");
const User = require( "../models/user");

const { BAD_REQUESTError } = require("../errors/index");
const { StatusCodes } = require("http-status-codes");


const path = require( "path");





const searchProfile = async (req, res) => {
  const users = await User.find({ username: { $regex: req.query.username } })
    .limit(10)
    .select("name username profilePicture");

  if (!users) {
    throw BAD_REQUESTError("no user found");
  }

  res.status(StatusCodes.OK).json({ users });
};



module.exports = {
  
  searchProfile,

};
