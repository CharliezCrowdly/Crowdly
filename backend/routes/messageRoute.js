const express = require("express");
const router = express.Router();
const {
  allMessages,
  sendMessage,
  allMessagesApp,
  sendMessageApp,
} = require("../controllers/messageController");

router.route("/").post(sendMessage);
router.route("/app").post(sendMessageApp);
router.route("/:chatId").get(allMessages);
router.route("/app/:chatId").get(allMessagesApp);

module.exports = router;
