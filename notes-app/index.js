const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const model = new NotesModel();
model.addNotes('This is an example note')

notesView = new NotesView(model)
notesView.displayNotes()

