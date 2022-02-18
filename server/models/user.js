const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required:true,
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    appointments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Appointment',
    }],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
