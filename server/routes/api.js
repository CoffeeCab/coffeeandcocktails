const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', userController.addUser, (req, res) => {
  return res.status(200).send(res.locals.data.user);
});

router.get('/login', userController.checkUser, (req, res) => {
  return res.status(200).send(res.locals.data.user);
});

module.exports = router;