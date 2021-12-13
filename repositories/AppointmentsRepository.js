const connect = require('../config/dbConnect');
// const logger = require("../logger/logger");

class AppointmentsRepository {
    appointmentsCollection = null;

    constructor() {
        connect().then(db => {
            this.appointmentsCollection = db.collection('appointments');
        });
    }

    async getAvailableAppointments() {
        // logger.info("getting all todos");
        try {
            return await this.appointmentsCollection.find().toArray();
        }
        catch (err) {
            // logger.error(`getTodos error: ${err}`);
            console.log(`getAvailableAppointments error! ${err}`);
        }
    }
}

module.exports = new AppointmentsRepository;