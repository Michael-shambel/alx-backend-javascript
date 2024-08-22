import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 4', () => {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });

        it('should return 6', () => {
            expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
        });

        it('should return 5', () => {
            expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
        });

    });
    describe('SUBTRACT', () => {
        it('should return 2', () => {
            expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
        });

        it('should return 3', () => {
            expect(calculateNumber('SUBTRACT', 3.5, 1)).to.equal(3);
        });

        it('should return 2', () => {
            expect(calculateNumber('SUBTRACT', 3.4, 1)).to.equal(2);
        });
    });
    describe('DIVIDE', () => {
        it('should return 2', () => {
            expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
        });

        it('should return 3', () => {
            expect(calculateNumber('DIVIDE', 5.5, 2)).to.equal(3);
        });

        it('should return 2', () => {
            expect(calculateNumber('DIVIDE', 4.4, 2)).to.equal(2);
        });
    });
    describe('DIVIDE', () => {
        it('should return Error', () => {
            expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
        });

        it('should return Error', () => {
            expect(calculateNumber('DIVIDE', 4.5, 0)).to.equal('Error');
        });

        it('should return Error', () => {
            expect(calculateNumber('DIVIDE', 4.4, 0)).to.equal('Error');
        });
    });
});