const AppointmentRepository = require('../repositories/AppointmentsRepository');
const logger = require('../logger/logger');
// const {ObjectId} = require("mongodb");


//DO DATA THINGS HERE!!!!
class AppointmentsService {
    async getAvailableAppointments(req) {
        // let id = {"_id":new ObjectId(todo.params.id)};
        const doctorappointments = {"doctorID":Number(req.query.doctorid), "date":Number(req.query.appdate)};
        logger.info("ID passed to getAppointments: " + doctorappointments.doctorID);
        logger.info("Date passed to getAppointments: " + doctorappointments.date);
        return await AppointmentRepository.getAppointments(doctorappointments);
    }

    async getDoctor(req) {
        if (Object.keys(req.query).length === 0) {
            let doctorid = {};
            logger.info("Get all doctors." + doctorid);
            return await AppointmentRepository.getDoctor(doctorid);
        } else {
            let doctorid = {"doctorID": Number(req.query.doctorid)};
            logger.info("ID passed to getDoctor (single doctor): " + doctorid.doctorID);
            return await AppointmentRepository.getDoctor(doctorid);
        }
    }

    async bookAppointment(req) {
        logger.info("booked new appointment: " + req.body);
        try {
            const bookapp =  req.body;
            return await AppointmentRepository.bookAppointment(bookapp);
        } catch (err) {
            logger.error(`booking new appointment error: ${err}`);
        }
    }

    }

module.exports = new AppointmentsService;