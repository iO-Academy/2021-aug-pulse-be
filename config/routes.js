const AppointmentController = require('../controllers/AppointmentsController');
const AuthController = require('../controllers/AuthController');
const cors = require('cors');
let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

function routes(app) {
    // CORS Settings
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        next();
    });

    //Front-end routes
    // app.get('/', cors(corsOptions), (req, res, next) => {
    //     //basic status page
    //     //put contents of the view 'home.handlebars' in the template 'main.handlebars'
    //     res.render('home', {"title": "API Status", "description":"Running with no issues!"});
    // });

    //API routes

    // Takes 'doctorid' and 'appdate' as url queries.
    app.get('/appointments', cors(corsOptions), AppointmentController.getAvailableAppointments);

    // Accepts complete json object for an appointment in POST request body (all fields and valid data types required) or the request is rejected.
    app.post('/appointments', cors(corsOptions), AppointmentController.bookAppointment);

    // Takes 'doctorid' and 'appdate' as url queries.
    app.get('/doctors', cors(corsOptions), AppointmentController.getDoctor);

    app.post('/login', cors(corsOptions), AuthController.genHashedPass);


}

module.exports = routes;