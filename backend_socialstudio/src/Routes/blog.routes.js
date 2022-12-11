const express = require('express');

const app = express.Router()

app.get('/', (req, res) => res.send('Blog Route!'));

module.exports = app;