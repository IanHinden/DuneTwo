const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Connection opened");
});

app.use('/', require('./routes/postsRoute'));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(
    express.static(path.join(__dirname, "./frontend/build"))
);
