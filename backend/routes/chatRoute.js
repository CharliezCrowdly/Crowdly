const express = require("express");
const {
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
  fetchChatsApp,
  accessChatApp,
  accessChat,
} = require("../controllers/chatControllers");
const router = express.Router();

router.route("/").post(accessChat);
router.route("/").get(fetchChats);
router.route("/app").post(accessChatApp);
router.route("/app").get(fetchChatsApp);
router.route("/groups").post(createGroupChat);
router.route("/rename").put(renameGroup);
router.route("/groupremove").put(removeFromGroup);
router.route("/groupadd").put(addToGroup);

module.exports = router;
