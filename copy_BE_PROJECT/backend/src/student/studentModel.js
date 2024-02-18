var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    
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
    registerAs: {
        type: String,
        required: true,
        enum: ['candidate', 'HR']
    },
    collegeOrCompanyName: {
        type: String,
        required: true
    },
    resume: {
        filename: {
            type: String,
            default: null // Setting default value as null
        },
        url: {
            type: String,
            default: null // Setting default value as null
        }
   
    }
});

module.exports = mongoose.model('Student', studentSchema);
