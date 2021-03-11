const fs = require('fs');
const json = require('./data.json');
const action = process.argv[2];
const input = process.argv[3];
const input2 = process.argv[4];

function addEntry() {
  let id = json.nextId;
  json.notes[id] = input;
  json.nextId++;
  var newJSON = JSON.stringify(json, null, 2);
  return newJSON;
}

function deleteEntry() {
  for (var key in json.notes) {
    if (input === key) {
      delete json.notes[key];
    }
  }
  var newJSON = JSON.stringify(json, null, 2);
  return newJSON;
}

function updateEntry() {
  for (var key in json.notes) {
    if (input === key) {
      json.notes[key] = input2;
    }
  }
  var newJSON = JSON.stringify(json, null, 2);
  return newJSON;
}

if (action === 'read') {
  for (var key in json.notes) {
    console.log(`${key}:`, json.notes[key].toString())
  }
} else if (action === 'add') {
  fs.writeFile('data.json', `${addEntry()}`, (err) => {
    if (err) throw err;
  });
} else if (action === 'delete') {
  fs.writeFile('data.json', `${deleteEntry()}`, (err) => {
    if (err) throw err;
  });
} else if (action === 'update') {
  fs.writeFile('data.json', `${updateEntry()}`, (err) => {
    if (err) throw err;
  });
} else {
  console.log(`Invalid command`);
}
