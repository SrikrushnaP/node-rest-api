const mongoose = require('mongoose');
const db = 'mongodb://yourMongoDBURIGoesHere'
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true  }, err => {
    if(err){
        console.log('Oops..! some db connection error'); 
        console.log("Error", err);
    } else {
        console.log('connected to mongodb');
        
    }
})