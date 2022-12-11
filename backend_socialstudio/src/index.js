const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoute = require('./Routes/auth.routes')
const usersRoute = require('./Routes/users.routes')
const blogsRoute = require('./Routes/blog.routes')
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json())
app.use('/auth', authRoute)
app.use('/auth/users', usersRoute)
app.use('/blogs', blogsRoute)

app.get('/', (req, res) => res.send('API Works!'));

mongoose.connect(process.env.URL).then(() => {
    app.listen(process.env.PORT, () => {
       console.log(`listening on port http://localhost:${process.env.PORT}`);
    })
})
