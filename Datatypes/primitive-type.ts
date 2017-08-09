// The

// Number

let nondecimal: number = 2;
let decimal: number = 2.4;
let hexadecimal: number = 0xf;
let binary: number = 0b100;
let octal: number = 0o7;


// Boolean
let yes: boolean = true;
let no: boolean = false;

//String
let name: string = "Shailendra Chauhan";
let site: string = 'www.gurukulsight.com';

// Void

// The Void primitive type represents the absence of a value. 
// The void keyword is used to define Void type in TypeScript but it is not useful because you can only assign null or undefined values to it.
// The void type is mostly used as a function return type that 
// does not return a value or as a type argument for a generic class or function.
function displayMeassge(): void {
console.log("Welcome to Gurukulsight!");
}
let unusable: void = undefined;

//Null

let num: number = null;
let bool: boolean = null;
let str: string = null;
let n: null = null; //not useful, since you can assign only null value

// Undefined
let num: number = undefined;
let bool: boolean = undefined;
let str: string = undefined;
let un: undefined = undefined; //not useful, since you can assign only undefined value

// Symbols
// A symbol is a new, primitive data type introduced in ES6 just like
//  number and string. A symbol value is created by calling the Symbol constructor.

let s1 = Symbol();
let s2 = Symbol("mySymbol");

// Symbols are immutable, and unique. When you create two symbols with the same description then they will be unique and immutable. 
// Just like strings, symbols can be used as keys for object properties.

// Here is the list of some built-in symbols:
//     1. Symbol.hasInstance - Used for determining whether an object is one of the constructor’s instance.
//     2. Symbol.match - Used for matching the regular expression against a string.
//     3. Symbol.iterator - Returns the default iterator for an object and called by the for-of loop.
//     4. Symbol.search - Returns the index number within a string that matches the regular expression.
//     5. Symbol.split - Splits a string at the indices that match the regular expression.


// Enum

enum Courses {TypeScript, Ionic, Angular2, NodeJS};
let tscourse: Courses = Courses.TypeScript;
console.log(tscourse); //0

// In the previous example, we can start the enum’s members value from 2 instead of 0.
enum Courses {TypeScript =2, Ionic, Angular2, NodeJS};
let tscourse: Courses = Courses.TypeScript;
console.log(tscourse); //0