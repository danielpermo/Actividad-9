const router = require('express').Router();

const { getAll, create, getById, update, deleteById } = require('../../models/post.model');

// GET /api/posts
router.get('/', async (req, res) => {
    console.log(req.user);
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// GET /api/posts/postId
router.get('/:postId', async (req, res) => {

    const { postId } = req.params;

    try {
        const [result] = await getById(postId);
        if (result.length === 0) {
            return res.json({ fatal: 'No existe un autor con ese ID en la base de datos' });
        }
        res.json(result[0]);
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

// PUT /api/posts/postId
router.put('/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        await update(postId, req.body);
        const [post] = await getById(postId);
        res.json(post[0]);
        const [result] = await getByAutorId(autorId);
        if (result.length === 0) {
            return res.json({ fatal: 'No existe un autor con ese ID en la base de datos' });
        }
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

// DELETE /api/posts/postId
router.delete('/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        const [post] = await getById(postId);
        await deleteById(postId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

module.exports = router;