const jwt = require('jsonwebtoken')
const jwtpassword = require('../../jwt/password')

const getUserId = (req) => {
  try {
    const { authorization } = req.headers

    const token = authorization.split(' ')[1]

    const { id } = jwt.verify(token, jwtpassword)

    return id
  } catch (error) {
    return error.message
  }
}

module.exports = {
  getUserId
}
