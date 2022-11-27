const express = require("express");

const router = express.Router();

const { addtodo,gettodo,deletetodo,donetodo,undonetodo} = require("../controllers/todoController");



router.route("/delete/:id").delete(deletetodo);

router.route("/update/:id").delete(donetodo);

router.route("/unupdate/:id").delete(undonetodo);




router.route("/add").post(addtodo);

router.route("/get").get(gettodo);





module.exports = router;