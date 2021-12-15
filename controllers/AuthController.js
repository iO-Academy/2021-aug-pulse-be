const logger = require('../logger/logger');
const AuthService = require('../services/AuthService');
const cors = require('cors');

class AuthController {
    // genHashedPass() {
    //     logger.info('Controller: hashpass')
    //     AuthService.genHashedPass()
    //         // .then(data => res.json(data));
    // }

    comparePass(req, res, next) {
        logger.info('Controller: get doc login')
        return AuthService.comparePass(req).then(result => res.send(result));
    }
}

module.exports = new AuthController;