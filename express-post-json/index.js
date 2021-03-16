const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});

let nextId = 1;

const grades = {};

app.get('/api/grades', (req, res) => {
  const output = [];
  for (const key in grades) {
    output.push(grades[key]);
  }
  res.json(output);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  grades[nextId] = req.body;
  res.status(201).json(grades[nextId]);
  nextId++;
});
