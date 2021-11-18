const express = require ('express');
const exphbs = require('express-handlebars');
const path = require('path')

// database
const db = require('./config/database');

db.authenticate()
.then(() => console.log('Database Connected...'))
.catch(err => console.log('Error: ' + err))

const app = express();

app.get('/', (req, res) => res.send('INDEX'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
