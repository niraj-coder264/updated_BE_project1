var HRModel = require('./HRModel');
var jobmodel = require('./JobModel')
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createHRDBService = (HRDetails) => {
  return new Promise(async function myFn(resolve, reject) {
    try {
      var HRModelData = new HRModel();
      HRModelData.name = HRDetails.name;
      HRModelData.email = HRDetails.email;
      HRModelData. registerAs = HRDetails. registerAs;
      HRModelData. collegeOrCompanyName = HRDetails. collegeOrCompanyName;
      
      
      // Encrypt the password
      var encrypted = encryptor.encrypt(HRDetails.password);
      HRModelData.password = encrypted;

      // Save the document
      const result = await HRModelData.save();

      // Handle the result
      console.log('HR saved successfully:', result);
      resolve(true);
    } catch (error) {
      console.error('Error saving HR:', error.message);
      reject(false);
    }
  });
};


module.exports.createjobDBService = (jobDetails) => {
  return new Promise(async function myFn(resolve, reject) {
    try {
      var jobModelData = new jobmodel();
      jobModelData.jobRole = jobDetails.jobRole;
      jobModelData.email = jobDetails.email;
      jobModelData.experience = jobDetails.experience;
      jobModelData.jobType = jobDetails.jobType;
      jobModelData.jobLocation = jobDetails.jobLocation;
      jobModelData.lastDate = jobDetails.lastDate;
      jobModelData.companyName = jobDetails.companyName; // Add the new field

      // Save the document
      const result = await jobModelData.save();

      console.log('Job details saved successfully:', result);
      resolve(true);
    } catch (error) {
      console.error('Error saving job:', error.message);
      reject(false);
    }
  });
};

module.exports.loginHRDBService = (HRDetails) => {
  return new Promise(async function myFn(resolve, reject) {
    try {
      const result = await HRModel.findOne({ email: HRDetails.email });

      if (result !== null) {
        // Decrypt the password
        var decrypted = encryptor.decrypt(result.password);

        if (decrypted == HRDetails.password) {
          console.log('HR Validated Successfully');
          resolve({ status: true, msg: "HR Validated Successfully" });
        } else {
          console.log('HR Validation Failed');
          reject({ status: false, msg: "HR Validation Failed" });
        }
        
      } else {
        console.log('Invalid HR Data');
        reject({ status: false, msg: "Invalid HR Data" });
      }
    } catch (error) {
      console.error('Error finding HR:', error.message);
      reject({ status: false, msg: "Error in finding HR" });
    }
  });
};
 