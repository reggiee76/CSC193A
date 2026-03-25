'use strict';

const express = require('express');
const app = express();

// Define Endpoints
app.get('/hello', function (req, res){
    res.type('text');
    res.send('Hello World');
});

// Exercise 1
app.get('/math/circle/:r', function (req, res){
    let r = req.params['r'];
    let area = Math.PI * r * r;
    let circumference = Math.PI * 2 * r;

    res.json({
        "area": area,
        "circumference": circumference
    });
});

// Exercise 2
app.get('/hello/name', function (req, res) {
    let first = req.query['first'];
    let last = req.query['last'];

    if(first && last){
        res.type('text').send(`Hello ${first} ${last}`);
    } else {
        let missing = [];
        if (!first) missing.push('first');
        if (!last) missing.push('last');

        res.status(400).type('text').send("Missing Required GET parameters: " + missing.join(', '));
    }
});


app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);