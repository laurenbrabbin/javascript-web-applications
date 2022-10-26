class NotesClient {
  loadNotes(callback, errorCallback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data)
    })
    .catch(error => errorCallback(error))
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

module.exports = NotesClient