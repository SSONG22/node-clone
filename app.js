const express = require("express");
const signUp = require("/src/routes/signUp");

const app = express();

app.get("/", (req, res) => {
  res.send("hello express!");
});

// 회원가입
app.use(signUp);

app.listen(3060, () => {
  console.log("서버실행중");
});
