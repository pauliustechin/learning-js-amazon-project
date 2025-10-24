import { formatCurrency } from '../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('converts 0 to 0.00', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('rounds up to the nearest cent to top from 0.5', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('rounds up to the nearest cent down from 0.4', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });
});

