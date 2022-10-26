class NotesClient {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data)
    })
  }
  createNote(note){ // send a POST request to the notes backend to create a new note.
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      body: JSON.stringify({
        content:note,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
  }
}

module.exports = NotesClient