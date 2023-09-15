const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Tyler Blotter");
});

app.get('/madi', (req, res) => {
    res.send("Madi Blotter");
});

app.listen(process.env.PORT || PORT);
console.log("Web Server is listening at port " + (process.env.PORT || PORT));