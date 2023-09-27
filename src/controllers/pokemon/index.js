const { registerPokemon } = require('./registerPokemon')
const { updateNickname } = require('./updateNickname')
const { listPokemon } = require('./listPokemon')
const { listIdPokemon } = require('./listIdPokemon')
const { deletePokemon } = require('./deletePokemon')

module.exports = {
  registerPokemon,
  updateNickname,
  listPokemon,
  listIdPokemon,
  deletePokemon
}
