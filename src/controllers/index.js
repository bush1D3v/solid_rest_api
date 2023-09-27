const {
  loginUser,
  registerUser,
} = require('./user/index')

const {
  registerPokemon,
  updateNickname,
  listPokemon,
  listIdPokemon,
  deletePokemon
} = require('./pokemon/index')

module.exports = {
  loginUser,
  registerUser,
  registerPokemon,
  updateNickname,
  listPokemon,
  listIdPokemon,
  deletePokemon
}
