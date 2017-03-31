#!/usr/bin/env node

const fs = require('fs');
const exec = require('child_process').exec;
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var newKey = null;
var name = null;

rl.question("Hi !\nWhat would you like to keep your Author name as ?\nAuthor : ", function(args) {
	name = args;
	rl.question("Set up a unqiue key to identify you as a blogger.\nKey : ", function(args) {
		newKey = args;
		newKey = genKey(newKey);
		updateConfig();
		rl.close();
	});
});

function genKey(key) {

	var md5 = require('blueimp-md5');
	var base64 = require('base-64');
	key = md5(key);
	key = base64.encode(key);

	return key;
}

function updateConfig() {

	var data = fs.readFileSync("./config/config.sample.js", "ascii");
	data = data.replace("key-to-post-to-blog", newKey);
	data = data.replace("blog-post-author", name);

	fs.writeFile("./config/config.js", data, "utf8", function(args) {
		console.log(stdout, "All done !\n\nLaunching Uzay ...\n");
	});
}