const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    tasktype: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      default: null,
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Todo", TodoSchema);
