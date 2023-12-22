const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.port || 5000;
const dotenv = require('dotenv').config();
const mongoose = require('./mongodb/mongodbconnection')
const defaultData = require('./default');
const Router = require('./routes/route');



mongoose.connect()
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  }); 



defaultData();

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',Router);




app.listen(port,(req,res)=>{
    console.log("app run at server",port);
})