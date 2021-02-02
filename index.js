const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router();
//Import Router
const indexRouter =require('./routers/indexs');
const powderRouter =require('./routers/powderCoat');
const vrRouter=require('./routers/vr-painting');
const preparationRouter=require('./routers/preparation');
const exampleRouter=require('./routers/example');
const locationRouter=require('./routers/location');
const contactRouter=require('./routers/contact');
const successRouter=require('./routers/success');
const AdviceRouter=require('./routers/Advices');
const ThicknessRouter=require('./routers/Advice01')




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
app.use(cors());
app.use(bodyParser.json());

//Use Routers
app.use('/' ,indexRouter);
app.use('/About/powderCoat' ,powderRouter);
app.use('/Advice' ,AdviceRouter);
app.use('/Advice/Packed' ,ThicknessRouter);
app.use('/About/vr-painting' ,vrRouter);
app.use('/About/preparation' ,preparationRouter);
app.use('/About/example-work' ,exampleRouter);
app.use('/location' ,locationRouter);
app.use('/contact' ,contactRouter);
app.use('/Success',successRouter);


module.exports = router;
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
app.listen(PORT, () => {
  console.log("[success] task 1 : listening on port " + PORT);
});



