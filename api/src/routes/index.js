const { Router } = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const episodes = require('./episodes')
const characters = require('./characters')

const router = Router()

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/episodes', episodes)
router.use('/characters', characters)

module.exports = router
