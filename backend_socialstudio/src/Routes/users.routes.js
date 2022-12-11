const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../Models/user.model');
require('dotenv').config()

const app = express.Router()

app.get('/', (req, res) => res.send('User Route!'))

app.get('/:id', (req, res) => {
    const { id } = req.params;
    try{

    }catch(e){

    }
})

app.get('/:id/friends', (req, res) => {
    try{

    }catch(e){

    }
})

app.get('/:id/:friendId', (req, res) => {
    try{

    }catch(e){

    }
})

module.exports = app;
