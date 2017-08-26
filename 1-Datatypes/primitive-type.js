// The
// Number
var nondecimal = 2;
var decimal = 2.4;
var hexadecimal = 0xf;
var binary = 4;
var octal = 7;
// Boolean
var yes = true;
var no = false;
//String
var name = "Akash Varshney";
var site = 'www.learntypescript.com';
// Void
// The Void primitive type represents the absence of a value. 
// The void keyword is used to define Void type in TypeScript but it is not useful because you can only assign null or undefined values to it.
// The void type is mostly used as a function return type that 
// does not return a value or as a type argument for a generic class or function.
function displayMeassge() {
    console.log("Welcome to learntypescript!");
}
var unusable = undefined;
//Null
var num = null;
var bool = null;
var str = null;
var n = null; //not useful, since you can assign only null value
// Undefined
var num = undefined;
var bool = undefined;
var str = undefined;
var un = undefined; //not useful, since you can assign only undefined value
// Symbols
// A symbol is a new, primitive data type introduced in ES6 just like
//  number and string. A symbol value is created by calling the Symbol constructor.
var s1 = Symbol();
var s2 = Symbol("mySymbol");
// Symbols are immutable, and unique. When you create two symbols with the same description then they will be unique and immutable. 
// Just like strings, symbols can be used as keys for object properties.
// Here is the list of some built-in symbols:
//     1. Symbol.hasInstance - Used for determining whether an object is one of the constructor’s instance.
//     2. Symbol.match - Used for matching the regular expression against a string.
//     3. Symbol.iterator - Returns the default iterator for an object and called by the for-of loop.
//     4. Symbol.search - Returns the index number within a string that matches the regular expression.
//     5. Symbol.split - Splits a string at the indices that match the regular expression.
// Enum
var Courses;
(function (Courses) {
    Courses[Courses["TypeScript"] = 0] = "TypeScript";
    Courses[Courses["Ionic"] = 1] = "Ionic";
    Courses[Courses["Angular2"] = 2] = "Angular2";
    Courses[Courses["NodeJS"] = 3] = "NodeJS";
})(Courses || (Courses = {}));
;
var tscourse = Courses.TypeScript;
console.log(tscourse); //0
// In the previous example, we can start the enum’s members value from 2 instead of 0.
(function (Courses) {
    Courses[Courses["TypeScript"] = 2] = "TypeScript";
    Courses[Courses["Ionic"] = 3] = "Ionic";
    Courses[Courses["Angular2"] = 4] = "Angular2";
    Courses[Courses["NodeJS"] = 5] = "NodeJS";
})(Courses || (Courses = {}));
;
var tscourse = Courses.TypeScript;
console.log(tscourse); //0
//# sourceMappingURL=primitive-type.js.map