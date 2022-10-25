/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const inputEl = document.querySelector('#message-input');
    const buttonEl = document.querySelector('#show-message-button');

    inputEl.value = 'test message'
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('test message')
  });
  it('clicks the hide message button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
 
    const buttonEl = document.querySelector('#show-message-button');
    const hideButtonEl = document.querySelector('#hide-message-button');

    buttonEl.click();
    hideButtonEl.click();
  
    expect(document.querySelector('#message')).toBeNull();
  });
});