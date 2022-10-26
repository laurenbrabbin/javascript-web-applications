class NotesView {
  constructor(model) {
    this.model = model;
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
}

module.exports = NotesView