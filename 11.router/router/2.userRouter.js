const express = require('express');
const router = express.Router();

router.get('', (req, res) =>{
    res.send('사용자 홈');
});
router.get('/profile', (req, res) =>{
    res.send('사용자 홈 > 프로필');
});
router.get('/settings', (req, res) =>{
    res.send('사용자 홈 > 셋팅');
});

module.exports = router;