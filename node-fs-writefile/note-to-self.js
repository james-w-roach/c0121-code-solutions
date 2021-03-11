const fs = require('fs');

fs.writeFile('note.txt', process.argv[2].toString(), (err) => {
  if (err) throw err;
});
