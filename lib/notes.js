'use strict';

const NotesModel = require('./notes-schema.js');
const notesSchema = require('./notes-schema.js');

// How will you use that object to run the correct method?
// You can predict that add won’t be the only action we’re going to have to handle…

class Notes{

  // constructor(options) {
  //   this.action = options.command.action;
  //   this.payload = options.command.payload;
  // }

  async execute(command) {
    switch (command.action) {
    case 'add':
      return this.add(command.payload, command.category);
      // break;
    case 'list':
      return this.list(command.category);
      // break;
    case 'delete':
      return this.delete(command.payload);
      // break;
    default:
      return Promise.resolve();
    }
  }

  async add(text, category) {
    // console.log('Just Checking:', category);
    const newNote = new NotesModel({ category, text });
    let savedNote = await newNote.save();
    console.log(`note saved ${text}`);
    return savedNote;
  }

  async list(category) {
    // console.log(category);
    const listOfNotes = await NotesModel.find();
    console.log(listOfNotes);
  }

  async delete(id) {
    await NotesModel.deleteOne({ _id:id }, function(err) {
      if (err) {console.log('error');}
    });
  }
}


// Exports a constructor function

module.exports = Notes;