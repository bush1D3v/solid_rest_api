const { verifyBody } = require('./user/verifyUserBody')
const { auth } = require('./auth/auth')
const {
  verifyNameHabilitiesBody,
  verifyIdParam,
  verifyNicknameBody
} = require('./pokemon/index')

module.exports = {
  verifyBody,
  auth,
  verifyNameHabilitiesBody,
  verifyIdParam,
  verifyNicknameBody
}
