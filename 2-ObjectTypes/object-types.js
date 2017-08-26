// The primitive types in TypeScript are the Array, Tuple, Function, Class and Interface.
// Array
//--------------
// The Array type is used to store same type of multiple values in a single variable and further your array elements you can access using the index number.
// An Array type can be defined using square brackets '[ ]' followed by elemType or generic array type 'Array<elemType>' as given below: array.ts
// let numberList:
var numberList = [1, 2, 3];
//OR
var numList = [1, 2, 3];
// Tuple
//-----------------
// The Tuple type represents a JavaScript array where you can define the datatype of each element in array.
var tuple;
tuple = ["learntypescript", 1];
// Function
//------------------
// Like JavaScript, TypeScript functions can be created both as a named function or as an anonymous function. 
// In TypeScript, you can add types to each of the parameter and also add a return type to function.
//named function with number as return type
function add(x, y) {
    return x + y;
}
//anonymous function with number as return type
var sum = function (x, y) {
    return x + y;
};
// Class
// ------------------
// ECMAScript 6 or ES6 provides class type to build JavaScript 
// application by using object-oriented class-based approach. In TypeScript, you can 
// compile class type down to JavaScript standard ES5 that will work across all major browsers and platforms.
var Student = (function () {
    function Student(rollNo, name) {
        this.rollNo = rollNo;
        this.name = name;
    }
    Student.prototype.showDetails = function () {
        return this.rollNo + " : " + this.name;
    };
    return Student;
}());
var Employee = (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Employee;
}());
//# sourceMappingURL=object-types.js.map