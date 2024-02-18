var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CandidateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    appliedRole: {
        type: String,
        required: true
    },
    appliedCompany: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('candidate', CandidateSchema);
