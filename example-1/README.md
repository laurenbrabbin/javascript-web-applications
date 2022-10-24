## Exercise 1

1. Modify the HTML code in the file index.html, to load the main file index.js on the page, using a <script> tag at the end of the body.
2. Reload the page in your browser. You should be able to open the browser's developer console from this page and see the message 'Hello from the developer console!' logged.
3. Update the main JS file to log to the console new Date(). If you reload the page, you should be able to see the current date printed in the console.

## Exercise 2

Work in the same project directory than in the previous section (example-1).

1. In a new file add.js, define and export a function add, which returns the sum of two numbers.
2. In a new file multiply.js, define and export a function multiply, which returns the product of two numbers.
3. In the main file, require and use the two previous functions to calculate (2 + 2) * 4 and print the result to the console (16).
4. Make sure to run npm run build to regenerate the bundle file (if that command wasn't already running in a terminal). Also make sure the bundle file is loaded by the HTML page index.html.
5. Open the page and verify the result is printed in the console.
6. Change the numbers in the operation in index.js — the file bundle.js should be automatically regenerated and, after refreshing the page, you should see a new result in the console.