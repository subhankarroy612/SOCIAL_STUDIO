const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    likes: { type: Number }
})

const blogModel = model('blogs', blogSchema);

module.exports = blogModel;