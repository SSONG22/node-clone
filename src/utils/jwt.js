const jwt = require('jsonwebtoken');

const secretOrPrivateKey = process.env.JWT_SECRET;

const getJwt = async (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        _id: payload.email,
        nickname: payload.nickname,
      },
      secretOrPrivateKey,
      {
        expiresIn: '7d',
        subject: 'userInfo'
      }, (err, token) => {
        if (err) reject(err)
        else resolve({jwt: token})
      })
  })
  // return jsonWebToken;
}

//jwt 검증
const checkJWt = async (payload) => {
  return new Promise(
    (resolve, reject) => {
      jwt.verify(payload, secretOrPrivateKey,
        (err, decoded) => {
          if (err) reject(err);
          else resolve(decoded);
        })
    }
  )
}

module.exports.getJwt = getJwt