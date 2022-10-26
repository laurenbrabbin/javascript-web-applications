class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl = document.querySelector('#add-note-button');

    this.buttonEl.addEventListener('click', () => {
      this.model.addNotes(document.querySelector('#new-note').value)
      const inputEl = document.querySelector('#new-note');
      inputEl.value = ''
      this.displayNotes();
    });
  }

  newParagraph = (note) => {
    const newParagraph = document.createElement('div');
    newParagraph.textContent = note;
    newParagraph.className = 'note';
    this.mainContainerEl.append(newParagraph);
  }

  displayNotes(){
    document.querySelectorAll('.note').forEach(note => {
      note.remove()
    })
    this.model.getNotes().map(this.newParagraph);
  }

  displayNotesFromApi(){
    this.client.loadNotes(notes => {
      this.model.setNotes(notes);
      this.displayNotes();
    })
  }
}

module.exports = NotesView