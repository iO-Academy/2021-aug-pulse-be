const appointmentsService = require('../services/AppointmentsService');

const reqValid = {
        "date": 1,
        "timeID": 1,
        "doctorID": 1,
        "patientFirstName": 'string',
        "patientLastName": 'string',
        "patientEmail": 'string',
        "notes": 'string'
    }

test('isValid returns true', () => {
    expect(appointmentsService.isValid(reqValid)).toBe(true);
});

const reqInValidInteger = {
    "date": 'string',
    "timeID": 1,
    "doctorID": 1,
    "patientFirstName": 'string',
    "patientLastName": 'string',
    "patientEmail": 'string',
    "notes": 'string'
}

test('isValid returns false for invalid integer', () => {
    expect(appointmentsService.isValid(reqInValidInteger)).toBe(false);
});

const reqInValidString = {
    "date": 1,
    "timeID": 1,
    "doctorID": 1,
    "patientFirstName": 1,
    "patientLastName": 'string',
    "patientEmail": 'string',
    "notes": 'string'
}

test('isValid returns false for invalid string', () => {
    expect(appointmentsService.isValid(reqInValidString)).toBe(false);
});
