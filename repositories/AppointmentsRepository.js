const connect = require('../config/dbConnect');
const logger = require("../logger/logger");

class AppointmentsRepository {
    appointmentsCollection = null;
    doctorsCollection = null;

    constructor() {
        connect().then(db => {
            this.appointmentsCollection = db.collection('appointments');
            this.doctorsCollection = db.collection('doctors');
        });
    }

    async getAppointments(date) {
        logger.info("getting appointments");
        try {
            return await this.appointmentsCollection.find(date).toArray();
        }
        catch (err) {
            logger.error(`getAppointments error: ${err}`);
        }
    }

    async getDoctor(id) {
        logger.info("getting doctor");
        try {
            return await this.doctorsCollection.find(id).toArray();
        }
        catch (err) {
            logger.error(`getDoctor error: ${err}`);
        }
    }
}

module.exports = new AppointmentsRepository;