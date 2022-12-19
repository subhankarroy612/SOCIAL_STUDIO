const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    likes: { type: Number }
})

const blogModel = model('blogs', blogSchema);

module.exports = blogModel;