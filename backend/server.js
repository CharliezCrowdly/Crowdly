require("dotenv").config();
require("express-async-errors");
const express = require("express");

const app = express();
const http = require("http");
const cors = require("cors");

// const path = require("path");

// const fileUpload = require("express-fileupload");
// app.use(fileUpload());

// const morgan = require("morgan");

const connectDB = require("./db/connect");

const authenticateUser = require("./middleware/authentication");
//routes import
const authRouter = require("./routes/authRoute");
const postRouter = require("./routes/postRoute");
const commentRouter = require("./routes/commentRoute");
const profileRouter = require("./routes/profileRoute");
const todoRouter = require("./routes/todoRoute");
const jobRouter = require("./routes/jobRoute");

// middleware import
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.static("./public"));

app.use(express.json());
app.use(cors());

//routes

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", authenticateUser, postRouter);
app.use("/api/v1/comment", authenticateUser, commentRouter);
app.use("/api/v1/profile", authenticateUser, profileRouter);
app.use("/api/v1/todo", authenticateUser, todoRouter);
app.use("/api/v1/job", authenticateUser, jobRouter);

app.use(errorHandlerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening at ${port}...`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();

module.exports = app;
