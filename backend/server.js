require("dotenv").config();
require("express-async-errors");
const express = require("express");

const app = express();
const http = require("http");

const path = require("path");

// const fileUpload = require("express-fileupload");

const morgan = require("morgan");

const connectDB = require("./db/connect");

const authenticateUser = require("./middleware/authentication");
const busboyBodyParser = require("busboy-body-parser");
app.use(busboyBodyParser());

const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//routes import
const authRouter = require("./routes/authRoute");
const postRouter = require("./routes/postRoute");
const commentRouter = require("./routes/commentRoute");
const profileRouter = require("./routes/profileRoute");
const todoRouter = require("./routes/todoRoute");
const jobRouter = require("./routes/jobRoute");

// middleware import
const errorHandlerMiddleware = require("./middleware/error-handler");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
//middleware

app.use(cors());
// app.use(fileUpload());
var busboy = require("connect-busboy");
//...
app.use(busboy());

app.use(express.static("./public"));

app.use(express.json());
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// app.use(bodyParser.json());

//routes

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", authenticateUser, postRouter);
app.use("/api/v1/comment", authenticateUser, commentRouter);
app.use("/api/v1/profile", authenticateUser, profileRouter);
app.use("/api/v1/todo", authenticateUser, todoRouter);
app.use("/api/v1/job", authenticateUser, jobRouter);

app.use(errorHandlerMiddleware);

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
