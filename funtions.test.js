const functions = require("./functions");
const calculator = require("./calculator");

test('should return length of string input', () => {
    const input = 'hakunamatata'; // arrange
    const output = functions.stringLength(input); // act
    expect(output).toBe(12); // assert
});


test('should return the reverse of string input', () => {
    const input = 'hakunamatata'; // arrange
    const output = functions.reverseString(input); // act
    expect(output).toBe('atatamanukah'); // assert
});




describe('calculator Addition operations', () => {
    test('should return the sum of two inputs', () => {
        const num1 = 12; // arrange
        const num2 = 145;
        const output = calculator.add(num1, num2); // act
        expect(output).toBe(157); // assert
    });

    test('should return the sum of two inputs', () => {
        const num1 = 2; // arrange
        const num2 = 16;
        const output = calculator.add(num1, num2); // act
        expect(output).toBe(18); // assert
    });

    test('should return the sum of two inputs', () => {
        const num1 = 12; // arrange
        const num2 = 10;
        const output = calculator.add(num1, num2); // act
        expect(output).toBe(20); // assert
    });

});

describe('calculator subtraction operations', () => {
    test('should return the difference of two inputs', () => {
        const num2 = 12; // arrange
        const num1 = 145; //arrange
        const output = calculator.subtract(num1, num2); // act
        expect(output).toBe(133); // assert
    });

    test('should return the difference of two inputs', () => {
        const num2 = 2; // arrange
        const num1 = 16;
        const output = calculator.subtract(num1, num2); // act
        expect(output).toBe(14); // assert
    });

    test('should return the difference of two inputs', () => {
        const num1 = 12; // arrange
        const num2 = 10;
        const output = calculator.subtract(num1, num2); // act
        expect(output).toBe(-2); // assert
    });

});


describe('calculator Multiplication operations', () => {
    test('should return the multiplication of two inputs', () => {
        const num1 = 12; // arrange
        const num2 = 145;
        const output = calculator.multiply(num1, num2); // act
        expect(output).toBe(157); // assert
    });

    test('should return the multiplication of two inputs', () => {
        const num1 = 2; // arrange
        const num2 = 16;
        const output = calculator.multiply(num1, num2); // act
        expect(output).toBe(32); // assert
    });

    test('should return the multiplication of two inputs', () => {
        const num1 = 12; // arrange
        const num2 = 10;
        const output = calculator.multiply(num1, num2); // act
        expect(output).toBe(120); // assert
    });

});


describe('calculator Division operations', () => {
    test('should return the division of two inputs', () => {
        const num1 = 18; // arrange
        const num2 = 2;
        const output = calculator.divide(num1, num2); // act
        expect(output).toBe(9); // assert
    });

    test('should return the division of two inputs', () => {
        const num1 = 5000; // arrange
        const num2 = 5;
        const output = calculator.divide(num1, num2); // act
        expect(output).toBe(100); // assert
    });

    test('should return the division of two inputs', () => {
        const num1 = 100; // arrange
        const num2 = 10;
        const output = calculator.divide(num1, num2); // act
        expect(output).toBe(10); // assert
    });

});

