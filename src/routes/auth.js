const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");

//POST /user/
router.post("/", authController.signUp);
//POST /user/signIn
router.post("/signIn", authController.signIn);
//POST /user/auth
router.post("/auth", authController.certification);
//GET /user/auth/:token
router.get("/auth/:token", authController.verify);

module.exports = router;
