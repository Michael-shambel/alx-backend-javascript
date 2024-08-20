const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

r1.on('line', (input) => {
  process.stdout.write(`Your name is: ${input}\n`);
  r1.close();
});

r1.on('close', () => {
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
});