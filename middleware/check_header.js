module.exports = checkHeader = (req, res, next) => {
  if (req.headers['x-requested-by'] !== 'drink-exchange') {
    res.status(403).send('Sorry please use the drink exchange client app...')
  } else {
    next()
  }
}
