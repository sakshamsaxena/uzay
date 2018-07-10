 // Script to copy config.sample.js to config.js

const fs = require('fs')
const path = require('path')
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile(path.join(__dirname, 'config.sample.js'))
    .then((content) => {
       return writeFile(path.join(__dirname, 'config.js'), content)
    })
    .then(() => {
        console.log('Sample configuration sucessfully copied.');
    })
    .catch((err) => {
        console.log('Error copying sample configuration file.', err);
    });

