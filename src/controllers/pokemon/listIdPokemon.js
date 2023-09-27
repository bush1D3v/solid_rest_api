const { displayPokemonId } = require('../../services/pokemon/index')

const listIdPokemon = async (req, resp) => {
  const { id } = req.params
  try {
    const result = await displayPokemonId(id)

    return resp.json(result)
  } catch (error) {
    return resp.status(404).json(error.message)
  }
}

module.exports = {
  listIdPokemon
}
