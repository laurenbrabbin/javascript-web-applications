class NotesClient {
  loadNotes(callback, errorCallback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data)
    })
    .catch(error => errorCallback(error))
  }
  createNote(note, errorCallback){ // send a POST request to the notes backend to create a new note.
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
    .catch(error => errorCallback(error))
  }
  resetNotes(callback){
    fetch('http://localhost:3000/notes', {method: 'DELETE'})
    .then(response => response.json())
    .then(data => {
      callback(data)
    })
  }
  //emojiConvertor(text, callback){
  //  fetch('https://makers-emojify.herokuapp.com/', {
  //    method: 'POST',
   //   text: JSON.stringify(text)
  //  })
  //  .then(response => response.json())
  //  .then(data => {
  //    callback(data)
  //  })
 // }
}

module.exports = NotesClient
