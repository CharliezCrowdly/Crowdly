const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    tasktype: {
      type: String,
      default: "pending",
    },

    text: {
      type: String,
      default: null,
    },
    userid: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
