const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// 404  error handler
app.use('*', (req, res) => res.status(404).send('This page does not exist'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: `Error caught in server: ${err}]`,  
    status: 500,
    message: {err: 'An error has occurred'}
  };
  const errObj = Object.assign({}, defaultErr, errObj);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);  
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});