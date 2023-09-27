const { createAndReturnPokemon } = require('./create&ReturnPokemon')
const { updateNicknameAndReturnPokemon } = require('./updateNickname&ReturnPokemon')
const { displayList } = require('./displayList')
const { displayPokemonId } = require('./displayPokemonId')
const { deleteAndReturnConfirmation } = require('./delete&ReturnConfirmation')

module.exports = {
  createAndReturnPokemon,
  updateNicknameAndReturnPokemon,
  displayList,
  displayPokemonId,
  deleteAndReturnConfirmation
}
