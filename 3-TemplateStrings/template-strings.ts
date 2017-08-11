// Template Strings
// -------------------------

// JavaScript uses double quotes (") or single quotes (') to surround string data. 
// String data within double or single quotes can only be in one line and there is no 
// way to insert data into these strings. This results into a lot of string concatenation.



let firstname: string = "Shailendra";
let site : string = 'Gurukulsight';
//string concatenation
let str = 'Hello, my name is ' + firstname + ' and I am the founder of ' + site;
console.log(str);

// To solve these issues ES6 introduces a new type of string literal that is 
// marked with back ticks (`). By using back ticks (`) you can manipulate 
// strings easily.


// template_strings
// ---------------

let firstname: string = "Shailendra";
let site: string = 'Gurukulsight';
//template string
let str = `Hello, my name is ${firstname}
and I am the founder of ${site}`;
console.log(str);

// Type Annotation
// -------------------------------

// Type Annotations means defining the type of a variable explicitly. The type used to 
// specify an annotation can be a primitive type, an object type or any complex structure 
// to represent data.The type of a variable is defined by using colon (:) followed by type.

// Syntax
// ----------

<variable_declaration> <identifier> : <type_annotation> = <value>;
<variable_declaration> <identifier> : <type_annotation>;

let num: number = 2; //type of num is number
let str: string = "Gurukulsight"; //type of str is string
let numberList: number[] = [1, 2, 3]; //type of numberList is number array

// Type Inference
// --------------

// Type inference is a mechanism to determine the type of data at compile time in the
// absence of explicit type annotations. TypeScript will infer the type from the initial value.

let myString = 'Hello Gurukulsight'; // string
let myBool = true; // boolean
let myNumber = 1.23; // number
let myArray = ['Hello', 'Gurukulsight']; // string[]


// Type Assertion
// A type assertion is just like a type casting, but it doesn’t perform special 
// type checking or restructuring of data just like other languages like C# and 
// Java. This process entirely works on compile time. Hence it has no impact on runtime.

// Angle-bracket syntax


let anyValue: any = "Welcome to www.gurukulsight.com!";
let strLength: number = (<string>anyValue).length;