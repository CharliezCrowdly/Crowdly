const mongoose = require("mongoose");

const validator = require("validator");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,

    required: [true, "please provide name"],

    minlength: 4,

    trim: true,
  },

  username: {
    type: String,

    required: [true, "please provide username"],

    minlength: 4,

    trim: true,
  },

  usertype: {
    type: String,

    required: [true, "please provide usertype"],

    minlength: 4,

    trim: true,
  },

  email: {
    type: String,

    required: [true, "Please provide email"],

    validate: {
      validator: validator.isEmail,

      message: "Please provide a valid email",
    },

    unique: true,
  },

  password: {
    type: String,

    required: [true, "Please provide password"],

    minlength: 6,

    select: false,
  },
  profilePicture: {
    type: String,
    default: "/uploads/download.jpg",
  },
  coverpage: {
    type: String,
    default: "/assest/sakura.gif",
  },

  appliedJobs: [
    {
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
      appliedDate: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        default: "Under-Review",
      },
    },
  ],

  savedJobs: [
    {
      job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job",
      },
      savedDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],

  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "my city",
  },
  followers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  following: [{ type: mongoose.Types.ObjectId, ref: "User" }],
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME } // expiresIn:'1d'
  );
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
const userModel = mongoose.model("User", UserSchema);
module.exports = userModel; // create user model in the schema
