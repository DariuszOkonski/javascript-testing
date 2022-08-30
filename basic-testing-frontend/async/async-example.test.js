import { it, expect, describe } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

describe.concurrent('async-example', () => {
    it('should generate a token value', (done) => {
        const testUserEmail = 'test@test.com';
        
        generateToken(testUserEmail, (err, token) => {
            try {
                expect(token).toBeDefined();
                done()
            } catch (error) {
                done(error);            
            }
        });
    });
    
    it('should generate a token value', () => {
        const testUserEmail = 'test@test.com';
        
        return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
    });
    
    it('should generate a token value version await async', async () => {
        const testUserEmail = 'test@test.com';
        
        const result = await generateTokenPromise(testUserEmail);
        
        expect(result).toBeDefined();
    })
})