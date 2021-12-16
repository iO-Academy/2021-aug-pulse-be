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
        return AuthService.comparePass(req)
            .then((result) => {
                logger.info(`Auth success = ${result}`);
                if (result === true) {
                    return res.cookie('isAuthed', true, { domain: '', sameSite: "Lax", path: '/auth', expires: new Date(Date.now() + 900000)}).send();
                }
                else {
                    res.status(401).end();
                }
            });
    }
}

module.exports = new AuthController;