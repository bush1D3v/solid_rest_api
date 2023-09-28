const pool = require('../../data/connection')

const createPokemon = async (id, nome, apelido, habilidades, imagem) => {
  try {
    const params = [id, nome, habilidades, imagem, apelido]

    const { rows } = await pool.query(`
      insert into pokemons
      (usuario_id, nome, habilidades, imagem, apelido)
      values
      ($1, $2, $3, $4, $5)
      returning *
    `, params)

    return rows
  } catch (error) {
    return error.message
  }
}

module.exports = {
  createPokemon
}
