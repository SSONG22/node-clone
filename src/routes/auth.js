const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const middleware = require("../routes/middleware");

router.post("/" ,authController.signUp);
router.post("/signIn",middleware.jtw,authController.signIn);

module.exports = router;
