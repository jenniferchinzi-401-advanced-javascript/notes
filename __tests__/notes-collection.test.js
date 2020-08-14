'use strict';

require('@code-fellows/supergoose');

const NotesCollection = require('../lib/model/notes-collection');

const noteData = {text: 'Celebrate victory', category: 'Reasons to Celebrate'};

describe('Notes Collection', () => {

  it('should create - sunny day', async () => {
    const notesCollection = new NotesCollection();
    const note = await notesCollection.create(noteData);

    expect(note._id).toBeDefined();
    expect(note.text).toBe(noteData.text);
    expect(note.category).toBe(noteData.category);
  });
});

function compareProps(a, b){
  for (const key in a){
    expect (a[key]).toBe(b[key]);
  }
}