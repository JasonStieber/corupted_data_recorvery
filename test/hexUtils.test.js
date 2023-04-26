const { hexToAscii } = require('../src/hexUtils');

test('hexToAscii should correctly convert hexadecimal to ASCII', () => {
  const hex = '48656c6c6f20576f726c64'; // 'Hello World' in hex
  const expectedAscii = 'Hello World';

  const actualAscii = hexToAscii(hex);
  expect(actualAscii).toBe(expectedAscii);
});