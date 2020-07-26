const { User, Auth } = require("../models");

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

const settingToken = async (data) => {
  const exAuth = await Auth.findOne({
    where: { email: data.email },
  });
  if (exAuth)
    return Auth.update(
      {
        token: data.token,
      },
      {
        where: { email: data.email },
      }
    );
  return Auth.create(data);
};

const checkEmail = async (token) => {
  const result = await Auth.findOne({
    where: { token: token },
  });
  if (result) {
    Auth.destroy({
      where: { token: token },
    });
  }
  return result;
};

module.exports.createUser = createUser;
module.exports.checkUser = checkUser;
module.exports.settingToken = settingToken;
module.exports.checkEmail = checkEmail;
