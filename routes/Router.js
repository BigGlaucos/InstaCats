const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.get('/login', AuthController.login);
router.get('/register', AuthController.register);
router.post('/register/create', AuthController.registerPost)

module.exports = router