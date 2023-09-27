const { createAndReturnUser } = require('../../services/user/index')

const registerUser = async (req, resp) => {
  const { nome, email, senha } = req.body

  try {
    const result = await createAndReturnUser(nome, email, senha)

    return resp.status(201).json(result)
  } catch (error) {
    return resp.status(500).json('Internal server error')
  }
}

module.exports = {
  registerUser
}
