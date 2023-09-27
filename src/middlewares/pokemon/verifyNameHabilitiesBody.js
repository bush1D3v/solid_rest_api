const verifyNameHabilitiesBody = (req, resp, next) => {
  const { nome, habilidades } = req.body

  try {
    if (!nome) {
      return resp.status(400).json('Name required')
    }

    if (!habilidades) {
      return resp.status(400).json('Habilities required')
    }

    next()
  } catch (error) {
    return resp.status(404).json(error.message)
  }
}

module.exports = {
  verifyNameHabilitiesBody
}
