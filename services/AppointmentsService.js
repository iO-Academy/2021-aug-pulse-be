const AppointmentRepository = require('../repositories/AppointmentsRepository');
const logger = require('../logger/logger');
const Ajv = require("ajv");
const ajv = new Ajv()

class AppointmentsService {
    async getAvailableAppointments(req) {
        // let id = {"_id":new ObjectId(todo.params.id)};
        const doctorappointments = {"doctorID": Number(req.query.doctorid), "date": Number(req.query.appdate)};
        logger.info("ID passed to getAppointments: " + doctorappointments.doctorID);
        logger.info("Date passed to getAppointments: " + doctorappointments.date);
        return await AppointmentRepository.getAppointments(doctorappointments);
    }

    async getDoctor(req) {
        if (Object.keys(req.query).length === 0) {
            let doctorid = {};
            logger.info("Get all doctors.");
            return await AppointmentRepository.getDoctor(doctorid);
        } else {
            let doctorid = {"doctorID": Number(req.query.doctorid)};
            logger.info("ID passed to getDoctor (single doctor): " + doctorid.doctorID);
            return await AppointmentRepository.getDoctor(doctorid);
        }
    }

    isValid(reqBody) {
        const checkFields = {
            type: "object",
            properties: {
                "date": {type: "integer"},
                "timeID": {type: "integer"},
                "doctorID": {type: "integer"},
                "patientFirstName": {type: "string"},
                "patientLastName": {type: "string"},
                "patientEmail": {type: "string"},
                "notes": {type: "string"}
            },
            required: ["date", "timeID", "doctorID", "patientFirstName", "patientLastName", "patientEmail", "notes"],
            additionalProperties: false
        }
        const validate = ajv.compile(checkFields) // ajv = asynchronous javascript validator
        return validate(reqBody);
    }

    async bookAppointment(req) {
        const valid = this.isValid(req.body);

        if (valid) {
            try {
                const bookapp = req.body;
                logger.info("booked new appointment");
                return await AppointmentRepository.bookAppointment(bookapp);
            } catch (err) {
                logger.error(`booking new appointment error: ${err}`);
            }
        } else {
            logger.error('Could not add new appointment due to invalid input data. (not json, missing props or type error)');
        }
    }
}
module.exports = new AppointmentsService;