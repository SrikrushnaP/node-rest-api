const express = require('express');


const PORT = 3000;
const app = express();

app.get('/', function(req, res){
    res.send('Hello from server');
});

app.listen(PORT, function(){
    console.log('Srrver Running on localhost:' + PORT);
})