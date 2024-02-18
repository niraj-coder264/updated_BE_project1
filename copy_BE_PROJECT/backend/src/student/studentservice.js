var studentModel = require('./studentModel');
var jobmodel = require('./JobModel')
var AppliedJobModel = require('./CandidateModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);


module.exports.createStudentDBService = (studentDetails) => {
  return new Promise(async function myFn(resolve, reject) {
    try {
      var studentModelData = new studentModel();
studentModelData.name = studentDetails.name;
studentModelData.email = studentDetails.email;
studentModelData.registerAs = studentDetails.registerAs;
var encrypted = encryptor.encrypt(studentDetails.password);
studentModelData.password = encrypted;
studentModelData.collegeOrCompanyName = studentDetails.collegeOrCompanyName;

// Assuming resume details are in studentDetails.resume
if (studentDetails.resume) {
  studentModelData.resume = {
    filename: studentDetails.resume.filename,
    url: studentDetails.resume.url
  };
}

// Save the document
const result = await studentModelData.save();

      console.log('Candidate saved successfully:', result);
      resolve(true);
    } catch (error) {
      console.error('Error saving Candidate:', error.message);
      reject(false);
    }
  });
};


module.exports.createAppliedJobDBService = (appliedJobDetails) => {
  return new Promise(async function myFn(resolve, reject) {
    try {
      var appliedJobModelData = new AppliedJobModel();
      appliedJobModelData.name = appliedJobDetails.name;
      appliedJobModelData.email = appliedJobDetails.email;
      appliedJobModelData.appliedRole = appliedJobDetails.appliedRole;
      appliedJobModelData.appliedCompany = appliedJobDetails.appliedCompany;
      
      await appliedJobModelData.save();

      resolve('Applied job details saved successfully');
    } catch (error) {
      reject(error);
    }
  });
};




module.exports.loginuserDBService = (studentDetails) => {
  return new Promise(async function myFn(resolve, reject) {
    try {
      const result = await studentModel.findOne({ email: studentDetails.email });

      if (result !== null) {
        // Decrypt the password
        var decrypted = encryptor.decrypt(result.password);

        if (decrypted == studentDetails.password) {
          console.log('Student Validated Successfully');
          resolve({ status: true, msg: "Student Validated Successfully" });
        } else {
          console.log('Student Validation Failed');
          reject({ status: false, msg: "Student Validation Failed" });
        }
        
      } else {
        console.log('Invalid Student Data');
        reject({ status: false, msg: "Invalid Student Data" });
      }
    } catch (error) {
      console.error('Error finding student:', error.message);
      reject({ status: false, msg: "Error in finding student" });
    }
  });
};
 