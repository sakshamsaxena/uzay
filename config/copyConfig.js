 // Script to copy config.sample.js to config.js

const fs = require('fs')
const path = require('path')
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile(path.join(__dirname, 'config.sample.js'))
    .then((content) => {
       writeFile(path.join(__dirname, 'config.js'), content)
            .then(() => {
                console.log('Sample configuration sucessfully copied.');
            })
            .catch((err) => {
                console.log('Error writing sample configuration file.', err)
            });
    })
    .catch((err) => {
        console.log('Error reading sample configuration file.', err);
    });

