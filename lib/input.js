'use strict';

// Exports a constructor function
// Uses minimist (or any other node/npm library of your choosing) to read command line arguments
// On instantiation, evaluates and validates the input
// Is the command (i.e. ‘–add’) a valid command
// Is there data associated with the command
// Returns an instance containing the action to perform and the payload for the action

const minimist = require('minimist');

function Input() {
  const args = minimist(process.argv.slice(2));
  console.log('Args:', args);
  this.action = this.getAction(args.a);
  this.payload = this.confirmPayload(args.p);
}

Input.prototype.getAction = function(action) {
  console.log('Action', action);
  let validAction = /a|add/i;
  return validAction.test(action) ? 'add' : 'Invalid Command';
};

Input.prototype.confirmPayload = function(payload){
  console.log('Payload', payload);
  if (payload){
    return payload;
  } else return ('Invalid Payload');
};

console.log('at Input.js');

module.exports = Input;