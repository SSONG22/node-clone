
const jwt = require('../utils/jwt');

exports.isLoggedIn = (req, res, next) => {
  const token = await jwt.checkJWT(req.body);
  if(token){
    next();
  }else{
    res.status(401).send("로그인이 필요합니다");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  const token = await jwt.checkJWT(req.body);
  if(!token){
    next();
  }else{
    res.status(401).send("로그인하지 않는 사용자만 접근 가능합니다");
  }
};

