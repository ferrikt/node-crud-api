const express = require('express');
const router = express.Router();
const Post  = require('../models/Post');

// GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err) {
        res.json({ message: err });
    }
})

// SUBMITS A POST
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const data = await post.save();
        res.json(data);
    }
    catch(err) {
        res.json({ message: err });
    }    
})

// SPECIFIC POST
router.get('/:postId', async (req, res) => {
    console.log(req.params.postId);
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch(err) {
        res.json({ message: err });
    }    
})

// DELETE A  POST
router.delete('/:postId', async (req, res) => {
    console.log(req.params.postId);
    try {
        const post = await Post.remove({_id:req.params.postId});
        res.json(post);
    }
    catch(err) {
        res.json({ message: err });
    }    
})


// UPDATE A  POST
router.patch('/:postId', async (req, res) => {
    console.log(req.params.postId);
    try {
        const post = await Post.updateOne({_id:req.params.postId}, {$set: { title: req.body.title }});
        res.json(post);
    }
    catch(err) {
        res.json({ message: err });
    }    
})

module.exports = router;