const express = require('express');
const router = express.Router();
const Post  = require('../models/Post');

router.get('/', (req, res) => {
    res.send("we are on post");
})

router.post('/', (req, res) => {
    console.log(req.body);

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    .then(data => {
        res.json(date)
    })
    .catch(err => {
        res.json({ message: err })
    })
    
})

router.get('/specific', (req, res) => {
    res.send("we are on specific");
})

module.exports = router;