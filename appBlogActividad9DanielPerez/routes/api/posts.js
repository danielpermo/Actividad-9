const router = require('express').Router();

const { getAll, create, getById } = require('../../models/post.model');

// GET /api/posts
router.get('/', async (req, res) => {
    console.log(req.user);
    try {
        // const [result] = await getAll();
        // res.json(result);
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// POST /api/posts
router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        const [post] = await getById(result.insertId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;