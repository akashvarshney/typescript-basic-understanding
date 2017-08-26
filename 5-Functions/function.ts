// TypeScript extends JavaScript functions with typed parameters, return type annotations, overloads, 
// default parameter values, and rest parameters. Like JavaScript, TypeScript functions can be created
//  both as a named function or as an anonymous function.\

 //named function with number as parameters type and return type
function add(x: number, y: number): number {
    return x + y;
    }
//anonymous function with number as parameters type and return type
let sum = function (x: number, y: number): number {
return x + y;
};

// Optional Parameters
// -------------------
// In JavaScript, you can call a function without passing any arguments, even the function specifies parameters.
//  Hence every parameter in JavaScript function is optional and when you do this, each parameter value is
//   undefined.
// In TypeScript, functions parameters are not optional. The compiler checks each call and warns you 
// if you are not passing the values as per the function receiving parameters type.

// TypeScript supports optional parameter by suffixing question mark '? ' to the parameter. Also,
//  optional parameter you can add after any required parameters in the parameter list.

//here, z is optional parameter added after required parameters x and y
function add(x: number, y: number, z?: number): number {
    if (z !== undefined)
    return x + y + z;
    else
    return x + y;
}
let resul1 = add(2, 3); //5
let resul2 = add(2, 3, 5); //10



// Default Parameters
// ---------------------
// In TypeScript, you can set a default value to a function parameter and when user does not pass the value 
// for that parameter, default value will be used for that parameter. Also, default parameter you can add 
// after any required parameters in the parameter list.

//here, z is default parameter added after required parameters x and y
function add(x: number, y: number, z: number = 0): number {
return x + y + z;
}
let resul1 = add(2, 3); //5
let resul2 = add(2, 3, 5); //10


// Rest Parameters
// ----------------

// The Rest parameter allow you to pass zero or more values to a function. 
// A Rest parameter is prefixed by three consecutive dot characters '…' and 
// allow the functions to have a variable number of arguments without using the
//  arguments object. The rest parameter is an instance of Array, so all array methods work.

// A rest parameter must follow following three rules:
// 1. Only one rest parameter is allowed.
// 2. The rest parameter type must be an array type.
// 3. The rest parameter must be the last parameter in the parameter list.


function add(x: number, ...y: number[]): number {
let result = x;
    for (var i = 0; i < y.length; i++) {
    result += y[i];
    }
    return result;
}
let result1 = add(2, 5); //7
let result2 = add(2, 5, 7, 2); //16


// Spread Operator
// ------------------
// The spread operator is introduced with ES6. It allows you to expand an array into multiple 
// formal parameters. In ES6, the spread operator example is given below
function add(x, y, z) {
    return x + y + z;
}
let nums = [2, 5, 5];
let result = add(...nums); //12

// In TypeScript, the spread operator acts like a reverse of rest parameter. 
// The spread operator in TypeScript you can use with rest parameter as given below:


function add(...x: number[]): number {
    let result = 0;
    for (var i = 0; i < x.length; i++) {
    result += x[i];
    }
    return result;
}
let nums: number[] = [2, 5, 5];
let result = add(...nums); //12


// Function Overloads
// -------------------
// In TypeScript, Function overloads is purely a compile-time process. 
// It has no impact on the compiled JavaScript code.

// The parameter list of a function overload cannot have default parameters. 
// But you can define optional parameter using question mark '? ' in function overloads.

function add(x: string, y: string, z: string): string;
function add(x: number, y: number, z: number): number;
// implementation signature
function add(x: any, y: any, z: any): any {
    let result: any;
    if (typeof x == "number" && typeof y == "number" && typeof z == "number") {
    result = x + y + z;
    }
    else {
    result = x + y + " " + z;
    }
    return result;
}
let result1 = add(4, 3, 8); // 15
let result2 = add("temp", "sight", "website"); //temp website


// Arrow Function
// -------------

// ES6 provides shorthand syntax for defining anonymous function. Arrow function omit the function 
// keyword and have lexical scoping of this keyword. TypeScript extends arrow function with types 
// parameters.

//arrow function with typed parameters
let add = (x: number, y: number)=> {
    return x + y;
};
let result = add(2, 3); //5

// The arrow function is typically useful for writing callbacks, 
// which often have an undefined or unexpected this. The use of an arrow function
// causes the callback to have the same this as the surrounding method have.
// Let’s understand the concept with the following example.

class Messenger {
    message: string = "Hello learntypescript!";
    greetArrow(): void {
    //arrow function as a callback
    setTimeout(() => console.log(this.message), 2000); //contains parent scope
    }
    greetAnonymous(): void {
    Page48
    //anonymous function as a callback
    setTimeout(function () {
    console.log(this.message); // doesn’t contain parent scope
    }, 3000);
    }
};
let m1 = new Messenger();
m1.greetArrow(); //Hello learntypescript!
m1.greetAnonymous(); //undefined