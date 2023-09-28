const pool = require('../../data/connection')

const createUser = async (name, mail, password) => {
  try {
    const params = [name, mail, password]

    const { rows } = await pool.query(`
      insert into usuarios
      (nome, email, senha)
      values
      ($1, $2, $3)
      returning *
    `, params)

    return rows[0]
  } catch (error) {
    return error.message
  }
}

module.exports = {
  createUser
}
