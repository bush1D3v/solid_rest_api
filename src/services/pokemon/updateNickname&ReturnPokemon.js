const { changeNickname } = require('../../utils/pokemon/index')

const updateNicknameAndReturnPokemon = async (apelido, id) => {
  const pokemon = await changeNickname(apelido, id)

  return pokemon
}

module.exports = {
  updateNicknameAndReturnPokemon
}
