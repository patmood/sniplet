var express = require('express');
var router = express.Router();
var Post = require('../models/Post')

// INDEX
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts) {
    if (err) throw err;
    res.json(posts)
  })
});

// CREATE
router.post('/posts', function(req, res, next) {
  Post.create(req.body, function(err, post) {
    if (err) throw err;
    res.json(post)
  })
})

module.exports = router;
