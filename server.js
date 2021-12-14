const express = require('express');
// const expressHandlebars = require('express-handlebars');
const routes = require('./config/routes');
const logger = require('./logger/logger');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

//tell the app to use body-parser and parse json
app.use(bodyParser.json());

// //reg the template engine as handlebars
// app.engine('handlebars', expressHandlebars.engine());
//
// //use handlebars
// app.set('view engine', 'handlebars');
//
// //look for views in views folder
// app.set('views', './views');

//serve static files (img, css and js) from pubic folder
app.use(express.static('public'));

//load routes
routes(app);

app.listen(port, () => logger.info(`Pulse api running on port ${port}`));