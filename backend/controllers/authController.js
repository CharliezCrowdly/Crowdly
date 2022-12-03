const { StatusCodes } = require("http-status-codes");
const User = require("../models/UserModel");

const { BAD_REQUESTError, UnAuthenticatedError } = require("../errors/index");

const register = async (req, res) => {
  const { name, email, password, username, usertype, cpassword } = req.body;

  if (!name || !username || !email || !password || !usertype) {
    throw new BAD_REQUESTError("please provide all the values");
  }
  var isNumber = /[0-9]/.test(name);

  if (isNumber) {
    throw new BAD_REQUESTError("Name can't contain number");
  }

  if (name.length < 4) {
    throw new BAD_REQUESTError("Name is too short");
  }

  if (password.length < 4) {
    throw new BAD_REQUESTError("Password is too short");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BAD_REQUESTError("Email already in use");
  }

  const usernameAlreadyExists = await User.findOne({ username });
  if (usernameAlreadyExists) {
    throw new BAD_REQUESTError("Username already in use");
  }

  if (password !== cpassword) {
    throw new BAD_REQUESTError("confrim password fail");
  }

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
      token,
      // location: user.location,
    });
  } else {
    const user = await User.create({
      name,
      username,
      email,
      password,
      usertype,
    });
    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({
      user: {
        _id: user._id,

        email: user.email,
        name: user.name,
        username: user.username,
        profilePicture: user.profilePicture,
        usertype: user.usertype,
      },
      token,
      // location: user.location,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    throw new BAD_REQUESTError("Please provide all values");
  }
  const useremail = await User.findOne({ email }).select("+password");
  const username = await User.findOne({ username: email }).select("+password");

  const user = useremail ? useremail : username;

  if (!user) {
    throw new UnAuthenticatedError("Invalid Email or Username");
  }
  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Password");
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

module.exports = { register, login };
