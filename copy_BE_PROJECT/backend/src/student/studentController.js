var studentService = require('./studentservice');
var studentModel = require('./studentModel');
const JobModel = require('./JobModel');

var createStudentControllerFn = async (req, res) => 
{
    try
    {
    console.log(req.body);
    var status = await studentService.createStudentDBService(req.body);
    console.log(status);
    if (status) {
        res.send({ "status": true, "message": "Student created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating user" });
    }
}
catch(err)
{
    console.log(err);
}
}

var createAppliedJobControllerFn = async (req, res) => {
  try {
      console.log(req.body);
      
     
      var status = await studentService.createAppliedJobDBService(req.body);
      
      console.log(status);

      if (status) {
          res.send({ "status": true, "message": "Applied job  successfully" });
      } else {
          res.send({ "status": false, "message": "Error for applying job" });
      }
  } catch (err) {
      console.error(err);
      res.status(500).send({ "status": false, "message": "Internal Server Error" });
  }
}




const updateResume = async (req, res) => {
  const { studentId, filename, url } = req.body;

  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(
      studentId,
      { $set: { 'resume.filename': filename, 'resume.url': url } },
      { new: true }
    );

    res.json({ success: true, student: updatedStudent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};




var getstudent = async (req, res, next) => {
    const { email } = req.params; // Assuming the email is passed as a parameter in the request
    
    try {
      const student = await studentModel.findOne({ email }); // Retrieve the document that matches the email
      if (!student) {
        return res.status(404).json({ message: "Student Not Found" });
      }
      return res.status(200).json({ student });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Server Error" });
    }
  };
  

  





var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await studentService.loginuserDBService(req.body);
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


var getalljob = async (req, res) => {
  try {
      const allJobs = await JobModel.find({});
      console.log("all jobs ", allJobs);
      res.status(200).json(allJobs); // Send retrieved jobs as a response
  } catch (err) {
      console.error('Error retrieving jobs:', err);
      res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = { createStudentControllerFn,loginUserControllerFn,getstudent,updateResume,getalljob,createAppliedJobControllerFn};