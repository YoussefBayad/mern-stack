const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'jhely_bolivia',
  host: 'localhost',
  password: 'jhely',
  port: '3306',
  database: 'employSystem',
});

app.post('/create', (req, res) => {
  const name = req.body.name;
  const position = req.body.position;
  const age = req.body.age;
  const country = req.body.country;
  const wage = req.body.wage;

  db.query(
    'INSERT INTO employees (name,age,position,country,wage) VALUES (?,?,?,?,?)',
    [name, age, position, country, wage],
    (e, r) => {
      if (e) {
        console.log(e);
      } else {
        console.log('success');
      }
    }
  );
});

app.listen(3001, () => {
  console.log('your server is running');
});
