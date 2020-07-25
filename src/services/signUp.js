const { User } = require("../models");

const createUser = (email, nickname, password) => {
  return User.create({
    //테이블안에 데이터 삽입
    email,
    nickname,
    password,
  });
};

const checkUser = (email) => {
  return User.findOne({
    where: {
      email: email,
    },
  });
};

module.exports.createUser = createUser;
module.exports.checkUser = checkUser;
