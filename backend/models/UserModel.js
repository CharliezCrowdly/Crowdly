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

  educationSet: [
    {
      degree: {
        type: String,
      },
      college: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
    },
  ],

  skillSet: [
    {
      skill: { type: String },
    },
  ],

  workSet: [
    {
      title: {
        type: String,
      },
      company: {
        type: String,
      },
      location: {
        type: String,
      },
      work_type: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
    },
  ],

  description: {
    type: String,
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
      proposal: {
        type: String,
        default: "../public/uploads/default.pdf",
      },
      bid: {
        type: Number,
        default: 0,
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

  //store card details
  card: {
    number: {
      type: String,
      // required: true,
    },
    exp_day: {
      type: String,
      // required: true,
    },
    exp_month: {
      type: String,
      // required: true,
    },
    exp_year: {
      type: String,
      // required: true,
    },
    cvc: {
      type: String,
      // required: true,
    },
    holdername: {
      type: String,
      default: "",
    },
  },
  isCardSet: {
    type: Boolean,
    default: false,
  },
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
  console.log("candidatePassword", candidatePassword);
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};
const userModel = mongoose.model("User", UserSchema);
module.exports = userModel; // create user model in the schema
