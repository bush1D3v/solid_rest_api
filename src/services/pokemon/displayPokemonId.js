const { createPokemonListId } = require('../../utils/pokemon/index')

const displayPokemonId = (id) => {
  try {
    const result = createPokemonListId(id)

    return result
  } catch (error) {
    return error.message
  }
}

module.exports = {
  displayPokemonId
}
