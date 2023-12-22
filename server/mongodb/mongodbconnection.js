// const mongoose = require("mongoose")

// mongoose.connect("mongodb://127.0.0.1:27017/Sachinkhapariye",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }).then(()=>{
//     console.log("successfully connected to mongodb");
// }).catch((err)=>{
//     console.error("Error connecting to MongoDb")
// })

// module.exports = mongoose.connect;


const mongoose = require("mongoose");

let dbUrl;

// Check if running in a Heroku environment
if (process.env.NODE_ENV === 'production') {
  // Use the MONGODB_URI environment variable set by Heroku
  dbUrl = process.env.MONGODB_URI;
} else {
  // Use local MongoDB URI for development
  dbUrl = "mongodb://127.0.0.1:27017/Sachinkhapariye";
}

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

module.exports = mongoose;
