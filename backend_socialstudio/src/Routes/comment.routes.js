const express = require('express');
const blogModel = require('../Models/blog.model');
const AuthMiddleware = require('../Middlewares/AuthMiddleware');
const commentModel = require('../Models/comment.model');


const app = express.Router()

app.use(AuthMiddleware);



app.post("/", async (req, res) => {
    let user = req.user._id;
    let blog = req.body.blog;

    try {
        let cmt = await commentModel.create({ user, blog, comment: req.body.comment });
        let u = await blogModel.findByIdAndUpdate(blog, { $push: { comment: cmt.id } });
        return res.send("succesfully commented");
    } catch (e) {
        return res.send(e.message);
    }

})

app.delete("/", async (req, res) => {
    let user = req.user._id;
    let blog = req.body.blog;

    try {
        let cmt = await commentModel.deleteOne({ user, blog });
        let u = await blogModel.findByIdAndUpdate(blog, { $pull: { comment: cmt.id } });
        return res.send("succesfully commented");
    } catch (e) {
        return res.send(e.message);
    }

})


module.exports = app;
