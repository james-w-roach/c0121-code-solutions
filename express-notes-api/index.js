const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const output = [];
  for (const key in data.notes) {
    output.push(data.notes[key]);
  }
  res.status(200).json(output);
});

app.get('/api/notes/:id', (req, res) => {
  if (parseInt(req.params.id, 10) < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    if (data.notes[req.params.id]) {
      res.status(200).json(data.notes[req.params.id]);
    } else {
      res.status(404).json({ error: `cannot find note with id ${parseInt(req.params.id, 10)}` });
    }
  }
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = data.nextId;
    const id = data.nextId.toString();
    data.notes[id] = req.body;
    data.nextId++;
    fs.writeFile('data.json', `${JSON.stringify(data, null, 2)}`, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'an unexpected error occurred' });
      } else {
        res.status(201).json(data.notes[id]);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (parseInt(req.params.id, 10) < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else {
    if (data.notes[req.params.id]) {
      delete data.notes[req.params.id];
      fs.writeFile('data.json', `${JSON.stringify(data, null, 2)}`, err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'an unexpected error occurred' });
        } else {
          res.sendStatus(204);
        }
      });
    } else {
      res.status(404).json({ error: `cannot find note with id ${parseInt(req.params.id, 10)}` });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (parseInt(req.params.id, 10) < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    if (data.notes[req.params.id]) {
      data.notes[req.params.id].content = req.body.content;
      fs.writeFile('data.json', `${JSON.stringify(data, null, 2)}`, err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'an unexpected error occurred' });
        } else {
          res.status(200).json(data.notes[req.params.id]);
        }
      });
    } else {
      res.status(404).json({ error: `cannot find note with id ${parseInt(req.params.id, 10)}` });
    }
  }
});
