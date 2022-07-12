const express = require('express');
const path = require('path');
const PORT  = 3000;
const session = require("express-session");
const passport = require("passport");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');

if (process.env.NODE_ENV === 'production') {
  app.us(express.static(path.resolve(__dirname, '../dist')))
}

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
});

//for google oauth
app.set("view engine", "ejs");

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);
//passport
app.use(passport.initialize());
app.use(passport.session());
//

// for OAuth authentication
app.use('/auth', authRouter);

// for signup & login
app.use('/api', apiRouter);


// catch-all handler for any requests to an unknown route
app.use('*', (req,res) => {
  return res.status(404).send('Not found');
});


// global handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error hanlder caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// listening to port 
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;

