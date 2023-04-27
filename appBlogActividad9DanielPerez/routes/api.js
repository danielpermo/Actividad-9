const router = require('express').Router();


router.use('/posts', require('./api/posts'));

module.exports = router;