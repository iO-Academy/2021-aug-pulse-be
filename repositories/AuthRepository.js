const connect = require('../config/dbConnect');
const logger = require("../logger/logger");

class AuthRepository {
    doctorsCollection = null;

    constructor() {
        connect().then(db => {
            this.doctorsCollection = db.collection('doctors');
        });
    }


}

module.exports = new AuthRepository;