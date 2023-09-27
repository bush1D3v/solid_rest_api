const { updateNicknameAndReturnPokemon } = require('../../services/pokemon/index')

const updateNickname = async (req, resp) => {
  const { apelido } = req.body
  const { id } = req.params

  try {
    const result = await updateNicknameAndReturnPokemon(apelido, id)

    return resp.status(201).json(result)
  } catch (error) {
    return resp.status(404).json(error.message)
  }
}

module.exports = {
  updateNickname
}
