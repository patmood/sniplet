var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/posts', function(req, res, next) {
  res.json([
    {title: 'how to angular', body: 'what is this I dont even', author: 'pat'},
    {title: 'how to node', body: 'what is this I do not even', author: 'pat'},
    {title: 'smelliest cheese', body: 'blue I guess', author: 'pat'},
    {title: 'cooking rice', body: 'just use a rice cooker, duh', author: 'pat'},
  ]);
});

module.exports = router;
