const express = require('express');
const router = express.Router();
const path = require('path');
const cors = require("cors");
const { check, validationResult } = require('express-validator');
const Contact = require('./data');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:vr01@cluster0.eivuh.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'Contact.html'));
});
router.get('/Data', (req, res) => {
    Contact.find().exec((err, data) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(data);
    });
});
    router.post('/Success', (req, res) => {
        console.log(req.body);
        var obj = new Contact(req.body);
        obj.save(() => {
            res.status(200).send("เพิ่มข้อมูลเรียบร้อย");
        });
    });

    module.exports = router;