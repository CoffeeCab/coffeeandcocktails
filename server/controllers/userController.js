const userController = {};
const db = require('../models/pg');

// log in
userController.checkUser = async (req, res, next) => {
  const { username, password } = req.params;

  const value = [username, password];
  const query = 'SELECT * From user WHERE username = $1 AND password = $2';
  
  try {
    const data = await db.query(query, value);
    
    if (data.rows[0]) {
      res.locals.data = {};
      res.locals.data.user = data.rows[0];
      return next();
    }
    else {
      return next ('user not found');
    } 
  } catch(err) {
    console.log(err, 'err in checkUser');
    return next(
    {
      log: `check userController.checkUser ${err}`,
      message: {err: 'err caught for checking user'}
    }
    );
  }
}

userController.addUser = async (req, res, next) => {
  const { username, password, firstName, lastName, email, address, city, state, zip } = req.body;
  const value = [username, password, firstName, lastName, email, address, city, state, zip];

  const query = 'INSERT INTO public.user (username, password, first_name, last_name, email, address, city, state, zip_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';

  try {
    const data = await db.query(query, value);
    console.log('db data: ', data);
    res.locals.data = {};
    res.locals.data.user = data.rows[0];
    return next();
  }
  catch(err) {
    return next ({
      log: 'Express error handler caught userController.addUser error',
      message: { err: err },
    });
  }
};


module.exports = userController;