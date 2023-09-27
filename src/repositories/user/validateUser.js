const pool = require('../../data/connection')
const bcrypt = require('bcrypt')

const validateUser = async (name, mail, password) => {
  const params = [name, mail]

  try {
    const user = await pool.query(`
      select * from usuarios
      where nome = $1
      and email = $2
    `, params)

    if (user.rowCount < 1) {
      return 'Name, Email or Password invalid'
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].senha)

    if (!validPassword) {
      return 'Name, Email or Password invalid'
    }

    return user.rows[0];
  } catch (error) {
    return error.message
  }
}

module.exports = {
  validateUser
}
