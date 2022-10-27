/**
 * @jest-environment jsdom
 */

 const fs = require('fs'); 
 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView'); 
 
 describe('Page view', () => {
   beforeEach(() => {
     document.body.innerHTML = fs.readFileSync('./index.html'); 
   });
 
   it('displays 0 paragraphs', () => {
     const notesModel = new NotesModel;
     const notesView = new NotesView(notesModel);
     notesView.displayNotes()
     expect(document.querySelectorAll('div.note').length).toBe(0); 
   });
   
   it('displays 1 paragraphs', () => {
     const notesModel = new NotesModel;
     notesModel.addNotes('go shopping')
     const notesView = new NotesView(notesModel);
     notesView.displayNotes()
     expect(document.querySelectorAll('div.note').length).toBe(1); 
   });
 
   it('displays 2 paragraphs', () => {
     const notesModel = new NotesModel;
     notesModel.addNotes('go shopping')
     notesModel.addNotes('walk dog')
     const notesView = new NotesView(notesModel);
     notesView.displayNotes()
     expect(document.querySelectorAll('div.note').length).toBe(2); 
   });
   it('displays the users own message when the button is clicked', () => {
     const client = {
      loadNotes: () => [],
      createNote: () => []
    }

     const notesModel = new NotesModel;
     notesModel.addNotes('go shopping')
     const notesView = new NotesView(notesModel, client);
 
     const inputEl = document.querySelector('#new-note');
     const buttonEl = document.querySelector('#add-note-button');
 
     inputEl.value = 'test note'
     buttonEl.click();
 
     expect(document.querySelectorAll('div.note').length).toBe(2);
     expect(document.querySelectorAll('div.note')[1].textContent).toEqual('test note')
   })
   it('clears the previous notes when a new note is added', () => {
     const client = {
      loadNotes: () => [],
      createNote: () => []
    }
     const notesModel = new NotesModel;
     notesModel.addNotes('go shopping')
     
     const notesView = new NotesView(notesModel, client);
 
     const inputEl = document.querySelector('#new-note');
     const buttonEl = document.querySelector('#add-note-button');
 
     inputEl.value = 'test note'
     buttonEl.click();
 
     inputEl.value = 'another test note'
     buttonEl.click();
 
     expect(document.querySelectorAll('.note').length).toBe(3);
   })
   it('displays notes pulled from an API', () => {
    const client = {
      loadNotes: () => ['This note is coming from the server']
    }

    const notesModel = new NotesModel;
    const view = new NotesView(notesModel, client);

    view.displayNotesFromApi(() => {
      expect(document.querySelectorAll('.note')[0].textContent).toBe('This note is coming from the server');

      done();
    })
   })

    it('adds a new note pulled from the POST API', () => {
      const client = {
        createNote: () => ['This note is coming from the server', 'test note'],
        loadNotes: () => ['This note is coming from the server', 'test note']
      }

      const notesModel = new NotesModel;
      const view = new NotesView(notesModel, client);
  
      const inputEl = document.querySelector('#new-note');
      const buttonEl = document.querySelector('#add-note-button');
  
      inputEl.value = 'test note'
      buttonEl.click()
  
      view.displayNotesFromApi(() => {
        expect(document.querySelectorAll('.note')[1].textContent).toBe('test note');
  
        done();
      })
    })

    it('displays error message', () => {
      const notesModel = new NotesModel;
      const notesView = new NotesView(notesModel);
      notesView.displayError()
      expect(document.getElementById('error-message').innerText).toBe('Oops, something went wrong!'); 
    });

    it('resets the API notes', () => {
      const client = {
       loadNotes: () => [],
       resetNotes: () => []
      }
 
      const notesModel = new NotesModel;
      const notesView = new NotesView(notesModel, client);
  
      
      const buttonEl = document.querySelector('#reset-notes-button');
  
      buttonEl.click();
  
      expect(document.querySelectorAll('div.note').length).toBe(0);
    })
  })
