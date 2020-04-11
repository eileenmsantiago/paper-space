const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');

const app = express(); 

var admin = require("firebase-admin");
var serviceAccount = require("./paperspace-aff71-firebase-adminsdk-z9xj6-51ab38044e.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://paperspace-aff71.firebaseio.com"
});

function isAuthenticated(req,res,next){
}
//access dashboard only when user is loggedin

app.get("/dashboard",isAuthenticated,function(req,res){
	
})

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
