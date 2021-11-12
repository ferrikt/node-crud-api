const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const postsRoute = require('./routes/posts');

const app = express();
app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send("we are on home");
})

//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to db")
});

// how do we start listening
app.listen(5000);

