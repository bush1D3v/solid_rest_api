const { deleteAndReturnConfirmation } = require('../../services/pokemon/index')

const deletePokemon = async (req, resp) => {
  const { id } = req.params

  try {
    const result = await deleteAndReturnConfirmation(id)

    return resp.json(result)
  } catch (error) {
    return resp.status(404).json(error.message)
  }
}

module.exports = {
  deletePokemon
}
