const jwt = require('jsonwebtoken');

const getJwt = async (payload) => {
  const secretOrPrivateKey = process.env.JWT_SECRET;
   const jsonWebToken = new Promise((resolve, reject) => {
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
  return jsonWebToken;
}
module.exports.getJwt = getJwt