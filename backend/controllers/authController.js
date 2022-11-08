
const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");

const { BAD_REQUESTError } = require("../errors/index");

const register = async (req, res) => {
  const { name, email, password, username, usertype } = req.body;

  if (!name || !username || !email || !password || !usertype) {
    throw new BAD_REQUESTError("please provide all the values");
  }

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    throw new BAD_REQUESTError("Email already in use");
  }

  const usernameAlreadyExists = await User.findOne({ username });

  if (usernameAlreadyExists) {
    throw new BAD_REQUESTError("Username already in use");
  }
};

if (req.files) {
  const profilePath = req.files.profilePicture;
  const src = `/uploads/${profilePath.name}`;
  const profilePicture = src || "hello";

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${profilePath.name}`
  );
  await profilePath.mv(imagePath);

  const user = await User.create({
    name,
    username,
    profilePicture,
    email,
    password,
    usertype,
  });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      _id: user._id,
      email: user.email,
      profilePicture: user.profilePicture,
      name: user.name,
      username: user.username,
      usertype: user.usertype,
    },
    token, // location: user.location,
  });
}
module.exports = {register}
