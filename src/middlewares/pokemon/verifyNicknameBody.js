const verifyNicknameBody = (req, resp, next) => {
  const { apelido } = req.body

  if (!apelido) {
    return resp.status(400).json('Nickname required')
  }
  
  next()
}

module.exports = {
  verifyNicknameBody
}
