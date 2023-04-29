const express = require('express')
const animeController = require('./controllers/animeController')
const middlewares = require('./middlewares/animeMiddle')

const router = express.Router();

router.get('/animes', animeController.getAllAnimes)
router.post('/animes', middlewares.validador,animeController.createNewAnime)
router.post('/animes/:id', middlewares.validador,animeController.editAnime)
router.delete('/animes/:id', animeController.deleteAnime)


module.exports = router