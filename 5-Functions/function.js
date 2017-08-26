// TypeScript extends JavaScript functions with typed parameters, return type annotations, overloads, 
// default parameter values, and rest parameters. Like JavaScript, TypeScript functions can be created
//  both as a named function or as an anonymous function.\
//named function with number as parameters type and return type
function add(x, y) {
    return x + y;
}
//anonymous function with number as parameters type and return type
var sum = function (x, y) {
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
function add(x, y, z) {
    if (z !== undefined)
        return x + y + z;
    else
        return x + y;
}
var resul1 = add(2, 3); //5
var resul2 = add(2, 3, 5); //10
// Default Parameters
// ---------------------
// In TypeScript, you can set a default value to a function parameter and when user does not pass the value 
// for that parameter, default value will be used for that parameter. Also, default parameter you can add 
// after any required parameters in the parameter list.
//here, z is default parameter added after required parameters x and y
function add(x, y, z) {
    if (z === void 0) { z = 0; }
    return x + y + z;
}
var resul1 = add(2, 3); //5
var resul2 = add(2, 3, 5); //10
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
function add(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    var result = x;
    for (var i = 0; i < y.length; i++) {
        result += y[i];
    }
    return result;
}
var result1 = add(2, 5); //7
var result2 = add(2, 5, 7, 2); //16
// Spread Operator
// ------------------
// The spread operator is introduced with ES6. It allows you to expand an array into multiple 
// formal parameters. In ES6, the spread operator example is given below
function add(x, y, z) {
    return x + y + z;
}
var nums = [2, 5, 5];
var result = add.apply(void 0, nums); //12
// In TypeScript, the spread operator acts like a reverse of rest parameter. 
// The spread operator in TypeScript you can use with rest parameter as given below:
function add() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < x.length; i++) {
        result += x[i];
    }
    return result;
}
var nums = [2, 5, 5];
var result = add.apply(void 0, nums); //12
// implementation signature
function add(x, y, z) {
    var result;
    if (typeof x == "number" && typeof y == "number" && typeof z == "number") {
        result = x + y + z;
    }
    else {
        result = x + y + " " + z;
    }
    return result;
}
var result1 = add(4, 3, 8); // 15
var result2 = add("temp", "sight", "website"); //temp website
// Arrow Function
// -------------
// ES6 provides shorthand syntax for defining anonymous function. Arrow function omit the function 
// keyword and have lexical scoping of this keyword. TypeScript extends arrow function with types 
// parameters.
//arrow function with typed parameters
var add = function (x, y) {
    return x + y;
};
var result = add(2, 3); //5
// The arrow function is typically useful for writing callbacks, 
// which often have an undefined or unexpected this. The use of an arrow function
// causes the callback to have the same this as the surrounding method have.
// Let’s understand the concept with the following example.
var Messenger = (function () {
    function Messenger() {
        this.message = "Hello learntypescript!";
    }
    Messenger.prototype.greetArrow = function () {
        var _this = this;
        //arrow function as a callback
        setTimeout(function () { return console.log(_this.message); }, 2000); //contains parent scope
    };
    Messenger.prototype.greetAnonymous = function () {
        Page48;
        //anonymous function as a callback
        setTimeout(function () {
            console.log(this.message); // doesn’t contain parent scope
        }, 3000);
    };
    return Messenger;
}());
;
var m1 = new Messenger();
m1.greetArrow(); //Hello learntypescript!
m1.greetAnonymous(); //undefined
//# sourceMappingURL=function.js.map