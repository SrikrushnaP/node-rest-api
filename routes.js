const express   = require('express');
const router    = express.Router();

const User      = require('./models/user'); 

const db = require('./db');//The vale we are not used directly here, it's using in user.js file

const jwt = require("jsonwebtoken");

// Return a JWT token
function returnJwt(id){
    let payload = { subject: id }
    let token = jwt.sign(payload, 'secretKey')
    return {token};
}

function verifyToken(req, res, next){
    // let token = req.headers.Authorization;
    let token = req.headers.authorization;    
    if(!token){
        return res.status(401).send('Unauthorised access 1');
    }
    let tokenWithotBearer = token.split(' ')[1];
    if( tokenWithotBearer === 'null'){
        return res.status(401).send('Unauthorised access 2');
    }
    let payload = jwt.verify(tokenWithotBearer , 'secretKey');
    if(!payload){
        return res.status(401).send('Unauthorised access 3');
    }
    req.payload = payload.subject
    next()
}
router.get('/', (req, res)=>{
    res.send('From API Route')
})
router.get('/events', (req, res) => {
    let events = [
        {
            "id_": "1",
            "name": "Auto Expo 1",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "2",
            "name": "Auto Expo 2",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "3",
            "name": "Auto Expo 3",
            "description": "Lorem Ipsum ",
            "date": "04/01/2020"
        },
        {
            "id_": "4",
            "name": "Auto Expo 4",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "5",
            "name": "Auto Expo 5",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "6",
            "name": "Auto Expo 6",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "7",
            "name": "Auto Expo 7",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "8",
            "name": "Auto Expo 8",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "9",
            "name": "Auto Expo 9",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        }
    ]
    res.json(events);
})

router.get('/event/:id_', (req, res) => {
    var id = req.params.id_-1;
    let events = [
        {
            "id_": "1",
            "name": "Auto Expo 1",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "2",
            "name": "Auto Expo 2",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "3",
            "name": "Auto Expo 3",
            "description": "Lorem Ipsum ",
            "date": "04/01/2020"
        },
        {
            "id_": "4",
            "name": "Auto Expo 4",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "5",
            "name": "Auto Expo 5",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "6",
            "name": "Auto Expo 6",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "7",
            "name": "Auto Expo 7",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "8",
            "name": "Auto Expo 8",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        },
        {
            "id_": "9",
            "name": "Auto Expo 9",
            "description": "Lorem Ipsum",
            "date": "04/01/2020"
        }
    ]
    res.json(events[id]);
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if(error){
            console.log('Oops..! some error while inserting data'); 
            // console.log("Error", err);
        } else {
            res.status(200).send(registeredUser);
        }
    })
})

router.get('/users', verifyToken, (req, res) => {
    User.find((error, users) => {
        if(error){
            console.log('Oops..! some error while extracting data'); 
            // console.log("Error", err);
        } else {
            res.status(200).send(users);
        }
    });
})

router.post('/user', (req, res) => {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log('Oops..! some error while extracting data'); 
            // console.log("Error", err);
        } else {
            res.status(200).send(user);
        }
    });
})

router.put('/user', (req, res) => { 
    let userData = req.body;
    User.updateOne({email: userData.email},{password: userData.password}, (error, user) => {
        if(error){
            console.log('Oops..! some error while updating user data'); 
        } else {
            res.status(200).send(user); 
        }
    }) 
})


router.delete('/user', (req, res) => {
    let userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log('Oops..! some error while extracting data'); 
            // console.log("Error", err);
        } else {
            if(!user){
                res.status(401).send('Email not registered with us')
            } else if(user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                // res.status(200).send(user); 
                User.deleteOne({email: userData.email}, (error, user) => {
                    if(error){
                        console.log('Oops..! some error while deleting user data'); 
                    } else {
                        res.status(200).send(user); 
                    }
                })            
            }
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log('Oops..! some error while extracting data'); 
            // console.log("Error", err);
        } else {
            if(!user){
                res.status(401).send('Eail not registered with us')
            } else if(user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                res.status(200).send(returnJwt(user._id))
                // console.log("returnJwt(user._id)", returnJwt(user._id))
                
            }
        }
    })
})

module.exports = router;