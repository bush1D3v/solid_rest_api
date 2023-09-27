const { displayList } = require('../../services/pokemon/index')

const listPokemon = async (req, resp) => {
  try {
    const result = await displayList()

    return resp.json(result)
  } catch (error) {
    return resp.status(404).json(error.message)
  }
}

module.exports = {
  listPokemon
}
