const {
  createUser,
  encryptPassword
} = require('../../repositories/user/index')

const createAndReturnUser = async (name, mail, password) => {
  try {
    const encrypt = await encryptPassword(password, 10)
    const result = await createUser(name, mail, encrypt)

    return result
  } catch (error) {
    return error.message
  }
}

module.exports = {
  createAndReturnUser
}
