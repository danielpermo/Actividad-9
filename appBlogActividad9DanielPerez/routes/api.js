const router = require('express').Router();


router.use('/autores', require('./api/autores'));
router.use('/posts', require('./api/posts'));
router.use('/posts_autor', require('./api/posts_autor'));

module.exports = router;