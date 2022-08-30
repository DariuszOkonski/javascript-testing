import { it, expect, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';
import { User } from './hooks';


let testEmail = 'test@test.com';
let user = new User(testEmail);

afterEach(() => {
    testEmail = 'test@test.com';
    user = new User(testEmail);
});

it.concurrent('should update the email', () => {
    const newTestEmail = 'test2@test.com';
    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail)
});

it.concurrent('should have an email property', () => {

    expect(user).toHaveProperty('email')
});

it.concurrent('should store the provided email value', () => {

    expect(user.email).toBe(testEmail);
})

it.concurrent('should clear the email', () => {
    user.clearEmail();

    expect(user.email).toBe('');
});

it.concurrent('should still have an email property after clearing the email', () => {
    const user = new User(testEmail);
    user.clearEmail();

    expect(user).toHaveProperty('email');
})