const express = require('express');
const app = express();
const routes = require('./routes/index');
require('dotenv').config();
require('./config/db')


const Port=process.env.PORT
app.use(express.json());
app.use('/api/v1/', routes)



app.listen(Port,()=>{
    console.log(`Server is running on  http://127.0.0.1:${Port}/`)
})