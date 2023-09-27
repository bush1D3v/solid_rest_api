const { validateUserAndCreateToken } = require('../../services/user/index')

const loginUser = async (req, resp) => {
  const { nome, email, senha } = req.body

  try {
    const result = await validateUserAndCreateToken(nome, email, senha)

    return resp.json(result)
  } catch (error) {
    return resp.status(500).json('Internal server error')
  }
}

module.exports = {
  loginUser
}
