/*
 * testflows.js
 * Author: Kim McKinley <kim@lrunit.net> (http://github.com/potofcoffee2go)
 * License: MIT
 *
 * This file creates a node-red site in ./test/flotsam under-which
 *  a node-red sitedir containing the new test flows.
 * Note! - the existing test flows JSON will be overwritten with the ones
 *  from this release!
 *
 * A files directory is also created which is the default location of the in/out
 *  files used by the test flows. If it already exists remains unchanged.
 *
 * This script normally started by npm install as a 'postinstall' directive
 *  within the project package.json.
 *
 */

'use strict';
const fs = require('fs-extra');
const resolve = require('path').resolve;
var pkg = require('../package.json');

// Insert this version into html for the ala-file nodes
console.log('Update Alasql Nodes with current version: ' + pkg.version);
var file = resolve(__dirname,'../node-red-contrib-ala-file.html');
var alasqlHtml = fs.readFileSync(file, 'utf8');
alasqlHtml = alasqlHtml.replace(/version: <i>.*<\/i>/g, 'version: <i>' + pkg.version + '</i>');
fs.writeFileSync(file, alasqlHtml, 'utf8'); 

// Insert this version into html for the alasql node
file = resolve(__dirname,'../node-red-contrib-alasql.html');
alasqlHtml = fs.readFileSync(file, 'utf8');
alasqlHtml = alasqlHtml.replace(/version: <i>.*<\/i>/g, 'version: <i>' + pkg.version + '</i>');
fs.writeFileSync(file, alasqlHtml, 'utf8'); 

console.log('');
console.log('Create Alasql Test Suite');
var userDir = resolve(__dirname,'./flotsam/userdir');
var flowFile = resolve(__dirname,'./flotsam/userdir/alafiletests.json');
var filesDir = resolve(__dirname,'./flotsam/files');

// Create/the test flows
console.log('Create directories for node-red settings, test flows, and files');

// Overwrite existing alafiletests.json with the one from this release
fs.copySync(resolve(__dirname,'../flows/alafiletests.json'), flowFile);
// Ensure we got a default place to put files in/out
fs.ensureDirSync(resolve(__dirname,'./flotsam/files'));

// Inform of the paths to various stuff
console.log('Node-red user directory:');
console.log(userDir);
console.log('Test flows copied into:');
console.log(flowFile);
console.log('Test files directory:');
console.log(filesDir);
