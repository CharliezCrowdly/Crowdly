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
const socket = require("socket.io");

//routes import
const authRouter = require("./routes/authRoute");
const postRouter = require("./routes/postRoute");
const commentRouter = require("./routes/commentRoute");
const profileRouter = require("./routes/profileRoute");
const todoRouter = require("./routes/todoRoute");
const chatRoute = require("./routes/chatRoute");
const jobRouter = require("./routes/jobRoute");
const messagesRoute = require("./routes/messageRoute");

// middleware import
const errorHandlerMiddleware = require("./middleware/error-handler");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
//middleware

app.use(cors());

app.use(express.static("./public"));
app.use(express.static("./uploads"));

app.use(express.json());

app.use(fileUpload());
//routes

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", authenticateUser, postRouter);
app.use("/api/v1/comment", authenticateUser, commentRouter);
app.use("/api/v1/profile", authenticateUser, profileRouter);
app.use("/api/v1/todo", authenticateUser, todoRouter);
app.use("/api/v1/job", authenticateUser, jobRouter);
app.use("/api/chat", authenticateUser, chatRoute);
app.use("/api/message", authenticateUser, messagesRoute);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    const server = app.listen(port, () => {
      console.log(`Server is listening at ${port}...`);
    });

    var clients = {};

    // Socket Connection
    const io = socket(server, {
      pingTimeout: 60000, //Close connection after 60s of inactivity
      cors: {
        origin: "*",
        credentials: true,
      },
    });

    io.on("connection", (socket) => {
      console.log("Connected to socket.io");

      socket.on("test", (res) => {
        console.log(res);
      });

      socket.on("setup", (userData) => {
        socket.join(userData._id);
        socket.emit("connected");
      });
      socket.on("setupApp", (id) => {
        socket.join(id);
        socket.emit("connected");
        clients[id] = socket;
        //print length of clients
        console.log(Object.keys(clients).length);
      });

      socket.on("join chat", (room) => {
        socket.join(room);
        console.log("User Joined Room: " + room);
      });

      socket.on("message", (data) => {
        let reciverId = data.reciverId;
        if (clients[reciverId]) {
          console.log("Sending Message to: " + reciverId);
          clients[reciverId].emit("message", data);
        }

        console.log(data);
      });

      socket.on("typing", (room) => {
        socket.in(room).emit("typing");
      });
      socket.on("stop typing", (room) => {
        socket.in(room).emit("stop typing");
      });

      socket.on("new message", (newMessageRecieved) => {
        var chat = newMessageRecieved.chat;
        if (!chat.users) return console.log("Users not defined");

        chat.users.forEach((user) => {
          if (user._id === newMessageRecieved.sender._id) return;
          socket.in(user._id).emit("message recieved", newMessageRecieved);
        });
      });

      socket.off("setup", () => {
        console.log("User Disconnected");
        socket.leave(userData._id);
      });
    });
  } catch (err) {
    console.log(err);
  }
};
start();

module.exports = app;
