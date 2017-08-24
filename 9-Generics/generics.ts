// Introduction
// ---------------
// Generics enforce type safety without compromising performance, or productivity.In generics, 
// a type parameter is supplied between the open (<) and close (>) brackets and which makes it strongly
//  typed collections i.e.generics collections contain only similar types of objects.

// In TypeScript, you can create generic functions, generic methods, generic interfaces and generic classes.

function doReverse<T>(list: T[]): T[] {
    let revList: T[] = [];
    for (let i = (list.length - 1); i >= 0; i--) {
        revList.push(list[i]);
    }
    return revList;
}
let letters = ['a', 'b', 'c', 'd', 'e'];
let reversedLetters = doReverse<string>(letters); // e, d, c, b, a
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = doReverse<number>(numbers); // 5, 4, 3, 2, 1

// Generic Functions
// --------------------
// When a function implementation includes type parameters in its signature then it is called a 
// generic function. A generic function has a type parameter enclosed in angle brackets (< >) 
// immediately after the function name.
// The following is an example of generic function:

function doReverse<T>(list: T[]): T[] {
    let revList: T[] = [];
    for (let i = (list.length - 1); i >= 0; i--) {
        revList.push(list[i]);
    }

    return revList;
}
let letters = ['a', 'b', 'c', 'd', 'e'];
let reversedLetters = doReverse<string>(letters); // e, d, c, b, a
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = doReverse<number>(numbers); // 5, 4, 3, 2, 1

// Generic Classes
// -------------------
// A generic class has a type parameter enclosed in angle brackets (< >) immediately after the class name. 
// In generic class, same type parameter can be used to annotate method parameters, properties, return 
// types, and local variables.
// The following is an example of generic class:

class ItemList<T>
{
    private itemArray: Array<T>;
    constructor() {
        this.itemArray = [];
    }
    Add(item: T): void {
        this.itemArray.push(item);
    }
    GetAll(): Array<T> {
        return this.itemArray;
    }
}
let fruits = new ItemList<string>();
fruits.Add("Apple");
fruits.Add("Mango");
fruits.Add("Orange");
let listOfFruits = fruits.GetAll();
for (let i = 0; i < listOfFruits.length; i++) {
    console.log(listOfFruits[i]);
}
/* -- Output ---
Apple
Mango
Orange
*/

// Generic Interfaces
// --------------------
// A generic interface has a type parameter enclosed in angle brackets (< >) immediately after the interface name. 
// In generic interface, same type parameter can be used to annotate method parameters, properties, return types, 
// and local variables.
// The following is an example of generic interface:

interface IItemList<T> {
    itemArray: Array<T>;
    Add(item: T): void;
    GetAll(): Array<T>;
}
class ItemList<T> implements IItemList<T>
{
    itemArray: Array<T>;
    constructor() {
        this.itemArray = [];
    }
    Add(item: T): void {
        this.itemArray.push(item);
    }
    GetAll(): Array<T> {
        return this.itemArray;
    }
}
let fruits = new ItemList<string>();
fruits.Add("Apple");
fruits.Add("Mango");
fruits.Add("Orange");
let listOfFruits = fruits.GetAll();
for (let i = 0; i < listOfFruits.length; i++) {
    console.log(listOfFruits[i]);
}
    /* -- Output ---
    Apple
    Mango
    Orange
    */