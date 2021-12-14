const winston = require('winston');

const logger = winston.createLogger({
    level: 'info', // default level - can be overridden by individual transports
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console({level: 'debug'}),
        // new winston.transports.File({filename: "nodemongodb.log"})
    ]
});

module.exports = logger;