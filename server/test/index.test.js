const { dateToAge } = require('../helpers/common');

afterEach(() => {
    jest.resetModules()
});

// Mock Date.now()
Date.now = jest.fn(() => new Date(Date.UTC(2017, 1, 1)).valueOf());

describe('dateToAge', () => {
    it('should return correct age', async () => {
        expect(dateToAge('2000-01-01')).toBe(17);
    });

    it('should return NaN', async () => {
        expect(dateToAge('')).toBe(NaN);
    });
});

// TODO Cover rest of the code
