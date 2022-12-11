const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    name: { type: String, required: true },
    picture: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    likes: { type: Number }
})

const blogModel = model('blogs', blogSchema);

module.exports = blogModel;