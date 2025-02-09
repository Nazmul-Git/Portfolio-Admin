const mongoose = require('mongoose');

const portfolioUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    professions: {
        type: Map,
        of: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email'],
        index: true
    },
    phone: {
        type: String,
        required: true,
    },
    website: {
        type: String,
        default: ''
    },
    socialLinks: {
        type: Map,
        of: String,
        default: {}
    },
    university: {
        type: String,
        required: true,
        index: true
    },
    cgpa: {
        type: String,
        required: true
    },
    passingYear: {
        type: Number,
        required: true
    }
}, {
    timestamps: true 
});

const PortfolioUserModel = mongoose.models.portfolioUser || mongoose.model('portfolioUser', portfolioUserSchema);

module.exports = PortfolioUserModel;
