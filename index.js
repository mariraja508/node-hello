const axios = require('axios');
const express = require('express');
const cors = require('cors')
const app = express();
const body=require('body-parser')
const fs = require("fs")
app.use(body())
app.use(cors())
app.get('/', function(req, res) {
    res.send({name : 'Mariraja'})
}

app.listen(5000);
