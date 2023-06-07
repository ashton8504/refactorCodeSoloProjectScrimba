Sunglasses Store - ES6 Refactor

This project is a simple sunglasses store where users can customize and view different sunglasses models with various frame and lens colors. The initial code was written in HTML, CSS, and JavaScript. The goal of this refactor was to update the JavaScript code to utilize ES6 features and improve readability.

Changes Made

ES6 Syntax Updates:
The var keyword was replaced with const and let where appropriate to improve variable scoping and avoid accidental reassignments.

Arrow function syntax was used for concise function definitions, improving readability and reducing code.

Object property shorthand syntax was used to simplify object property assignments and improve code readability.

Destructuring assignment was used to extract properties from objects in a more concise way, reducing code verbosity.

Code Structure and Logic:
The sunglassesOptions and sunglasses objects were defined using const instead of var since their values do not change.

The sunglassesNew variable was declared using let instead of var to allow reassignment within the event listener.

The setSunglasses function now has a default parameter of sunglasses to handle the case when sunglassesNew is not defined.

The render function was updated to receive the sunglassesNew object as a parameter instead of accessing it from the outer scope. This promotes encapsulation and improves modularity.
The render function was refactored to use object destructuring assignment to extract properties from the sunglassesNew object, improving code readability.

The addHighlight function was left unchanged, as it did not require any modifications related to ES6 syntax.

Event Listener:
The event listener callback function was updated to use arrow function syntax for a concise and clear definition.

The const keyword was used instead of var for the clickedItem variable since its value does not change.

The initial assignment of sunglassesNew within the event listener was updated to utilize the logical OR (||) operator to fallback to the original sunglasses object when sunglassesNew is not defined.

The use of Array.from() was replaced with the spread operator (...) to convert HTML collections to arrays, improving code readability.

The .find() method was used instead of .filter() to retrieve the first matching item from the arrays in sunglassesOptions, reducing code complexity.

Conclusion:

This refactor introduced several ES6 features and syntax updates to the original code, improving code readability, modularity, and promoting best practices. The changes made simplify variable declarations, utilize arrow functions, object destructuring assignment, and other ES6 enhancements. The refactored code is more concise, easier to understand, and aligns with modern JavaScript standards.
