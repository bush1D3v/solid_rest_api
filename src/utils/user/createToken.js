const jwt = require('jsonwebtoken')
const jwtPassword = require('../../jwt/password')

const createToken = (user) => {
  try {
    const token = jwt.sign({ id: user.id }, jwtPassword, {expiresIn: '8h'})

    const { senha: _, ...usuarioLogado} = user

    return {
      user: usuarioLogado,
      token
    }
  } catch (error) {
    return error.message
  }
}

module.exports = {
  createToken
}
