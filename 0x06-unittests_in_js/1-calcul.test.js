const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 4', () => {
            assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        });

        it('should return 6', () => {
            assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
        });

        it('should return 6', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
        });

    });
    describe('SUBTRACT', () => {
        it('should return 2', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
        });

        it('should return 3', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.5, 1), 3);
        });

        it('should return 2', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.4, 1), 2);
        });
    });
    describe('DIVIDE', () => {
        it('should return 2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
        });

        it('should return 3', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 5.5, 2), 3);
        });

        it('should return 2', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2), 2);
        });
    });
    describe('DIVIDE', () => {
        it('should return Error', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
        });

        it('should return Error', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.5, 0), 'Error');
        });

        it('should return Error', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 4.4, 0), 'Error');
        });
    });
});