const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
var routes = require('./route/routes');
var routes1 = require('./route/routeshr');
const cors = require('cors');

app.use(cors(
  {
    origin: "http://localhost:4200"
  }
));

async function connectToDatabase() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/LoginandRegister', { });
      console.log('Connected to MongoDB');
      // The rest of your code that depends on the database connection
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
  }
  
  // Call the function to connect
  connectToDatabase();
  
  app.use(express.json());
  app.use(routes);
  app.use(routes1);
// 4200
app.listen(8086,function port(error)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("Port  Connectedddd!!!!!!!!!!! 8086")
    }
});
