const express =require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res)=>{
  res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
});


  module.exports = router;