require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('node:path');
const app = express();
const connection = require('./config/connection');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const session = require('express-session');
const passport = require('passport');



app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const routes = require('./routes/index-routes');
app.use('/', routes)

const port = process.env.PORT || 8080

      app.listen(port, (err, res) => {
          if (err) {
              console.log(err)
              return res.status(500).send(err.message)
          } else {
              console.log('[INFO] Server Running on port:', port)
          }
      })
