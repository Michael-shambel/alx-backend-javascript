const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1).filter((line) => line.trim() !== '');
    const fields = {};

    students.forEach((student) => {
      const [firstname,, , field] = student.trim().split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = readDatabase;
