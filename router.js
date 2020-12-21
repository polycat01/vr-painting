var express = require("express");
var router = express.Router();
var Food = require("./food");
const path = require('path');

// GET all
router.get('/', (req, res)=>{
  // res.send('<form action="/test/post-username" method="POST"> <input type="text" name="username">    <button type="submit"> Send </button> </form>');
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
router.get('/About/vr-painting', (req, res)=>{
  
  res.sendFile(path.join(__dirname, 'views', 'vr-painting.html'));
});
router.get('/About/powderCoat', (req, res)=>{
  
  res.sendFile(path.join(__dirname, 'views', 'PowderCoat.html'));
});
router.get('/About/preparation', (req, res)=>{
  
  res.sendFile(path.join(__dirname, 'views', 'Preparation.html'));
});
router.get('/About/example-work', (req, res)=>{
  
  res.sendFile(path.join(__dirname, 'views', 'Example.html'));
});
router.get('/location', (req, res)=>{
  
  res.sendFile(path.join(__dirname, 'views', 'Location.html'));
});
router.get('/contact-us', (req, res)=>{
  
  res.sendFile(path.join(__dirname, 'views', 'Contact.html'));
});

router.get('/Data', (req, res) => {
  Food.find().exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// GET 1
router.get("/:_id", (req, res) => {
  Food.findById(req.params._id).exec((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(data);
  });
});

// POST (create new data)
router.post("/Success", (req, res) => {
  var obj = new Food(req.body);
  obj.save((err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("เพิ่มข้อมูลเรียบร้อย");
  });
});

// PUT (update current data)
router.put("/:_id", (req, res) => {
  Food.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("อัพเดทข้อมูลเรียบร้อย");
  });
});

// DELETE (delete 1 data)
router.delete("/:_id", (req, res) => {
  Food.findByIdAndDelete(req.params._id, (err, data) => {
    if (err) return res.status(400).send(err);
    res.status(200).send("ลบข้อมูลเรียบร้อย");
  });
});

module.exports = router;