const express = require("express");

const router = express.Router();
const {

  searchProfile,

  
}= require( "../controllers/profileController");

router.route("/search").get(searchProfile);

module.exports= router;
