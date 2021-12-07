const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require('cors');
const session = require("express-session");
const MongoStore = require("connect-mongo");
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

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongoUrl: process.env.MONGO_URL, dbNAme: 'sessions'}),
  cookie : {
    maxAge:(1000 * 60 * 100)
}  
}))

app.use('/', require('./routes/postRoutes'));
app.use('/', require('./routes/promptRoutes'));
app.use('/', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(
    express.static(path.join(__dirname, "./frontend/build"))
);
