const pool = require('../../data/conection')

const verifyIdParam = async (req, resp, next) => {
  try {
    const { id } = req.params

    const { rowCount } = await pool.query(`
      select * from pokemons
      where id = $1
    `, [id])

    if (rowCount < 1) {
      return resp.status(400).json('Invalid Id')
    }
  } catch (error) {
    return resp.status(404).json(error.message)
  }

  next()
}

module.exports = {
  verifyIdParam
}
