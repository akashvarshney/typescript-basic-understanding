// Introduction
// -------------------
// Decorators are simply functions that are prefixed @ symbol, and can be attach to a class declaration,
// method, accessor, property, or parameter. The decorators supply information about the class, method,
// property or parameters.
// Decorators are proposed for future version of JavaScript and they are available as an experimental
// feature of TypeScript.
// There are following types of decorators, you can use with TypeScript:
// 1. Class Decorators
// 2. Method Decorators
// 3. Accessor Decorators
// 4. Property Decorators
// 5. Parameter Decorators

// Class Decorator
// ------------------
// A Class Decorator is attached to a class declaration and tell about the class behaviors. The class decorator
// is applied to the constructor of the class and can be used to observe, modify, or replace a class definition.

@sealed
class Employee {
    constructor(private firstName: string, private lastName: string) { }
    showDetails() {
        return this.firstName + ", " + this.lastName;
    }
}

// In above example, @sealed decorator will seal both the constructor and its prototype so that you cannot
// inherit the class.


// Method Decorator
// ----------------
//     A method Decorator is attached to the methods of a class.

class ItemList {
    itemArray: Array<string>;
    constructor() {
        this.itemArray = [];
    }
    @log
    Add(item: string): void {
        this.itemArray.push(item);
    }
    GetAll(): Array<string> {
        return this.itemArray;
    }
}

// In above example, @log decorator will log the new item entry.
// Property Decorator
// -----------------------
// A property Decorator is attached to the properties of a class.

class Company {
    @ReadOnly
    name: string = "Learn Type Script";
}
let company = new Company();
t.name = 'TCS'; // you can't change it's name
console.log(t.name); // 'Learn Type Script'
//    In above example, @ReadOnly decorator will make the name property as readonly, so you can’t change
//    its value.

// NOTE : referring to official website of TypeScript at www.typescriptlang.org