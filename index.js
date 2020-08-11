#!/usr/bin/env node
'use strict';

// Requires the library files you will be writing (input, notes)
// Instantiates an instance of an “Input” parser module
// Parses the command line input and returns the command and data
// Passes the command to the Notes library, which executes the command

const Input = require('./lib/input.js');
const Notes = require('./lib/notes');

const options = new Input();

// Notes.fetch(options);
console.log('Options', options);