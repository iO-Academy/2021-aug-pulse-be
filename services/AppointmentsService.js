const AppointmentRepository = require('../repositories/AppointmentsRepository');
// const {ObjectId} = require("mongodb");


//DO DATA THINGS HERE!!!!
class AppointmentsService {
    async getAvailableAppointments(req) {
        // let id = {"_id":new ObjectId(todo.params.id)};
        // return await AppointmentRepository.getAppointments();
        let result = [await AppointmentRepository.getAppointments(req.query.appdate), await AppointmentRepository.getDoctor(req.query.doctorid)];
        return result;
    }
}

module.exports = new AppointmentsService;