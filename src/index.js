const fs = require('fs');
const path = require('path');
const { searchSampleString } = require('./searchString');
const { processHexDump } = require('./hexUtils');

const dataPath = path.join(__dirname, '..', 'data', 'corrupted_data.txt');
const outputPath = path.join(__dirname, '..', 'data', 'cleaned_hex_data.txt');
const sampleString = 'June 15, 2022 (Travel Day)';
console.log('are we even getting here seamoure ');
fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    const hexData = processHexDump(data);
    
    fs.writeFile(outputPath, hexData, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('Cleaned hex data written to', outputPath);
    });
  
    const found = searchSampleString(hexData, sampleString);
    console.log(`Sample string "${sampleString}" was ${found ? 'found' : 'not found'} in the corrupted data.`);
  });

