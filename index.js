const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");

// คำสั่งเชื่อม MongoDB Atlas
const mongo_uri = "mongodb+srv://admin:vr01@cluster0.eivuh.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
  () => {
    console.log("[success] task 2 : connected to the database ");
  },
  error => {
    console.log("[failed] task 2 " + error);
    process.exit();
  }
);

const app = express();
app.use(bodyParser.urlencoded({extended: false})); app.use(express.static(path.join(__dirname, 'public')));
const route = require('./router');
app.use('/',route);
app.use((req, res,next)=>{
   res.status(404).send('<h1> Page not found </h1>');
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// คำสั่งสำหรับแปลงค่า JSON ให้สามารถดึงและส่งค่าไปยัง MongoDB Atlas ได้
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
app.listen(PORT, () => {
  console.log("[success] task 1 : listening on port " + PORT);
});

app.get("/", (req, res) => {
  res.status(200).send("หน้าแรกของ api express");
});





//app.use("/api/food", Food);

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});