const jwt = require('jsonwebtoken')
const jwtPassword = require('../../password/jwtPassword')

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
