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
  it('displays the users own message when the button is clicked', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesModel = new NotesModel;
    notesModel.addNotes('go shopping')
    const notesView = new NotesView(notesModel);

    const inputEl = document.querySelector('#new-note');
    const buttonEl = document.querySelector('#add-note-button');

    inputEl.value = 'test note'
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toBe(2);
    expect(document.querySelectorAll('div.note')[1].textContent).toEqual('test note')
  })
  it('clears the previous notes when a new note is added', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesModel = new NotesModel;
    notesModel.addNotes('go shopping')
    const notesView = new NotesView(notesModel);

    const inputEl = document.querySelector('#new-note');
    const buttonEl = document.querySelector('#add-note-button');

    inputEl.value = 'test note'
    buttonEl.click();

    inputEl.value = 'another test note'
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toBe(3);
  })
  it('displays the notes from the API', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const client = {
      loadNotes: () => 'This note is coming from the server'
    }
    const notesModel = new NotesModel;
    const notesView = new NotesView(notesModel, client);
    notesView.displayNotesFromApi()
    expect(notesView.displayNotesFromApi()).toBe('This note is coming from the server')
  })
})