const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },

  sector: {
    type: String,
    required: true,
    enum: ["IT", "Finance", "Health", "Education", "Engineering", "Others"],
    // type: String,
  },
  skills: [
    {
      type: String,
    },
  ],
  sallary: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  responsibilities: [
    {
      type: String,
    },
  ],
  requirements: [
    {
      type: String,
    },
  ],
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  openDate: {
    type: Date,
    default: Date.now,
  },
  closeDate: {
    type: Date,
    required: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  applicants: [
    {
      applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      status: {
        type: String,
        default: "Under-Review",
      },
      appliedDate: {
        type: Date,
        default: Date.now,
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
});

module.exports = mongoose.model("Job", jobSchema);