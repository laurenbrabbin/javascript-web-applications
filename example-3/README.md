## Exercise 1
Look at the test file messageView.test.js in the example directory. The structure looks similar to the one previously encountered:

```javascript
/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
   it('clicks the button', () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const view = new MessageView();

      const buttonEl = document.querySelector('#show-message-button');
      buttonEl.click();

      expect(document.querySelector('#message')).not.toBeNull();
   });
});
```

1. Modify the method displayMessage to add a div element to the main container. Give this div element an id of message, and set its content to This message displayed by JavaScript.


## Exercise 2

You'll now test-drive a second button to remove the message from the page when the user clicks on it. 

1. Duplicate the button inside index.html and set the new button's ID to hide-message-button.
2. Write a new test case that checks the opposite behaviour: after a click on this button, the element #message should not be present on the page.
3. Update the code in MessageView so this new test passes:
   Add a new method hideMessage.
   Attach a new event listener to the hide button, which will listen for a click, and has a callback which will execute hideMessage.
4. You should be able to open the web page in your browser and use the two buttons to show or remove the message.

## Exercise 3

1. Let's first add a text input to the web page:
```html
<input type="text" id="message-input" />
```
2. Modify the first test in messageView.test.js so that before clicking on the "show" button, it sets the HTML input's value to a message of your choice. This stands in for a user entering the message themselves. Assert that the text content of div#message is equal to this message.
3. Modify the code of the MessageView class so this test passes.
4. Reload the web page in the browser. You should be able to type in a message, and click the button to see this message appear.