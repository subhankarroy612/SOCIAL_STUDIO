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

app.post('/follow/:id', async (req, res) => {

    let { id } = req.params;
    let { _id } = req.user

    try {
        await userModel.findByIdAndUpdate(id, { $push: { follow: _id } })
        return res.send('followed successfully')
    } catch (e) {
        return res.send(e.message)
    }
})

app.post('/unfollow/:id', async (req, res) => {

    let { id } = req.params;
    let { _id } = req.user

    try {
        await userModel.findByIdAndUpdate(id, { $pull: { follow: _id } })
        return res.send('unfollowed successfully')
    } catch (e) {
        return res.send(e.message)
    }
})


module.exports = app;
