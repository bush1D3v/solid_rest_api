const bcrypt = require('bcrypt')

const encryptPassword = async (password) => {
  try {
    const cryptPassword = await bcrypt.hash(password, 10)

    return cryptPassword
  } catch (error) {
    return error.message
  }
}

module.exports = {
  encryptPassword
}
