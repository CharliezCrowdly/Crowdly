const { StatusCodes } = require("http-status-codes");
const User = require("../models/UserModel");
const nodemailer = require("nodemailer");

const { BAD_REQUESTError, UnAuthenticatedError } = require("../errors/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASSWORD,
  },
});

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

const allUsers = async (req, res, next) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { username: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword)
    .find({ _id: { $ne: req.user._id } })
    .select("-password -__v -isVerified -createdAt ");
  res.send(users);
};

const verifyEmail = async (req, res, next) => {
  const email = req.body.email;
  const user = await User.findOne({
    email,
  }).select("+password");
  if (user) {
    const secret = process.env.JWT_SECRET + user.password;
    const payload = {
      user: {
        id: user.id,
        email: user.email,
      },
    };
    console.log("Hre");
    const token = jwt.sign(payload, secret, { expiresIn: "15m" });
    const link = `http://localhost:3000/resetpassword/${user.id}/${token}`;
    const mailOptions = {
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Verify Your Email",
      html: `<p>Verify your email address to complete the reset process.</p>
  <p> This link expires in <b>15 mins</b> </p>
  <p> Your Unique link is <b>${link}</b> </p>
`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return res.status(200).json({
      success: true,
    });
  } else {
    return res.status(200).json({
      success: false,
    });
  }
};

const resetPasswordVerify = async (req, res, next) => {
  const { token, id } = req.params;
  const user = await User.findById(id).select("+password");
  if (user) {
    const secret = process.env.JWT_SECRET + user.password;
    try {
      const payload = jwt.verify(token, secret);
      res.status(200).json({
        success: true,
        id: user._id,
      });
    } catch (error) {
      res.status(200).json({
        success: false,
      });
    }
  } else {
    res.status(200).json({
      success: false,
    });
  }
};

const resetpassword = async (req, res, next) => {
  const { id, password } = req.body;
  if (!id || !password) {
    throw new BAD_REQUESTError("Please provide all values");
  }
  if (password.length < 8) {
    throw new BAD_REQUESTError("Password must be atleast 6 characters");
  }

  try {
    const user = await User.findById(id).select("+password");
    user.password = password;
    await user.save();
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
    });
  }
};

//add or update card details

module.exports = {
  register,
  login,
  allUsers,
  verifyEmail,
  resetPasswordVerify,
  resetpassword,
};
