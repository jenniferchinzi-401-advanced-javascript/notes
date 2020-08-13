#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/notesy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Requires the library files you will be writing (input, notes)

const Input = require('./lib/input.js');
const Notes = require('./lib/notes');


// Instantiates an instance of an “Input” parser module
const input = new Input();

// Parses the command line input and returns the command and data
const notes = new Notes();

// Passes the command to the Notes library, which executes the command

if (input.valid()) {
  notes.execute(input.command)
    .then(mongoose.disconnect)
    .catch(error => console.error(error));
} else {
  help();
}

function help() {
  console.log('Oops!  Sorry, something went terribly wrong.');
  process.exit();
}