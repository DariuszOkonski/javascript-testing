import { it, describe, vi } from 'vitest';
import { generateReportData } from './data';
import { expect } from 'vitest';

describe('generateReportData()', () => {
    it('should execute logFn if provided', () => {
        const logger = vi.fn();

        generateReportData(logger);

        expect(logger).toBeCalled();
    });
});