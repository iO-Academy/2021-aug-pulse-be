const AppointmentRepository = require('../repositories/AppointmentsRepository');
// const {ObjectId} = require("mongodb");


//DO DATA THINGS HERE!!!!
class AppointmentsService {
    async getAvailableAppointments(todo) {
        // let id = {"_id":new ObjectId(todo.params.id)};
        return await AppointmentRepository.getAvailableAppointments();
    }
}

module.exports = new AppointmentsService;