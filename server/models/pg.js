const { Pool } = require('pg');

const { PG_URI } = require('../../data');

const pool = new Pool ({
  connectionString: PG_URI
});

module.export = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};