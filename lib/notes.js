'use strict';

// How will you use that object to run the correct method?
// You can predict that add won’t be the only action we’re going to have to handle…

class Notes{

  constructor(options) {
    this.action = options.command.action;
    this.payload = options.command.payload;
  }

  // Has a method called execute() that executes the correct operation, given the above object
  
  execute() {
    switch (this.action) {
    case 'add':
      this.add(this.payload);
      break;
    default:
      break;
    }
  }

  // Write a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed
  
  add(payload){
    console.log(`Adding Note: ${payload}`);
  }
}

// Exports a constructor function

module.exports = Notes;