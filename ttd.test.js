const capitalize = require('./ttd');

test('should return string with first letter capitalized', () => {
    const input = 'hakunamatata'; // arrange
    const output = capitalize(input); // act
    expect(output).toBe('Hakunamatata'); // assert
});