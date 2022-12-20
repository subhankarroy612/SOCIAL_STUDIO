const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../Models/user.model');
require('dotenv').config()

const app = express.Router();

app.get('/', (req, res) => res.send('Users Route!'))

app.post('/register', async (req, res) => {
    const { firstName, lastName, location, occupation, email, avatar, password } = req.body;
    console.log(req.body);
    try {
        let existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.send('User already exists')
        }

        const newUser = userModel({ firstName, lastName, location, occupation, email, avatar, password })
        await newUser.save()
        return res.send('Signup Successful');

    } catch (e) {
        if (e.message.includes('duplicate')) {
            return res.send('User already exists')
        }
        return res.send(e.message)
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let existingUser = await userModel.findOne({ email, password });

        if (existingUser) {
            let token = jwt.sign({ _id: existingUser._id, email, role: existingUser.role }, process.env.TOKEN, { expiresIn: '7d' });
            return res.send({ message: 'Login Successful', token, avatar: existingUser.avatar, name: existingUser.firstName + existingUser.lastName, location: existingUser.location, occupation: existingUser.occupation, email: existingUser.email })
        } else {
            return res.send('Wrong Credentials')
        }
    } catch (e) {
        return res.send(e.message)
    }
})

app.post('/userDetails', async (req, res) => {
    const { token } = req.body
    try {
        let verification = jwt.verify(token, process.env.TOKEN);
        if (verification) {
            let findUser = await userModel.findOne({ email: verification.email })
            return res.send(findUser)
        }
    } catch (e) {
        return res.send(e.message)
    }
})


module.exports = app;
