function hexToAscii(hex) {
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
  }
  
function stringToHex(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
      hex += str.charCodeAt(i).toString(16).padStart(2, '0');
    }
    return hex;
}
function processHexDump(hexDump) {
    const lines = hexDump.split('\n');
    let processedHex = '';
  
    for (const line of lines) {
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const hexLine = line.substring(colonIndex + 1).trim();
        const hexBytes = hexLine.split(' ');
        for (const hexByte of hexBytes) {
          if (hexByte.length === 4) {
            processedHex += hexByte.substring(0, 2) + hexByte.substring(2, 4);
          }
        }
      }
    }
  
    return processedHex;
  }

  module.exports = {
    hexToAscii,
    stringToHex,
    processHexDump
  };

  