const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () =>{
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1 and 3.9', () => {
    assert.strictEqual(calculateNumber(1, 3.9), 5);
  });

  it('should return 6 when inputs are 2.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(2.2, 3.7), 6);
  });

  it('should return 7 when inputs are 2.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(2.5, 3.7), 7);
  });
});