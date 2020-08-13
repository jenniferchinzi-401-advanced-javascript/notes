'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes.js');

const notes = new Notes();
jest.spyOn(notes, 'add');
jest.spyOn(notes, 'list');
jest.spyOn(notes, 'delete');


describe('Note Module', () => {

  it('execute() does nothing with invalid options', () => {
    return notes.execute({})
      .then(() => {
        expect(notes.add).not.toHaveBeenCalled();
      });
  });

  it('notes() can add a note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload })
      .then(results => {
        expect(notes.add).toHaveBeenCalled();
      });
  });

  it('notes() can return a saved note', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload })
      .then(savedNote => {
        expect(savedNote.category).toBe('general');
        expect(savedNote.text).toBe('test note');
      });
  });

  it('notes() saves new notes with an ID', () => {
    const action = 'add';
    const payload = 'test note';
    return notes.execute({ action, payload })
      .then(savedNote => {
        expect(savedNote._id).toBeTruthy();
      });
  });

  it('notes() call for a list of notes', () => {
    const action = 'list';
    const payload = true;
    return notes.execute({ action, payload })
      .then(results => {
        expect(notes.list).toHaveBeenCalled();
      });
  });

});