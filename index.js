const express = require('express');
const axios = require('axios');
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


const users = require('./route/user');
app.use('/user', users);



app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})