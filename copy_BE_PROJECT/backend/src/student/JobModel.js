var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JobSchema = new Schema({
    jobRole: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    jobType: {
        type: String
    },
    jobLocation: {
        type: String,
        required: true
    },
    lastDate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    companyName: {
        type: String  // Add the new field 'companyName'
    }
});

module.exports = mongoose.model('job', JobSchema);
