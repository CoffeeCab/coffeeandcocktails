const express = require('express');
const path = require('path');
const PORT  = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = require('./routes/api');

if (process.env.NODE_ENV === 'production') {
  app.us(express.static(path.resolve(__dirname, '../dist')))
}

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
});

// for singup & login
app.use('/api', apiRouter);

// checkout 
// cart  
// menu page 


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

// listenning to port 
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;