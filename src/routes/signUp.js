const express = require("express");
const router = express.Router();
const signUpController = require("../controller/signUp");

router.post("/", signUpController.signUp);

module.exports = router;
