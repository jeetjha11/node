const mongoose = require('mongoose');

const url=process.env.MONGO_URL
const db=process.env.DB_NAME

mongoose.connect(`${url}/${db}`).then((connection)=>{
    console.log("Connected to " + connection);
}).catch((error)=>{
    console.log("error: " + error);
    });