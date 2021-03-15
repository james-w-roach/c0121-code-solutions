const express = require('express');

const app = express();

app.use((req, res) => {
  console.log(`request method property:`, req.method);
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('server listening at port 3000');
})
