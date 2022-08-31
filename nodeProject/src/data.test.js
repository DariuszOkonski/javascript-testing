import { it, describe, vi } from 'vitest';
import { generateReportData } from './data';
import { expect } from 'vitest';

describe('generateReportData()', () => {
    it('should execute logFn if provided', () => {
        const logger = vi.fn();

        // logger.mockImplementationOnce(() => {

        // })

        generateReportData(logger);

        expect(logger).toBeCalled();
        // expect(logger).toBeCalledTimes(1);
    });
});