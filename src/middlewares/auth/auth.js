const jwt = require('jsonwebtoken')
const jwtpassword = require('../../jwt/password')

const auth = (req, resp, next) => {
  try {
    const { authorization } = req.headers

    if (!authorization) {
      return resp.status(401).json({message: "Unauthorized"})
    }

    const token = authorization.split(' ')[1]

    const userToken = jwt.verify(token, jwtpassword)

    next()
  } catch (error) {
    resp.status(401).json({message: error.message})
  }
}

module.exports = {
  auth
}
