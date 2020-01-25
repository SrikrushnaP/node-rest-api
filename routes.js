const express   = require('express');
const router    = express.Router();

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

module.exports = router;