const express = require("express");
const router = express.Router();
const signUpController = require("../controller/auth");
const middleware = require("../routes/middleware");

router.post("/" ,signUpController.signUp);
router.post("/signIn",middleware.jtw,signUpController.signIn);

module.exports = router;
