const pool = require('../../data/conection')

const changeNickname = async (apelido, id) => {
  try {
    const params = [apelido, id]

    const { rows } = await pool.query(`
      update pokemons
      set apelido = $1
      where id = $2
      returning *
    `, params)

    return rows
  } catch (error) {
    return error.message
  }
}

module.exports = {
  changeNickname
}
