const verifyBody = (req, resp, next) => {
  const { nome, email, senha } = req.body

  try {
    if (!nome) {
      return resp.status(400).json({message: 'Name required'})
    }

    if (!email) {
      return resp.status(400).json({message: 'Email required'})
    }

    if (!senha) {
      return resp.status(400).json({message: 'Password required'})
    }
  } catch (error) {
    return resp.status(404).json(error.message)
  }
  next()
}

module.exports = {
  verifyBody
}
