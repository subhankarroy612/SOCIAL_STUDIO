const { Schema, model } = require('mongoose');

const commentchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    comment: String,
    blog: { type: Schema.Types.ObjectId, ref: 'blogs', required: true }
}, {
    timestamps: true
})

const commentModel = model('comment', commentchema);

module.exports = commentModel;