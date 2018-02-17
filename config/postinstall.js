#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Hi !\nWhat would you like to keep your Master Key as ?\nKey : ', function(args) {
	var data = fs.readFileSync('./config/config.sample.js', 'ascii');
	data = data.replace('key-to-append', args);

	fs.writeFile('./config/config.js', data, 'utf8', function(err) {
		if (err) {
			throw err;
		}
		console.log('All done !\n\nLaunching Uzay ...\n');
		rl.close();
	});
});
