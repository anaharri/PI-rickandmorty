const { Router } = require('express')
const { Episode } = require('../db')
const router = Router()

router.get('/', (req, res, next) => {
  Episode.findAll()
    .then((episodes) => res.json(episodes))
    .catch((e) => next(e))
})

module.exports = router
