'use strict';

const minimist = require('minimist');
// Uses minimist (or any other node/npm library of your choosing) to read command line arguments
// On instantiation, evaluates and validates the input
// Returns an instance containing the action to perform and the payload for the action


class Input {

  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
  }

  parse(args) {
    
    let argsMap = {
      a: 'add',
      add: 'add',
      l: 'list',
      list: 'list',
      d: 'delete',
      delete: 'delete',
    };
    
    let thisArg = Object.keys(args).filter(eachArg => argsMap[eachArg])[0];
  
    // Alternate Option: Object.keys(args).find(key => argsMap[key]);

    const payload = typeof args[thisArg] === 'string' ? args[thisArg] : undefined;

    const category = args.c || args.category;

    return {
      action: argsMap[thisArg],
      payload,
      category,  //same as category: category,
    };
  }

  // Is the command (i.e. ‘–add’) a valid command
  // Is there data associated with the command

  
  // Stretch Goal: My understanding of this piece of code is that the !! essentially converts the contents of the return to a boolean value.  The first ! makes it a boolean return, and the second reverses the boolean so that it can check for truthiness rather than falsiness.  In this case, the input.valid() call in index.js is looking for a truthy response - if that's what it gets, then it can run the notes.execute() function because we will know we got a valid return from the parse function that checks for a/add and the payload cannot be an empty string because that would have thrown a falsy return during the .valid() check.
  
  // https://medium.com/better-programming/javascript-bang-bang-i-shot-you-down-use-of-double-bangs-in-javascript-7c9d94446054
  
  // New Requirements

  // Delete must have a payload (ID)
  // List does not need a payload

  valid() {
    // return !!(this.command.action && this.command.payload);

    if(!this.command.action){return false;}
    if(this.command.action == 'add'){
      if(!this.command.payload){
        return false;
      }
    }
    
    if(this.command.action == 'delete'){
      if(!this.command.payload){
        return false;
      }
    }

    return true;

  }
}
      
// Exports a constructor function
      
module.exports = Input;