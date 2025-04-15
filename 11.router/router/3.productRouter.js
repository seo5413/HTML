const express = require('express');
const router = express.Router();

router.get('/details', (req, res) =>{
    res.send('상품 > 디테일');
});
router.get('/:id/details', (req, res) =>{
    res.send('상품ID > 디테일');
});


module.exports = router;