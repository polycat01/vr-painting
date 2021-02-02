const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");;
const router = express.Router();
const app = express();
const indexRouter =require('./routers/Advices');
app.use(bodyParser.urlencoded({extended: false})); app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());
app.use('/' ,indexRouter);

module.exports = router;





const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
app.listen(PORT, () => {
  console.log("[success] task 1 : listening on port " + PORT);
});

