const NotesClient = require('./notesclient')

require('jest-fetch-mock').enableFetchMocks()

describe('Client class', () => {
  it('calls fetch and loads the data', (done) => {
    const client = new NotesClient();
    fetch.mockResponseOnce(JSON.stringify({
       notes: ['This note is coming from the server']
    }));

    client.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes[0]).toBe('This note is coming from the server');
      done()
    })
  })
})