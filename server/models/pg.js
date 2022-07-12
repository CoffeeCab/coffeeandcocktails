const { Pool } = require('pg');

const { PG_URI } =
  "postgres://molymici:mrDImwVssY_SYmaYmnE_XB1QLV8QO_pt@heffalump.db.elephantsql.com/molymici";

const pool = new Pool ({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};