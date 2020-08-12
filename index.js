#!/usr/bin/env node
'use strict';

// Requires the library files you will be writing (input, notes)

const Input = require('./lib/input.js');
const Notes = require('./lib/notes');


// Instantiates an instance of an “Input” parser module

const input = new Input();
// console.log('Input', input);

// Parses the command line input and returns the command and data

const notes = new Notes(input);
// console.log('Notes', notes);

// Passes the command to the Notes library, which executes the command

input.valid() ? notes.execute() : help();

function help() {
  console.log('Oops!  Sorry, something went terribly wrong.');
  process.exit();
}