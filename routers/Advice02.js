const express =require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'Advice02.html')); //    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = router;