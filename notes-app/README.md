## Challenge 1
To complete this first task you'll need to:

1. Initialise a new project directory called notes-app, following this guidance (or watching the video above).
2. Update the contents of index.html so it contains the following HTML code:

```javascript
  <!doctype html>
  <html>
     <head>
        <title>Notes app</title>
     </head>
     <body>
        <h1>Notes app</h1>
        <div id="main-container">

        </div>
     </body>
  </html>
```

3. Update the contents of the main JS file, so it prints to the console 'The notes app is running'.
4. Make sure npm run build is running somewhere.
5. Make sure the bundle file bundle.js is loaded on the HTML page.
6. Open the web page with your browser:
```zsh
open index.html
```
7. Verify the message is correctly printed in the developer console.


## Challenge 2
You will now implement, test-driving, a JavaScript class to hold our program data (the model class). This will be similar to previous classes you've written, acting as a "wrapper" for our program's state.

Here's an acceptance criteria for this class — how we want it to behave, once implemented:

```javascript
const model = new NotesModel();

model.getNotes(); // should return []

model.addNote('Buy milk');
model.addNote('Go to the gym');

model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

model.reset();

model.getNotes(); // should now return []
```

Questions
1. Install jest in the project directory with npm install --save jest and create a test file notesModel.test.js.
2. Write the test cases for NotesModel (at least three) verifying the acceptance criteria shown above, and test-drive the NotesModel class (in notesModel.js), one test at a time. To test arrays, prefer the use of .toEqual() matcher over .toBe().

## Challenge 3
We've now implemented the class NotesModel — but it is not loaded by our web page yet. It only exists on its own, outside of the web page. 

By requiring the NotesModel class from the main file index.js, it will be "bundled" too into the bundle file, and loaded by the web page.

Questions
1. Update the code in the main file so it:
   1. requires the NotesModel class and creates a new instance of it in a variable.
   2. console.log the current list of notes, returned by the getNotes() method.
2. Make sure npm run build is running.
3. Open (or refresh) the web page — you should see the empty array of notes [] being logged in the console.
4. How would you modify the previous diagram to reflect the changes you made?


## Challenge 4

Test-drive a new class NotesView, similar to the View class seen in the previous example.

This class will:

1. have a constructor
   the model should be dependency-injected into it.
2. have a method displayNotes which will:
   get the list of notes from the model.
   for each note, create a new div element on the page (with an HTML class "note").

You'll have to research how an HTML class can be set to an element in JavaScript.



## Challenge 5

You'll need to:

1. Add a new text input and button to the web page.
2. Test-drive and implement the JS code that allows the user to input a new note title, click the button, and see the new note displayed on the page.

## Challenge 6

Exercise - clearing previous notes
This task is going to be made slightly easier thanks to the fact all our note elements have the HTML class note, so we know which ones to remove from the page. To complete this task, you'll have to research how to remove all elements having the same class.

In the test file notesView.test.js, add a new test case for which verifies that when displayNotes is called twice, there should still be the right number of notes from the model on the page.

Watch this test fail, and update now the code of the displayNotes method to make it pass.

## Challenge 7
Bonus exercise - clearing the input

1. It would also be nice if the text input would reset to an empty value after the user clicked the button. Use the .value property of the input element to reset it to a blank state.

## Challenge 8

1. Test-drive and implement the class and method. The loadNotes method should accept one argument, which is a callback function. The function should use fetch to load data from the GET /notes endpoint, and call the given callback with the result.

## Challenge 9 

1. Change the constructor of NotesView so an instance of NotesClient can be dependency-injected into it - your main file should now look like this:

```javascript
// index.js
// ...
const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);
```

2. Test-drive a new method displayNotesFromApi() on the NotesView class - this method should:

call loadNotes(callback) on the Client class.

when the response data is received, set the list of notes on the model and call displayNotes():

```javascript
// This method is new — you'll need to add it to the model class
model.setNotes(notes);
view.displayNotes();
```

remember to mock the NotesClient class in the test — since this is a dependency of NotesView. If you're not sure of how to do this, you can review the guidance on mocking in Jest.

3. Change the code in the main file so we call .displayNotesFromApi() straight away — the view will now immediately load notes from the server and display them, when the page is loaded.

## Challenge 10

1. Test-drive a new method createNote on the NotesClient class. This method should send a POST request to the notes backend to create a new note.

2. We now want to update the NotesView class so that the new method client.createNote is called when the user submits the form — test-drive this feature. Remember, here again, to mock the dependency on NotesClient in this test.

3. Make sure the view is "refreshed" with the newly created note, by calling displayNotes() again.

After completing the exercise, you should be able to do the following in the browser:

* type in and submit a new note.
* see that new note being showed on the page.
* you can also check the POST request to /notes logged in the console's Network tab.
* if you refresh the whole page, that new note should also be loaded with the original ones - it means it's been saved correctly.