/**
 * @jest-environment jsdom
 */

const fs = require('fs'); 
const NotesModel = require('./notesModel');
const NotesView = require('./notesView'); 

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html'); 
  });

  it('displays 0 paragraphs', () => {
    const notesModel = new NotesModel;
    const notesView = new NotesView(notesModel);
    notesView.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(0); 
  });
  
  it('displays 1 paragraphs', () => {
    const notesModel = new NotesModel;
    notesModel.addNotes('go shopping')
    const notesView = new NotesView(notesModel);
    notesView.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(1); 
  });

  it('displays 2 paragraphs', () => {
    const notesModel = new NotesModel;
    notesModel.addNotes('go shopping')
    notesModel.addNotes('walk dog')
    const notesView = new NotesView(notesModel);
    notesView.displayNotes()
    expect(document.querySelectorAll('div.note').length).toBe(2); 
  });
})