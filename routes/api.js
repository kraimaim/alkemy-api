const router = require('express').Router()

const login = require('./auth/login')
const apiMoviesRouter = require('./api/movies')
const apiUsersRouter = require('./auth/register')
const apiCharactersRouter = require('./api/characters')

router.use('/characters', login.checkToken, apiCharactersRouter)
router.use('/movies', login.checkToken, apiMoviesRouter)
router.use('/auth', apiUsersRouter)

module.exports = router