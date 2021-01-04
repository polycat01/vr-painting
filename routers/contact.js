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
        const data = new Contact({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            email: req.body.email,
            Message: req.body.Message
        });
        console.log(req.body.name +""+req.body.email+""+req.body.Message);
        data.save(() => {
            res.sendFile(path.join(__dirname, 'views', 'Success.html'));
            console.log(data);
        });
    });

    module.exports = router;



 