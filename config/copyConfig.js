 // Script to copy config.sample.js to config.js

const fs = require('fs')

try{
var sample_config_file = fs.readFileSync('config/config.sample.js', 'utf8');
} catch (err) {
    if (err.code === 'ENOENT') {
        console.log('Sample configuration file not found!');
        throw err;
      } else {
        throw err;
      }
      
}
try{
fs.writeFileSync('config/config.js',sample_config_file,'utf8');
} catch (err) {
    console.log('Cannot write sample configuratio file.')
    throw err;
}

console.log('Copied sample configuration.');
