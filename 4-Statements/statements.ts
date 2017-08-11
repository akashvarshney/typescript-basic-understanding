// Variable Declaration using var, let and const
// ------------------------------------------------


var x = 4;
let number = 50;
const key = 'xyz123';
//OR
var x: number = 4;
let number: number = 50;
const key: string = 'xyz123';

// Block Scoping
// -----------------
// let supports block scope. When you define, a variable using let within a block like if statement, 
// for loop, switch statement etc., block-scoped variable is not visible outside of its containing block.

function foo(flag: boolean) {
    let a = 100;
    //if block
    if (flag) {
    // 'a' exists here
    let b = a + 1;
    return b;
    }
    // Error: 'b' doesn't exist here
    return b;
    }

    // Hoisting
    // -------------

    // When you use var to declare a variable, you have to deal with hoisting. 
    // Hoisting is JavaScript's default behavior of moving variable declarations 
    // to the top of the current scope (i.e. top of the current js file or the current function). 
    // It means, in JavaScript a variable can be used before it has been declared.

    var x = "Testing";
    function foo() {
    console.log(x); //Testing
    }
    function bar() {
    console.log(x); //undefined
    var x; //x declaration is hoisted, that’s why x is undefined
    }
    foo();
    bar();


    // If, do..while, while and for Statements
    // -----------------------------------------

    // In TypeScript, if, do..while, while and for statements you can use in same way as you use in JavaScript.
   

    ////////nothing to learn new if ,do ,while  and for  ///////////////////////

    // For..In Statement
    // ------------------

    // The for...in loop iterates over the properties of an iterable object i.e. list type. 
    // The for...in loop returns a list of keys on the object being iterated and using the 
    // keys on that object you can access values.

    let list: number = [4, 5, 6];
    for (let i in list) {
    console.log(i); //keys: "0", "1", "2"
    console.log(list[i]); //values: "4", "5", "6"
    }


    // For..Of Statement
    // --------------------

    // The for...of loop iterates over the properties 
    // of an iterable object i.e. list type. The for...of loop returns a list 
    // of values on the object being iterated

    let list: number = [4, 5, 6];
    for (let i of list) {
    console.log(i); //values: "4", "5", "6",
    }

    // Operators
    // --------------

    // TypeScript supports all of the standard JavaScript operators 
    // like arithmetic operators, comparison operators, assignment operators, 
    // conditional operators, bitwise operators, logical operators and Type Operators.
