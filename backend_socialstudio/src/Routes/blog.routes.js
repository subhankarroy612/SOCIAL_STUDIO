const express = require('express');
const blogModel = require('../Models/blog.model');

const app = express.Router()

app.get('/allPosts', async (req, res) => {
    try{
        let allBlogs = await blogModel.find();
        res.send(allBlogs)
    }catch(e){
        return res.send(e.message)
    }
});



module.exports = app;