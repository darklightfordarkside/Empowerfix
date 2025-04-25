const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    jobTitle: { type: String, required: true },
    linkedIn: { type: String }, // Optional for Software Engineer
    portfolio: { type: String }, // Optional for Marketing Manager
    reason: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);