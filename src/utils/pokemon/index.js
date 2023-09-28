const { createPokemon } = require('./createPokemon')
const { getUserId } = require('./getUserId')
const { changeNickname } = require('./changeNickname')
const { createPokemonList } = require('./createPokemonList')
const { createPokemonListId } = require('./createPokemonListId')
const { deletePokemonId } = require('./deletePokemonId')

module.exports = {
  createPokemon,
  getUserId,
  changeNickname,
  createPokemonList,
  createPokemonListId,
  deletePokemonId
}
