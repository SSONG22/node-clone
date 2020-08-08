const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const { isNotLoggedIn } = require("./middleware");

//POST /user/
router.post("/", isNotLoggedIn, authController.signUp);
//POST /user/signIn
router.post("/signIn", isNotLoggedIn, authController.signIn);
//POST /user/auth
router.post("/auth", isNotLoggedIn, authController.certification);
//GET /user/auth/:token
router.get("/auth/:token", isNotLoggedIn, authController.verify);

module.exports = router;
