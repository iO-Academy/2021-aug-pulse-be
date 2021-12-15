const logger = require('../logger/logger');
const AuthService = require('../services/AuthService');
const cors = require('cors');

class AuthController {
    genHashedPass() {
        logger.info('Controller: hashpass')
        AuthService.genHashedPass()
            // .then(data => res.json(data));
    }
}

module.exports = new AuthController;