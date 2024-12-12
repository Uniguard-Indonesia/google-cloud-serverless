const router = require('express').Router();

const SandboxLoginHandler = require('../handlers/auth/SandboxLoginHandler');
router.post('/auth/login', SandboxLoginHandler.validateRequest, SandboxLoginHandler.login);

router.get('/', (req, res) => {
    return res.send({'version': process.env.APP_VERSION, 'author': 'Doni R'});
});

module.exports = router;