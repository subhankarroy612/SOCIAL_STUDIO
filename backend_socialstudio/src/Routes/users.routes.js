const express = require('express');
const jwt = require('jsonwebtoken');
const AuthMiddleware = require('../Middlewares/AuthMiddleware');
const blogModel = require('../Models/blog.model');
const userModel = require('../Models/user.model');
require('dotenv').config()

const app = express.Router()

app.get('/', (req, res) => res.send('User Route!'))

app.use(AuthMiddleware)

app.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        let AllBlogs = await blogModel.find({ user: id })
        let user = await userModel.findOne({ _id: id }, { password: 0 });
        return res.send({ blogs: AllBlogs, userDetails: user })
    } catch (e) {
        return res.send(e.message)
    }
})

app.post("/profile", async (req, res) => {
    let { _id } = req.user;
    let { bgImage, aboutMe } = req.body;
    try {
        let u = await userModel.findByIdAndUpdate(_id, { profile: { bgImage, aboutMe } });
        return res.send({ message: "succesfully updated", u });
    } catch (e) {
        return res.send(e.message);
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
