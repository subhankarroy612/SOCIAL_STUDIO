const { Schema, model, default: mongoose } = require('mongoose');

const blogSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    likes: { type: [mongoose.Schema.Types.ObjectId] },
    comment: { type: [mongoose.Schema.Types.ObjectId], ref: "comment" }
}, {
    timestamps: true
})

const blogModel = model('blogs', blogSchema);

module.exports = blogModel;