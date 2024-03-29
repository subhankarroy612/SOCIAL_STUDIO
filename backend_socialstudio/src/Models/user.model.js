const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    occupation: { type: String, required: true },
    avatar: { type: String, required: true },
    follow: { type: [Schema.Types.ObjectId] },
    role: {
        type: String,
        enum: ['admin', 'guest'],
        default: 'guest'
    },
    profile: Object
})

const userModel = model('users', userSchema);


module.exports = userModel;