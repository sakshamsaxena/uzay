#!/usr/bin/env node

const fs = require('fs');
const exec = require('child_process').exec;
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var newKey = null;

rl.question("Set up a unqiue key to identify you as a blogger.\nKey : ", function(args) {
	newKey = args;
	var BloggerKey = genKey(newKey);
	updateKey(BloggerKey);
	rl.close();
});

function genKey(key) {

	var md5 = require('blueimp-md5');
	var base64 = require('base-64');
	key = md5(key);
	key = base64.encode(key);

	return key;
}

function updateKey(key) {

	var data = fs.readFileSync("config.sample.js", "ascii");
	data = data.replace("key-to-post-to-blog", key);

	fs.writeFile("config.js", data, "utf8", function(args) {
		exec("rm config.sample.js", function(err, stdout, stderr) {
			if (err)
				throw new Error(stdout)
			if (stderr)
				throw new Error(stderr)
			console.log(stdout, "All done !");
		})
	});
}