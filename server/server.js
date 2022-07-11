const express = require('express');
const path = require('path');
const PORT  = 3000;

const app = express();

app.us(express.json());
app.use(express.urlencoded({ extended: true }))

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  app.us(express.static(path.resolve(__dirname, '../dist')))
}

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
});

app.use('/api', apiRouter);