const pool = require('../../data/conection')

const createPokemonListId = async (id) => {
  try {
      const { rows } = await pool.query(`
      select * from pokemons
      where id = $1
    `, [id])

    return rows[0]
  } catch (error) {
    return error.message
  }
}

module.exports = {
  createPokemonListId
}
