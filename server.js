const express = require('express');
const mongoose = require('mongoose');
const lesson1Controller = require('./controllers/lesson1');

const app = express();
const PORT = 3000;

app.get('/', lesson1Controller.tylerRoute);
app.get('/madi', lesson1Controller.madiRoute);



app.listen(process.env.PORT || PORT);
console.log("Web Server is listening at port " + (process.env.PORT || PORT));