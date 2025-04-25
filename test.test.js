const Calculator = require('./test');

// test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should initialize result to 0', () => {
        expect(calculator.getResult()).toBe(0);
    });

    test('should add numbers correctly', () => {
        expect(calculator.add(10)).toBe(10);
        expect(calculator.add(-5)).toBe(5);
    });

    test('should subtract numbers correctly', () => {
        calculator.add(10); // Set initial value
        expect(calculator.subtract(5)).toBe(5);
        expect(calculator.subtract(-5)).toBe(10);
    });

    test('should multiply numbers correctly', () => {
        calculator.add(5); // Set initial value
        expect(calculator.multiply(3)).toBe(15);
        expect(calculator.multiply(-2)).toBe(-30);
    });

    test('should divide numbers correctly', () => {
        calculator.add(20); // Set initial value
        expect(calculator.divide(4)).toBe(5);
        expect(calculator.divide(-1)).toBe(-5);
    });

    test('should throw error when dividing by zero', () => {
        expect(() => calculator.divide(0)).toThrow('Cannot divide by zero');
    });

    test('should reset result to 0', () => {
        calculator.add(10); // Set initial value
        expect(calculator.reset()).toBe(0);
        expect(calculator.getResult()).toBe(0);
    });

    test('should return the current result', () => {
        calculator.add(15);
        expect(calculator.getResult()).toBe(15);
    });
});