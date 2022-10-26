class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    

    this.buttonEl = document.querySelector('#add-note-button');

    this.buttonEl.addEventListener('click', () => {
      this.model.addNotes(document.querySelector('#new-note').value)
      const inputEl = document.querySelector('#new-note');
      inputEl.value = ''
      this.displayNotes();
    });
  }

  newParagraph = (note) => {
    const mainContainerEl = document.querySelector('#main-container');
    const newParagraph = document.createElement('div');
    newParagraph.textContent = note;
    newParagraph.className = 'note';
    mainContainerEl.append(newParagraph);
  }

  displayNotes(){
    document.querySelectorAll('.note').forEach(note => {
      note.remove()
    })
    this.model.getNotes().map(this.newParagraph);
  }

  displayNotesFromApi(){
    this.client.loadNotes(repoData => {
      this.model.setNotes(repoData);
      this.displayNotes();
    })
  }
}

module.exports = NotesView

const NotesClient = require('./notesclient.js')
const client = new NotesClient();

const NotesModel = require('./notesmodel.js')
const model = new NotesModel();

const view = new NotesView(model, client);

view.displayNotesFromApi();