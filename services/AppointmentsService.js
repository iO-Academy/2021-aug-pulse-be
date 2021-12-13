const AppointmentRepository = require('../repositories/AppointmentsRepository');
// const {ObjectId} = require("mongodb");

class AppointmentsService {
    async getAvailableAppointments(todo) {
        // let id = {"_id":new ObjectId(todo.params.id)};
        return await AppointmentRepository.getAvailableAppointments();
    }
}

module.exports = new AppointmentsService;