const express = require('express');
const blogModel = require('../Models/blog.model');
const jwt = require('jsonwebtoken');
const AuthMiddleware = require('../Middlewares/AuthMiddleware');
require('dotenv').config()

const app = express.Router()

app.get('/allPosts', async (req, res) => {
    try {
        await blogModel.find().populate("user")
            .then(r => res.send(r))
            .catch(e => res.send(e.message));
    } catch (e) {
        return res.send(e.message)
    }
});

app.use(AuthMiddleware)

app.post('/allPosts', async (req, res) => {
    let { description, imageUrl } = req.body;
    let { _id } = req.user;
    try {
        let blog = await blogModel.create({ user: _id, description, imageUrl });
        return res.send({ message: "successfully posted", blog });
    } catch (e) {
        return res.send(e.message)
    }
});

app.post("/like", async (req, res) => {
    let user = req.user._id;
    let blog = req.body.blog;

    try {
        let u = await blogModel.findByIdAndUpdate(blog, { $push: { likes: user } });
        return res.send("succesfully liked");
    } catch (e) {
        return res.send(e.message);
    }

})

app.post("/dislike", async (req, res) => {
    let user = req.user._id;
    let blog = req.body.blog;

    try {
        let u = await blogModel.findByIdAndUpdate(blog, { $pull: { likes: user } });
        return res.send("succesfully disliked");
    } catch (e) {
        return res.send(e.message);
    }

})



module.exports = app;