const pool = require('../../data/conection')

const createPokemonList = async () => {
  try {
    const { rows } = await pool.query(`
      SELECT
      p.id,
      u.nome AS usuario,
      p.nome AS nome,
      p.apelido AS apelido,
      string_to_array(p.habilidades, ', ') AS habilidades,
      p.imagem AS imagem
      FROM pokemons p
      JOIN usuarios u ON p.usuario_id = u.id
    `)

    return rows
  } catch (error) {
    return error.message
  }
}

module.exports = {
  createPokemonList
}
