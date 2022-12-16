const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true },
    occupation: { type: String, required: true },
    avatar: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin', 'guest'],
        default: 'guest'
    }
})

const userModel = model('users', userSchema);

userModel.find().then(r=>console.log(r));

module.exports = userModel;