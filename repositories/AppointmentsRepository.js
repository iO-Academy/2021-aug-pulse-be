const connect = require('../config/dbConnect');
const logger = require("../logger/logger");

class AppointmentsRepository {
    appointmentsCollection = null;
    doctorsCollection = null;

    constructor() {
        connect().then(db => {
            logger.info(`MongoDB client (appointments) connected...`);
            this.appointmentsCollection = db.collection('appointments');
            this.doctorsCollection = db.collection('doctors');
        });
    }

    async getAppointments(date) {
        logger.info("getting appointments");
        try {
            return await this.appointmentsCollection.find(date).toArray();
        } catch (err) {
            logger.error(`getAppointments error: ${err}`);
        }
    }

    async getDoctor(id) {
        logger.info("getting doctor");
        const fields = {
            projection: {
                "doctorEmail": Number(0),
                "doctorPassword": Number(0)
            }
        };
        try {
            return await this.doctorsCollection.find(id, fields).toArray();
        } catch (err) {
            logger.error(`getDoctor error: ${err}`);
        }
    }

    async bookAppointment(appointment) {
        logger.info("book new appointment");
        try {
            return await this.appointmentsCollection.insertOne(appointment)
        } catch (err) {
            logger.error('newAppointment error: ${err}');
        }

    }
}

module.exports = new AppointmentsRepository;