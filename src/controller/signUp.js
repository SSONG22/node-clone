const singUpService = require('../services/signUp');
const signUp = async (req, res, next) => {
  try {
    //중복검사
    // console.log(req);
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다"); //응답은 1번만
    }
    const data = req.body;

    const hashedPassword = await bcrypt.hash(req.body.password, 10); //해시화
    const result = await singUpService.createUser(data.email, data.nickame, data.password);
    res.status(200).send("ok"); //생략 안하는 것을 추천
  } catch (error) {
    console.error(error);
    //status 500
    next(error); //next 로 에러를 보낸다 express 가 브라우저로 error 보냄
  }
};

module.exports.signUp = signUp;