const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('Notes routes'))

router.route('/:id')
    .get();

module.exports = router;
