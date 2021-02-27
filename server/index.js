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

app.get('/employees', (req, res) => {
  console.log('hii');
  db.query('SELECT * FROM employees', (err, data) => {
    if (err) {
      console.log('db err', err);
    } else {
      res.send(data);
    }
  });
});

app.put('/update', (req, res) => {
  const wage = req.body.wage;
  const id = req.body.id;
  db.query(
    'UPDATE employees SET  wage = ? where id = ?',
    [wage, id],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM employees WHERE id = ?', [id], (err, result) => {
    err && console.log(err);
    !err && res.send(result);
  });
});

app.listen(3001, () => {
  console.log('your server is running');
});
