const express = require('express');
const app = express();
const router = require('./Routes/index.routes');
const path = require('path');
require('dotenv').config({path: 'src/.env'});
app.set('port', process.env.PORT);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);
app.use('/public', express.static('public'));



module.exports = app;