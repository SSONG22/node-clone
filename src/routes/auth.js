const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const middleware = require("../routes/middleware");

//POST /user/
router.post("/", authController.signUp);
//POST /user/signIn
router.post("/signIn", middleware.jwt, authController.signIn);
//POST /user/auth
router.post("/auth", authController.certification);
//POST /user/auth/
router.get("/auth/:token", authController.verify);

module.exports = router;
