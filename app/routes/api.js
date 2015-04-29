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

// DESTROY
router.delete('/posts/:_id', function(req, res, next) {
  Post.remove({ _id: req.params._id }, function(err, post) {
    if (err) throw err;
    res.json(post)
  })
})


module.exports = router;
