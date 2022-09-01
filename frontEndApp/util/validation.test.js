import { it} from 'vitest';
import { validateNotEmpty } from './validation';
import { expect } from 'vitest';

it('should throw an error if an empty string is provided', () => {
    const testInput = '';

    const validationFn = () => {
        validateNotEmpty(testInput, testErrorMessage)
    }

    expect(validationFn).toThrow();
});

it('should throw an error if an empty string with blanks is provided', () => {
    const testInput = '   ';

    const validationFn = () => {
        validateNotEmpty(testInput)
    }

    expect(validationFn).toThrow();
});

it('should throw an error with the provided error message', () => {
    const testInput = '';
    const testErrorMessage = 'Test';

    const validationFn = () => {
        validateNotEmpty(testInput, testErrorMessage)
    }

    expect(validationFn).toThrow(/Test/);
})