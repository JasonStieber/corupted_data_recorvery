const { hexToAscii, stringToHex } = require('./hexUtils');

function searchSampleString(corruptedData, sampleString) {
  const asciiToHex = stringToHex(sampleString);
  return corruptedData.includes(asciiToHex);
}

module.exports = {
  searchSampleString
};