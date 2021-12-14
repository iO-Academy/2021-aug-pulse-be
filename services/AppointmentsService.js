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
        const doctorid = {"doctorID":Number(req.query.doctorid)};
        logger.info("ID passed to getDoctor: " + doctorid.doctorID);
        return await AppointmentRepository.getDoctor(doctorid);
    }
}

module.exports = new AppointmentsService;