/**
 * @jest-environment jsdom
 */

//above tells jest that the code being test is intended to be run in a browser even tho the tests themselves are running with node

const fs = require('fs'); // node's built in fs module which allows us to read non-javascript files
const View = require('./view');

describe('Page view', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html'); // We set document.body.innerHTML to have the same content of the "real" web page (that is because Jest "mocks" the HTML content internally).
  });

  it('displays 2 paragraphs', () => {
    const view = new View();
    expect(document.querySelectorAll('p').length).toBe(2); //check there are 2 paragraphs
  });

  it('adds an extra paragraph', () => {
    const view = new View();
    view.addParagraph()
    expect(document.querySelectorAll('p').length).toBe(3); //check there are 2 paragraphs
  });

  it('removes all paragraphs', () => {
    const view = new View();
    view.clearParagraphs()
    expect(document.querySelectorAll('p').length).toBe(0); //check there are 2 paragraphs
  });
});