const {
  validateUser,
  createToken
} = require('../../utils/user/index')

const validateUserAndCreateToken = async (name, mail, password) => {
  try {
    const user = await validateUser(name, mail, password)

    if (typeof user == 'string') {
      return 'Name, Email or Password invalid'
    }

    const token = createToken(user)

    return token
  } catch (error) {
    return error.message
  }
}

module.exports = {
  validateUserAndCreateToken
}
