const { createPokemonList } = require('../../repositories/pokemon/index')

const displayList = async () => {
  try {
    const result = await createPokemonList()

    return result
  } catch (error) {
    return error.message
  }
}

module.exports = {
  displayList
}
