const {
  getUserId,
  createPokemon
} = require('../../utils/pokemon/index')

const createAndReturnPokemon = async (req, nome, apelido, habilidades, imagem) => {
  try {
    const id = getUserId(req)
    const pokemon = await createPokemon(id, nome, apelido, habilidades, imagem)

    return pokemon
  } catch (error) {
    return console.log(`services/pokemon/createAndReturnPokemon: ${error.message}`);
  }
}

module.exports = {
  createAndReturnPokemon
}
