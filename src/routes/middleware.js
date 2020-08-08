const jwt = require("../utils/jwt");

exports.isLoggedIn = async (req, res, next) => {
  const token = await jwt.checkJWT(req.headers["x-access-token"]);

  if (token) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다");
  }
};

exports.isNotLoggedIn = async (req, res, next) => {
  if (req.headers["x-access-token"]) {
    next();
  } else {
    res.status(401).send("로그인하지 않는 사용자만 접근 가능합니다");
  }
};
