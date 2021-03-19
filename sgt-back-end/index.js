const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'an unexpected error occurred' });
    });
});

app.post('/api/grades', (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'please provide a valid grade entry' });
  } else if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'please provide a valid name, course, and score' });
  } else if (req.body.score <= 0 || req.body.score > 100 || !Number.isInteger(req.body.score)) {
    res.status(400).json({ error: 'please ensure score is a positive integer' });
  } else {
    const sql = `
      insert into "grades" ("course", "name", "score")
          values ($1, $2, $3)
        returning *;
    `;
    const values = [req.body.course, req.body.name, req.body.score];
    db.query(sql, values)
      .then(result => {
        res.status(201).json(result.rows[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
      });
  }
});

app.get('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (gradeId <= 0 || !Number.isInteger(gradeId)) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
  } else {
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with gradeId ${gradeId}`
          });
        } else {
          res.json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (gradeId <= 0 || gradeId > 100 || !Number.isInteger(gradeId) || !req.params.gradeId) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
  } else if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({ error: 'please provide a valid name, course, and score' });
  } else {
    const sql = `
      update "grades"
         set "course" = $1,
             "name" = $2,
             "score" = $3
       where "gradeId" = $4
      returning *;
    `;
    const params = [req.body.course, req.body.name, req.body.score, gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (gradeId <= 0 || !Number.isInteger(gradeId) || !req.params.gradeId) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
  } else {
    const sql = `
      delete from "grades"
            where "gradeId" = $1
      returning *;
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.status(204).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred.' });
      });
  }
});
