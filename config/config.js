const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
  connectionLimit:10,
  host: process.env.HOST,
  user: process.env.USERDB,
  password: process.env.PASSWORD,
  database: process.env.MEDPHARMACYDB,
})
pool.getConnection((err,connection)=> {
  if(err)
  throw err;
  connection.release();
});
module.exports= pool;
