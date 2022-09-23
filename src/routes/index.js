const express = require('express');
const authMiddleware = require('../middlewares');

const Controllers = require('../controllers');

const router = express.Router();

router.post('/login', Controllers.login);
router.post('/auth', Controllers.auth);
router.post('/test', authMiddleware, Controllers.test);

module.exports = router;
