var HRService = require('./HRService');
var HRModel = require('./HRModel');
const JobModel = require('./JobModel');
var AppliedJobModel = require('./CandidateModel');
var createHRControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await HRService.createHRDBService(req.body);
    console.log(status);
    if (status) {
        res.send({ "status": true, "message": "HR created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var createjobControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await HRService.createjobDBService(req.body);
    console.log(status);
    if (status) {
        res.send({ "status": true, "message": "job details created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}


var getStudentByAppliedCompany = async (req, res, next) => {
  const { appliedCompany } = req.params; 
  
  try {
    const students = await AppliedJobModel.find({ appliedCompany }); 
    console.log(students);
    if (students.length === 0) {
      return res.status(404).json({ message: "No students found for the given appliedCompany" });
    }
    return res.status(200).json({ students });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Error" });
  }
};


var loginHRControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await HRService.loginHRDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

var gethr = async (req, res, next) => {
    const { email } = req.params; // Assuming the email is passed as a parameter in the request
    
    try {
      const student = await HRModel.findOne({ email }); // Retrieve the document that matches the email
      if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
      }
      return res.status(200).json({ student });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server Error" });
    }
  };


  var getjob = async (req, res, next) => {
    const { email } = req.params; // Assuming the email is passed as a parameter in the request
    
    try {
      const student = await JobModel.find({ email }); // Retrieve the document that matches the email
      if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
      }
      return res.status(200).json({ student });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server Error" });
    }
  };

  const deleteJob = async (req, res, next) => {
    const jobId = req.params.id; // Assuming the _id is passed as a parameter in the request
    
    try {
      const deletedJob = await JobModel.findByIdAndDelete(jobId);
      
      if (!deletedJob) {
        return res.status(404).json({ message: "Job Not Found" });
      }
      
      return res.status(200).json({ message: "Job Deleted Successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server Error" });
    }
  };

  


  
  
  

module.exports = { createHRControllerFn, loginHRControllerFn,gethr,createjobControllerFn,getjob,deleteJob,getStudentByAppliedCompany};