/*
 * /test/testflows.js
 * Author: Kim McKinley (PotOfCoffee2Go) <kim@lrunit.net>
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
const spawnSync = require('child_process').spawnSync;

// Wait for user input
function input(rl, prompt, callback) {
    rl.question(prompt, function (x) {
        rl.close();
        callback(x);
    });
}


console.log('');
console.log('Test ala file in/out nodes');
console.log('');

// Copy the test flows unless already done
var firstRun = false;
if (!fs.existsSync('./test/.flotsam/userdir/alafiletests.json')) {

    console.log('Create directories to hold node-red settings, test flows, files, etc.');
    console.log('./test/.flotsam is home directory');
    
    spawnSync('mkdir', ['.flotsam'], {
      env: process.env,
      cwd: './test',
      stdio: 'inherit'
    });
    
    console.log('./test/.flotsam/userdir contains the node-red settings and test flows');
    spawnSync('mkdir', ['.flotsam/userdir'], {
      env: process.env,
      cwd: './test',
      stdio: 'inherit'
    });
    
    console.log('./test/.flotsam/files is root directory that holds the files');
    spawnSync('mkdir', ['.flotsam/files'], {
      env: process.env,
      cwd: './test',
      stdio: 'inherit'
    });
    console.log('');

    fs.copySync('./flows/alafiletests.json', './test/.flotsam/userdir/alafiletests.json');
    firstRun = true;
}

console.log('------------------------------------------------------');
console.log('Note that a "npm link" to alasql nodes will still be active when you are done testing');
console.log(' thus the alasql nodes will show up by default in all node-red servers.');
console.log(' Can see it by doing a "npm list -g --depth=0"');
console.log('If you do not wish the alasql nodes to show up as a default in node-red:');
console.log(' In a command window go to "' + require('path').resolve(__dirname, '..')+'"');
console.log(' Enter command "npm unlink"');

if (firstRun) {
    
    console.log('npm link');
    
    spawnSync('npm', ['link'], {
      env: process.env,
      cwd: './',
      stdio: 'inherit'
    });

    console.log('');
    var readline = require('readline');
    
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('------------------------------------------------------');
    input(rl, "Note npm link comment above and press enter to continue: ", () => {
        fireUpNodeRed();
    });
}
else {
    console.log('------------------------------------------------------');
    fireUpNodeRed();
}

function fireUpNodeRed() {
    console.log('Flows that test ala file in/out nodes');
    console.log('');
    console.log('The home directory for file storage is ./test/.flotsam/files');

    spawnSync('node-red', ['-u', '../../.flotsam/userdir', '../userdir/alafiletests.json'], {
      env: process.env,
      cwd: './test/.flotsam/files',
      stdio: 'inherit'
    });
}
