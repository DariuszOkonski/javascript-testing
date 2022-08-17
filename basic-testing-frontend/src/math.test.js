import { it, expect, describe } from 'vitest';
import { add } from './math';

describe('add function', () => {
    it('should summarize all number values in an array', () => {
        const startArray = [1,2,3];
        const expectedResult = startArray.reduce((prev, curr) => prev + curr, 0);
        
        const result = add(startArray);
        
        expect(result).toBe(expectedResult);
    });
    
    it('should yield NaN if at least one invalid number is provided', () => {
        const numbers = [1,2,3,'hello'];
        
        const result = add(numbers);
        
        expect(result).toBeNaN();
    })
    
    it('should yield a correct sum if an array of numeric string values is provided', () => {
        const numbers = ['1', '2', '3'];
        const expectedResult = 6;
        
        const result = add(numbers)
        
        expect(result).toBe(expectedResult)
    }) 

    it('should yield a 0 if an empty array is provided', () => {
        const numbers = [];
        const expectedResult = 0;

        const result = add(numbers);

        expect(result).toBe(expectedResult)
    })

    it('should throw an error if no value is passed into the function', () => {
        // first way, both ways are correct
        const resultFn = () => {
            add();
        };
        expect(resultFn).toThrow(/is not iterable/);
        // expect(resultFn).not.toThrow();
        
        // second way
        try {
            const result = add();
        } catch (error) {
            expect(error).toBeDefined();
        }
    })

    it('should throw an error if provided with multiple arguments instead of an array', () => {
        const num1 = 1;
        const num2 = 2;
        
        const resultFn = () => {
            add(num1, num2)
        }

        expect(resultFn).toThrow(/is not iterable/)
    })
})