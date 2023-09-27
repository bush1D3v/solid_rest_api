const { createAndReturnPokemon } = require('../../services/pokemon/index')

const registerPokemon = async (req, resp) => {
  const { nome, apelido, habilidades, imagem } = req.body

  try {
    const result = await createAndReturnPokemon(req, nome, apelido, habilidades, imagem)

    return resp.status(201).json(result)
  } catch (error) {
    return resp.status(404).json(error.message)
  }
}

module.exports = {
  registerPokemon
}
