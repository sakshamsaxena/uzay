 // Script to copy config.sample.js to config.js

const fs = require('fs')
const path = require('path')

try{
var sample_config_file = fs.readFileSync(path.join(__dirname, 'config.sample.js'), 'utf8');
} catch (err) {
    if (err.code === 'ENOENT') {
        console.log('Sample configuration file not found!');
        throw err;
      } else {
        throw err;
      }
      
}
try{
fs.writeFileSync(path.join(__dirname, 'config.js'),sample_config_file,'utf8');
} catch (err) {
    console.log('Cannot write sample configuratio file.')
    throw err;
}

console.log('Copied sample configuration.');
