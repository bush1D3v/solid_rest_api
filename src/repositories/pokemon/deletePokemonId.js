const pool = require('../../data/conection')

const deletePokemonId = async (id) => {
  try {
    const { rows } = await pool.query(`
      delete from pokemons
      where id = $1
    `, [id])

    return rows[0]
  } catch (error) {
    return error.message
  }
}

module.exports = {
  deletePokemonId
}
