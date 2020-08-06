const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dest')));

app.listen(5002, () =>
  console.log(`Example app listening on port 5002!`)
);
