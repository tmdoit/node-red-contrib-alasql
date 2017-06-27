/*
 * testflows.js
 * Author: Kim McKinley <kim@lrunit.net> (http://github.com/potofcoffee2go)
 * License: MIT
 *
 * This file creates a node-red site in ./test/.flotsam that contains
 *  all the stuff needed to test the ala file in/out nodes
 * The file is started by npm given 'npm test' command
 * from the project directory.
 *
 */

'use strict';
const fs = require('fs-extra');

console.log('Test ala file in/out nodes');
console.log('');

// Copy the test flows unless already done
if (!fs.existsSync('./test/flotsam/userdir/alafiletests.json')) {
    console.log('Create directories for instance of node-red settings, test flows, files, etc.');
    fs.copySync('./flows/alafiletests.json', './test/flotsam/userdir/alafiletests.json');
    fs.ensureDirSync('./test/flotsam/files');
    console.log('./test/flotsam/userdir for node-red user directory created');
    console.log('Test flows copied into ./test/flotsam/userdir');
    console.log('./test/flotsam/files as root directory for alasql in/out files created');
} else {
    console.log('Using existing test directories');
}

console.log('');
console.log('To start node-red server for testing on Linux  : test/startup.sh');
console.log('To start node-red server for testing on Windows: npm link & test\\startup.bat & cd ..\\..\\..');
console.log('');
console.log('For windows - to stop node-red server, press ctrl-c twice ...');
console.log(' or will not go back to node-red-contrib-alasql directory');
