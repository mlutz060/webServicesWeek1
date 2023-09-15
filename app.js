const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Tyler Blotter");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});