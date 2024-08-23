const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbpath = process.argv[2];
  try {
    const output = await countStudents(dbpath);
    res.status(200).send(`This is the list of our students\n${output}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});
module.exports = app;
