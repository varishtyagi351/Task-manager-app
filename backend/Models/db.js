const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
     .then(()=>{
        console.log("MongoDB is connected....")
     }).catch((err)=>{
        console.log("MongoDb connection error",err);
     })