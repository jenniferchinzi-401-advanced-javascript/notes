'use strict';

// const NotesModel = require('./model/notes-schema.js');
const NotesCollection = require('./model/notes-collection.js');

class Notes{

  constructor() {
    this.collection = new NotesCollection();
  }

  async execute(command) {
    switch (command.action) {
    case 'add':
      return this.add(command.payload, command.category);
      // break;
    case 'list':
      return this.list(command.payload);
      // break;
    case 'delete':
      return this.delete(command.payload);
      // break;
    default:
      return Promise.resolve();
    }
  }

  async add(text, category) {
    console.log(`note saved: ${text}`);
    return await this.collection.create({text, category});
  }

  async list(category) {
    let query = category ? {category} : {};
    let returnedNotes = await this.collection.get(query);
    return returnedNotes.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(` Category: ${note.category}\t ID: ${note._id}`);
      console.log('--------------------------------------------------------\n');
    });
  }

  async delete(id) {
    return this.collection.delete({ _id:id }, function(err) {if (err) {console.log('error');}
    });
  }
}


// Exports a constructor function

module.exports = Notes;