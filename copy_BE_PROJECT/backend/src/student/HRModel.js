var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HRSchema = new Schema({

     name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    registerAs: { // Changed to camelCase for convention
        type: String,
        required: true,
        enum: ['Candidate', 'HR'] // Enum constraint for 'student' or 'hr'
    },
    collegeOrCompanyName: { // Changed to camelCase for convention
        type: String,
        required: true
    }
    
});
module.exports = mongoose.model('hr', HRSchema);