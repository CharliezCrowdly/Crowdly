const mongoose = require("mongoose"); ;

const PostSchema = new mongoose.Schema(
  {
    postfile: {
    
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    filetype:{
      type:String,
      required:true,

    },

    likesid: { type: Array, default: [] },
    commentsid: { type: Array, default: [] },
    userid: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    saved: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchema);


