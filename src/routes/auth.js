const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");


router.post("/" ,authController.signUp);
router.post("/signIn",authController.signIn);

module.exports = router;
