const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: '',
  host: 'localhost',
  database: 'employSystem',
});
app.listen(3001, () => {
  console.log('your server is running');
});
