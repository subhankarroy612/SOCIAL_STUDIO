const express = require('express');
const jwt = require('jsonwebtoken');
const  AuthMiddleware  = require('../Middlewares/AuthMiddleware');
const blogModel = require('../Models/blog.model');
const userModel = require('../Models/user.model');
require('dotenv').config()

const app = express.Router()

app.get('/', (req, res) => res.send('User Route!'))

// app.use(AuthMiddleware)

app.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        let AllBlogs = await blogModel.find({ user: id })
        let user = await userModel.findById(id)
        return res.send({ blogs: AllBlogs, userDetails: user })
    } catch (e) {
        return res.send(e.message)
    }
})

app.get('/:id/friends', (req, res) => {
    try {

    } catch (e) {

    }
})

app.get('/:id/:friendId', (req, res) => {
    try {

    } catch (e) {

    }
})

module.exports = app;
