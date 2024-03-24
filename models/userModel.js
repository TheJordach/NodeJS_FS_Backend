const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String, // Corrected: lowercase 'type'
        required: true,
    },

    lastName: {
        type: String, // Corrected: lowercase 'type'
        required: true,
    },

    address: {
        type: String, // Corrected: lowercase 'type'
        required: true,
    },

    city: {
        type: String, // Corrected: lowercase 'type'
        required: true,
    },

    state: {
        type: String, // Corrected: lowercase 'type'
        required: true,
    },

    zipCode: {
        type: String, // Corrected: lowercase 'type'
        required: true,
    },

    email: {
        type: String, // Corrected: lowercase 'type'
        required: true,
    },

    password: {
        type: String, // Corrected: lowercase 'type'
        required: true,
    },
});

module.exports = mongoose.model('User', userSchema);
