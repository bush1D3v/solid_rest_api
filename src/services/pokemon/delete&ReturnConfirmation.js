const { deletePokemonId } = require('../../repositories/pokemon/index')

const deleteAndReturnConfirmation = async (id) => {
  try {
    const result = deletePokemonId(id)

    return {message: "The pokemon has been deleted"}
  } catch (error) {
    return error.message
  }
}

module.exports = {
  deleteAndReturnConfirmation
}
