## Exercise 1

You should not change the HTML file contents; you'll use JS to dynamically change the page.

Work through the following steps by updating the View class in view.js:

1. Implement a new method addParagraph on View — this method should dynamically create a new p element and store it in a variable.
2. Set this new element's content to the string 'This paragraph has been dynamically added by JavaScript! (or something else).
3. Append the element to the main container element.
In the main file, (index.js) call this new method on the existing View instance.
4. When opening the HTML page, you should now see this third paragraph being added after the two other ones.

## Exercise 2

1. Add a test for the addParagraph method we created in the previous section. The test should call addParagraph and then check that there are now three paragraphs in the document.

## Exercise 3

1. Test-drive (using the template given above) a new method on the view class, clearParagraphs(). This method should remove all paragraphs from the document.
2. Implement the clearParagraphs() method so your test passes.