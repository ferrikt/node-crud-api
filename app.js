const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config')
const postsRoute = require('./routes/posts');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/posts', postsRoute);


// ROUTES
app.get('/', (req, res) => {
    res.send("we are on home");
})

const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true 
}
mongoose.connect(process.env.DB_CONNECTION, connectionParams)
  .then( () => {
      console.log('Connected to database ')
  })
  .catch( (err) => {
      console.error(`Error connecting to the database. \n${err}`);
  })

// how do we start listening
app.listen(5000);

