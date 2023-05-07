const router = require('express').Router();

const { getByAutorId } = require('../../models/post_autor.model');

// GET /api/posts_autor/autorId
router.get('/:autorId', async (req, res) => {
    
    const { autorId } = req.params;

    try {
        const [result] = await getByAutorId(autorId);
        
        if (result.length === 0) {
            return res.json({ fatal: 'No existe un autor con ese ID en la base de datos' });
        }
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;