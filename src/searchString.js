const { hexToAscii } = require('./hexUtils');

function searchSampleString(corruptedData, sampleString) {
  const asciiData = hexToAscii(corruptedData);
  return asciiData.includes(sampleString);
}

module.exports = {
  searchSampleString,
};