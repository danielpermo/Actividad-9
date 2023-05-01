const router = require('express').Router();

const { getAll, create, getById } = require('../../models/autor.model');

// GET /api/autores
router.get('/', async (req, res) => {
    console.log(req.post);
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// GET /api/clients/IDCLIENT
router.get('/:autorId', async (req, res) => {

    const { autorId } = req.params;

    try {
        const [result] = await getById(autorId);
        if (result.length === 0) {
            return res.json({ fatal: 'No existe un autor con ese ID en la base de datos' });
        }
        res.json([result]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// POST /api/autores
router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
        // const [autor] = await
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

// PUT /api/autores
router.put('/:autorId', async (req, res) => {
    const { autorId } = req.params;

    try {
        await update(autorId, req.body);
        const [autor] = await getById(autorId);
        res.json(autor[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

module.exports = router;