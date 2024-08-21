const express = require('express');
const fs = require('fs').promises;

const app = express();

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter((line) => line.trim() !== '');
    const fields = {};
    students.forEach((student) => {
      const [firstname,, , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    let output = `Number of students: ${students.length}\n`;
    for (const [field, names] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }
    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

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
