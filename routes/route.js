const express = require('express');
const router = express.Router();

const Post = require('../model/post');


router.get('/getposts',(req, res, next)=>{
    Post.find((err, post)=>{
        res.json(post);
    })
});

router.post('/pushpost',(req, res, next)=>{
    let newPost = new Post({
        name: req.body.name,
        email: req.body.email,
        data: req.body.data
    });
    newPost.save((err, post)=>{
        if(err){
            res.json({msg: 'Failed to add post'});
        }else{
            res.json({msg: 'Post added successfully'});
        }
    });
});

router.delete('/getposts/:id',(req, res, next)=>{
    Post.remove({_id: req.params.id}, function(err, results){
        if(err){
            res.json(err);
        }else{
            res.json(results);
        }
    });
});

module.exports = router;