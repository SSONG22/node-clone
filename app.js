const express = require("express");
const dotenv = require("dotenv");
<<<<<<< .merge_file_QC0y0a
=======
const cookieParser = require("cookie-parser");
const session = require("express-session");
>>>>>>> .merge_file_qRPM0N

//route
const auth = require("./src/routes/auth");

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<<<<<<< .merge_file_QC0y0a

// 회원가입
app.use('/user', auth);

app.listen(3060, () => {
=======
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    // cookie: {
    //   httpOnly: true,
    //   secure: false,
    //   domain: process.env.NODE_ENV === "production" && ".cheering99.shop",
    // },
  })
);

// auth
app.use("/user", auth);

app.listen(3065, () => {
>>>>>>> .merge_file_qRPM0N
  console.log("서버실행중");
});
