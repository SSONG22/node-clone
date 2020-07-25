const express = require("express");
const dotenv = require("dotenv");

//route
const signUp = require("./src/routes/signUp");

//db
const db = require("./src/models");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("hello express!");
});

db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

// 회원가입
app.use("/user", signUp);

app.listen(3060, () => {
  console.log("서버실행중");
});
