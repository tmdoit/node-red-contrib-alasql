/*
 * testflows.js
 * Author: Kim McKinley <kim@lrunit.net> (http://github.com/potofcoffee2go)
 * License: MIT
 *
 * This file creates a node-red site in ./test/flotsam that creates
 *  a node-red sitedir with the test flows.
 * A files directory is also created which is the default location of the in/out
 *  files used by the test flows
 *
 * This script normally started by npm given 'npm test' command
 *  from the project directory.
 *
 */

'use strict';
const fs = require('fs-extra');
const resolve = require('path').resolve;

var isWin = /^win/.test(process.platform);

console.log('Test ala file in/out nodes');
console.log('');
var userDir = resolve(__dirname,'./flotsam/userdir');
var flowFile = resolve(__dirname,'./flotsam/userdir/alafiletests.json');
var filesDir = resolve(__dirname,'./flotsam/files');

// Copy the test flows unless already done
if (!fs.existsSync(flowFile)) {
    console.log('Create directories for node-red settings, test flows, and files');

    fs.copySync(resolve(__dirname,'../flows/alafiletests.json'), flowFile);
    fs.ensureDirSync(resolve(__dirname,'./flotsam/files'));

    console.log('Node-red user directory:');
    console.log(userDir);
    console.log('Test flows copied into:');
    console.log(flowFile);
    console.log('Test files directory:');
    console.log(filesDir);
}

console.log('Node-red user directory:');
console.log(userDir);
console.log('Test flows copied into:');
console.log(flowFile);
console.log('Test files directory:');
console.log(filesDir);
console.log('');
