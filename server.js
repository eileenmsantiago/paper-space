const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');

const app = express(); 


// middleware  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// configure database 
const db = 'mongodb+srv://paperspace:paperspace2020@cluster0-axzl6.mongodb.net/test?retryWrites=true&w=majority';

// connect to Mongo 
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('PaperSpaceDB Connected...'))
    .catch(err => console.log(err));


const port = process.env.Port || 5000; 

app.listen(port, () => console.log(`Server started on port ${port} `));