const createUser = (email, nickname, password) => {
  return User.create({
    //테이블안에 데이터 삽입
    email,
    nickname,
    password,
  });
};

module.exports.createUser = createUser;