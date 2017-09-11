var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = 3000;

const route = require('./routes/route');


mongoose.connect('mongodb://localhost:27017/projectdb');
mongoose.connection.on('connected',()=>{
    console.log('Connected to database');
});
mongoose.connection.on('error',()=>{
    console.log("Error"+err);
});

app.get('/',(req, res)=>{
    res.send("NodeJS server working");
});

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', route);


app.listen(port, ()=>{
    console.log("working @ port:"+port);
});