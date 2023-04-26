const fs = require('fs');
const path = require('path');
const { searchSampleString } = require('./searchString');

const dataPath = path.join(__dirname, '../data/corrupted_data.txt');
const sampleString = 'your_sample_string_here';

fs.readFile(dataPath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const found = searchSampleString(data, sampleString);
  console.log(`Sample string "${sampleString}" was ${found ? 'found' : 'not found'} in the corrupted data.`);
});