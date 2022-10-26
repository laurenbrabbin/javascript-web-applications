const NotesModel = require('./notesModel.js')
const NotesView = require('./notesView.js')
const NotesClient = require('./notesClient.js')

const client = new NotesClient();
const model = new NotesModel();

const notesView = new NotesView(model, client);

notesView.displayNotesFromApi()

console.log(document.querySelectorAll('.note'))