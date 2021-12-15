const logger = require("../logger/logger");
const bcrypt = require ('bcryptjs');
const AuthRepository = require("../repositories/AuthRepository");

class AuthService {
    //USE ME TO GENERATE NEW PASSWORDS FOR GPs
    // genHashedPass() {
    //     const saltRounds = 10; //how salty??
    //     let password = "******"; //set pass here.
    //     logger.info('Gen hashed password');
    //     bcrypt.genSalt(saltRounds, function(err, salt) {
    //         bcrypt.hash(password, salt, function(err, hash) {
    //             // returns hash
    //             logger.info(hash);
    //         });
    //     });
    // }

     async comparePass(req) {
        try {
            const docEmail = {"doctorEmail": req.body.doctorEmail};
            const hash = await AuthRepository.getDoctorLogin(docEmail);
            return await bcrypt.compare(`${req.body.password}`, hash[0].doctorPassword);
        } catch (err) {
            logger.error(`comparePass error: ${err}`);
            return 'Invalid email!'
        }
    }
}

module.exports = new AuthService;