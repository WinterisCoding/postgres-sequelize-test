const express = require('express')
const router = express.Router();
const db = require('../config/database')
const Enemy = require('../models/Enemies')


router.get('/', (req, res) => 
    Enemy.findAll()
    .then(enemies => {
        console.log(enemies)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

module.exports = router