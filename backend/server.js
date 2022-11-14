require("dotenv").config();
require("express-async-errors");
const express = require("express");

const app = express();
const http = require("http");

const path = require("path");

const morgan = require("morgan");

const connectDB = require("./db/connect");
const fileUpload = require("express-fileupload");
const authenticateUser = require("./middleware/authentication");

const cors = require("cors");
const authRouter = require("./routes/authRoute");
const postRouter = require("./routes/postRoute");
// middleware
const errorHandlerMiddleware = require("./middleware/error-handler");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
//middleware

app.use(cors());

app.use(express.static("./public"));

app.use(express.json());

app.use(fileUpload());
//routes

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", authenticateUser, postRouter);

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
