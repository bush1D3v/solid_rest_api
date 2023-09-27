const express = require('express')

const {
  registerUser,
  loginUser,
  registerPokemon,
  updateNickname,
  listPokemon,
  listIdPokemon,
  deletePokemon
} = require('../controllers/index')

const {
  verifyBody,
  auth,
  verifyNameHabilitiesBody,
  verifyIdParam,
  verifyNicknameBody
} = require('../middlewares/index')

const routes = express()

routes.post('/register', verifyBody, registerUser)
routes.post('/login', verifyBody, loginUser)

routes.use(auth)

routes.post('/pokemon/register', verifyNameHabilitiesBody, registerPokemon)
routes.patch('/pokemon/nickname/:id', verifyIdParam, verifyNicknameBody, updateNickname)
routes.get('/pokemon', listPokemon)
routes.get('/pokemon/:id', verifyIdParam, listIdPokemon)
routes.delete('/pokemon/delete/:id', verifyIdParam, deletePokemon)

module.exports = routes
