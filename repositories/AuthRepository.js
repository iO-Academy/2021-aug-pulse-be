const connect = require('../config/dbConnect');
const logger = require("../logger/logger");

class AuthRepository {
    doctorsCollection = null;

    constructor() {
        connect().then(db => {
            logger.info(`MongoDB client (auth) connected...`);
            this.doctorsCollection = db.collection('doctors');
        });
    }

    async getDoctorLogin(email) {
        logger.info("getting doctor hashed pass");
        const fields = {
            projection: {
                "doctorPassword": Number(1),
            }
        };
        try {
            return await this.doctorsCollection.find(email, fields).toArray();
        } catch (err) {
            logger.error(`getDoctorLogin error: ${err}`);
        }
    }
}

module.exports = new AuthRepository;