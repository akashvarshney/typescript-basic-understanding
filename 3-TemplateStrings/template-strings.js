// Template Strings
// -------------------------
// JavaScript uses double quotes (") or single quotes (') to surround string data. 
// String data within double or single quotes can only be in one line and there is no 
// way to insert data into these strings. This results into a lot of string concatenation.
var firstname = "Shailendra";
var site = 'learntypescript';
//string concatenation
var str = 'Hello, my name is ' + firstname + ' and I am the founder of ' + site;
console.log(str);
// To solve these issues ES6 introduces a new type of string literal that is 
// marked with back ticks (`). By using back ticks (`) you can manipulate 
// strings easily.
// template_strings
// ---------------
var firstname = "Shailendra";
var site = 'learntypescript';
//template string
var str = "Hello, my name is " + firstname + "\nand I am the founder of " + site;
console.log(str);
// Type Annotation
// -------------------------------
// Type Annotations means defining the type of a variable explicitly. The type used to 
// specify an annotation can be a primitive type, an object type or any complex structure 
// to represent data.The type of a variable is defined by using colon (:) followed by type.
// Syntax
// ----------
;
;
;
;
;
var num = 2; //type of num is number
var str = "learntypescript"; //type of str is string
var numberList = [1, 2, 3]; //type of numberList is number array
// Type Inference
// --------------
// Type inference is a mechanism to determine the type of data at compile time in the
// absence of explicit type annotations. TypeScript will infer the type from the initial value.
var myString = 'Hello learntypescript'; // string
var myBool = true; // boolean
var myNumber = 1.23; // number
var myArray = ['Hello', 'learntypescript']; // string[]
// Type Assertion
// A type assertion is just like a type casting, but it doesn’t perform special 
// type checking or restructuring of data just like other languages like C# and 
// Java. This process entirely works on compile time. Hence it has no impact on runtime.
// Angle-bracket syntax
var anyValue = "Welcome to www.learntypescript.com!";
var strLength = anyValue.length;
//# sourceMappingURL=template-strings.js.map