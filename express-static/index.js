const express = require('express');
const path = require('path');

const app = express();

const join = path.join('public', __dirname);
console.log(join);

const publicStatic = express.static('public');

app.use(publicStatic);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
