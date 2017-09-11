const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    data:{
        type: String,
        require: false
    }
});

const Post = module.exports = mongoose.model('Post', postSchema);