// The primitive types in TypeScript are the Array, Tuple, Function, Class and Interface.

// Array
//--------------
// The Array type is used to store same type of multiple values in a single variable and further your array elements you can access using the index number.
// An Array type can be defined using square brackets '[ ]' followed by elemType or generic array type 'Array<elemType>' as given below: array.ts
// let numberList:

let numberList: number[] = [1, 2, 3];
//OR
let numList: Array<number> = [1, 2, 3];

// Tuple
//-----------------
// The Tuple type represents a JavaScript array where you can define the datatype of each element in array.

let tuple: [string, number];
tuple = ["learntypescript", 1];

// Function
//------------------
// Like JavaScript, TypeScript functions can be created both as a named function or as an anonymous function. 
// In TypeScript, you can add types to each of the parameter and also add a return type to function.

//named function with number as return type
function add(x: number, y: number): number {
    return x + y;
}
//anonymous function with number as return type
let sum = function (x: number, y: number): number {
    return x + y;
};

// Class
// ------------------
// ECMAScript 6 or ES6 provides class type to build JavaScript 
// application by using object-oriented class-based approach. In TypeScript, you can 
// compile class type down to JavaScript standard ES5 that will work across all major browsers and platforms.

class Student {
    rollNo: number;
    name: string;
    constructor(rollNo: number, name: string) {
        this.rollNo = rollNo;
        this.name = name;
    }
    showDetails() {
        return this.rollNo + " : " + this.name;
    }
}


// Interface
// ---------------
// Interface acts as a contract between itself and 
// any class which implements it. Interface cannot be instantiated but it can be 
// referenced by the class object which implements it.
// Hence, it can be used to represent any non-primitive JavaScript object.


interface IHuman {
    firstName: string;
    lastName: string;
}
class Employee implements IHuman {
    constructor(public firstName: string, public lastName: string) {
    }
}