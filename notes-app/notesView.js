class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  newParagraph = (note) => {
    const newParagraph = document.createElement('div');
    newParagraph.textContent = note;
    newParagraph.className = 'note';
    this.mainContainerEl.append(newParagraph);
  }

  displayNotes(){
    this.model.getNotes().map(this.newParagraph);
  }
}

module.exports = NotesView