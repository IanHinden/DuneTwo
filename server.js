const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require('mongoose');

const passport = require('./passport');

require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Connection opened");
});

app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongoUrl: process.env.MONGO_URL}),
    cookie : {
      maxAge:(1000 * 60 * 100)
    }  
  })
);

// Below corsOptions are for Local development
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Below corsOptions work in deployment as Docker containers
const corsOptionsProd = {
  origin: 'http://localhost',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/postRoutes'));
app.use('/', require('./routes/promptRoutes'));
app.use('/', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(
    express.static(path.join(__dirname, "./frontend/build"))
);
