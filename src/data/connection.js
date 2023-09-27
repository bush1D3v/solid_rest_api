const { Pool } = require('pg')

const pool = new Pool({
  host: 'your_host',
  port: 'your_port',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database'
})

module.exports = pool
