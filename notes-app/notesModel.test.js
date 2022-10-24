const NotesModel = require('./notesModel')

describe('NotesModel', () => {
  it('initally returns an empty array', () =>{
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })
  it('it returns notes when one is added', () =>{
    const model = new NotesModel();
    model.addNotes('Buy milk')
    expect(model.getNotes()).toEqual(['Buy milk']);
  })
  it('it returns notes when more than one is added', () =>{
    const model = new NotesModel();
    model.addNotes('Buy milk')
    model.addNotes('Wash clothes')
    model.addNotes('Walk dog')
    expect(model.getNotes()).toEqual(['Buy milk', 'Wash clothes', 'Walk dog']);
  })
  it('it resets the notes', () =>{
    const model = new NotesModel();
    model.addNotes('Buy milk')
    model.addNotes('Wash clothes')
    model.reset()
    expect(model.getNotes()).toEqual([]);
  })
})