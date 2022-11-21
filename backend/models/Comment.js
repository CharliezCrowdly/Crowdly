const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    likes: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    commentedBy: { type: mongoose.Types.ObjectId, ref: "User", required: true },

    postId: { type: mongoose.Types.ObjectId, ref: "Post" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
