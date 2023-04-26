const { searchSampleString } = require('../src/searchString');

test('searchSampleString should return true if sample string is found', () => {
  const corruptedData = '506c6561736520747279206f7572206e65772050697a7a6121'; // 'Please try our new Pizza!' in hex
  const sampleString = 'new Pizza';

  const result = searchSampleString(corruptedData, sampleString);
  expect(result).toBe(true);
});

test('searchSampleString should return false if sample string is not found', () => {
  const corruptedData = '506c6561736520747279206f7572206e65772042657267657221'; // 'Please try our new Burger!' in hex
  const sampleString = 'new Pizza';

  const result = searchSampleString(corruptedData, sampleString);
  expect(result).toBe(false);
});