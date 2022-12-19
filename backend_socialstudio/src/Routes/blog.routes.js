const express = require('express');
const blogModel = require('../Models/blog.model');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const app = express.Router()

app.get('/allPosts', async (req, res) => {
    try {
        let allBlogs = await blogModel.find().populate("user")
            .then(r => res.send(r))
            .catch(e => res.send(e.message));
    } catch (e) {
        return res.send(e.message)
    }
});

app.use(async (req, res, next) => {
    const token = req.headers.token;
    try {
        if (token) {
            let v = jwt.verify(token, process.env.TOKEN);
            if (v) {
                req.user = v;
                next();
            } else
                return res.status(401).send("bhago yaha se");
        } else
            return res.status(401).send("please provide token");
    }
    catch (e) {
        return res.status(401).send(e.message);
    }
})

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



module.exports = app;