const { Pool } = require('pg');

<<<<<<< HEAD

const pool = new Pool ({
=======
const pool = new Pool({
>>>>>>> main
  connectionString: process.env.PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};