const logger = require('../logger/logger');
const AppointmentService = require('../services/AppointmentsService');
const cors = require('cors');

class AppointmentsController {
    getAvailableAppointments(req, res, next) {
        logger.info('Controller: getAvailableAppointments')
        AppointmentService.getAvailableAppointments(req).then(data => res.json(data));
    }

    getDoctor(req, res, next) {
        logger.info('Controller: getDoctor')
        AppointmentService.getDoctor(req).then(data => res.json(data));
    }

}

module.exports = new AppointmentsController;