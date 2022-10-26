const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const model = new NotesModel();
model.addNotes('This is an example note')

notesView = new NotesView(model)
notesView.displayNotes()


const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())

let notes = [
  'This note is coming from the server'
];

app.use(express.json());

app.get('/notes', (_req, res) => {
  res.send(JSON.stringify(notes));
});

app.post('/notes', (req, res) => {
  notes.push(req.body.content)
  res.send(JSON.stringify(notes));
});

app.delete('/notes', (req, res) => {
  notes = [];
  res.send(JSON.stringify(notes))
});

app.listen(PORT);