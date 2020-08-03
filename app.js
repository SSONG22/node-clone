const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger definition
const swaggerDefinition = {
  info: {
    // API informations (required)
    title: "Swagger :: 노드 클론 api", // Title (required)
    version: "1.0.0", // Version (required)
    description: "swagger API", // Description (optional)
  },
  host: "localhost:3065", // Host (optional)
  basePath: "/", // Base path (optional)
  // schemes:['http',"https"],
};
// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  apis: ["./src/routes/auth.swagger.js"],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

//route
const auth = require("./src/routes/auth");

//db
const db = require("./src/models");

dotenv.config();
const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
  console.log("서버실행중");
});
