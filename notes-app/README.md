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

