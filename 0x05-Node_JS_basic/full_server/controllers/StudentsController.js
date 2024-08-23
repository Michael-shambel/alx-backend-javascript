const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const path = process.argv[2];
    try {
      const fields = await readDatabase(path);
      let output = 'This is the list of our students\n';
      for (const [field, names] of Object.entries(fields).sort()) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      res.status(200).send(output.trim());
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const fields = await readDatabase(path);
      let names = [];
      if (fields[major]) {
        names = fields[major];
      }
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
module.exports = StudentsController;
