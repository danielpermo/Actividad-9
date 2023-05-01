const router = require('express').Router();

const { getAll } = require('../../models/post.model');

router.get('/', async (req, res) => {
    console.log(req.user);
    try {
        // const [result] = await getAll();
        // res.json(result);
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.status(503).json({ fatal: error.message });
    }
});


module.exports = router;