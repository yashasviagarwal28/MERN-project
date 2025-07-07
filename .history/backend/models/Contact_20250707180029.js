const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    timestamp: {
        type: Date,
        default: Data.now
    }
});

module.exports = mongoose.model('Contact', ContactSchema);