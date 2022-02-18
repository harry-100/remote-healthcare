const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    doctor: {
        type: String,
        required: [true, 'Doctor is required'],
    },
    purpose: {
        type: String,
        required: [true, 'Purpose is required'],
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
    },
    comments: {
        type: String,
    },
    mode: {
        type: String,
        required: [true, 'Mode is required'],
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = mongoose.model('Appointment', appointmentSchema);