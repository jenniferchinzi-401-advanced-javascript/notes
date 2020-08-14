const NotesModel = require('./notes-schema.js');

class NotesCollection {

  create(info){
    let note = new NotesModel(info);
    return note.save();
  }

  get(query){
    const promiseOfNotes = NotesModel.find(query);
    return promiseOfNotes;
  }

  delete(id){
    console.log(`Deleting ID ${ id._id}`);
    return NotesModel.deleteOne(id);
  }
}

module.exports = NotesCollection;
