const logger = require("../logger/logger");
const bcrypt = require ('bcryptjs');
const AuthRepository = require("../repositories/AuthRepository");

class AuthService {

    genHashedPass() {
        const saltRounds = 10;
        let password = "password";
        logger.info('Gen hashed password');
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                // returns hash
                logger.info(hash);
            });
        });
        // AuthRepository.genHashedPass(req).then(data => res.json(data));
    }
}

module.exports = new AuthService;