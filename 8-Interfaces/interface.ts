// Interface acts as a contract between itself and any class which implements it. It
//  means a class that implement an interface is bound to implement all its members. 
//  Interface cannot be instantiated but it can be referenced by the class object 
//  which implements it. Interfaces can be used to represent any non-primitive 
//  JavaScript object.


interface IHuman {
    firstName: string;
    lastName: string;
}
class Employee implements IHuman {
    constructor(public firstName: string, public lastName: string) {
    }
}

// Use of Interfaces
// ---------------------
// Interfaces are particularly useful for validating the required structure of 
// properties, objects passed as parameters, and objects returned from functions.

// Also, Interfaces are only TypeScript compile-time construct and compiled 
// JavaScript code have no such representation.

// Interface Inheritance
// --------------------
// An interface can be inherited from zero or more base types. The base type can 
// be a class or interface.
// Let’s understand the interface inheritance with the following examples:

interface IStore {
    Read(): void;
    Write(): void;
}
interface ICompress {
    Compress(): void;
    Decompress(): void;
}
interface IDocument extends IStore, ICompress {
    Print(): void;
}

// Class Implementing Interfaces
// ------------------------------
// Just like C# and Java, a TypeScript class can implement multiple interfaces.

interface IStore {
    Read(): void;
    Write(): void;
}
interface ICompress {
    Compress(): void;
    Decompress(): void;
}
class DocStore implements IStore, ICompress {
    Read(): void {
        console.log("Read Method for IStore");
    }
    Write(): void {
        console.log("Write Method for IStore");
    }
    Compress(): void {
        console.log("Compress Method for ICompress");
    }
    Page63
    Decompress(): void {
        console.log("Decompress Method for ICompress");
    }
}
let I1: IStore = new DocStore();
//can access only IStore members
I1.Read();
I1.Write();
let I2: ICompress = new DocStore();
//can access only ICompress members
I2.Compress();
I2.Decompress();

// Interface Extending Class
// --------------------------

// Unlike C# or Java, TypeScript interfaces can inherit (extend) classes. When an interface 
// extends a class, type it inherits the members of the class but not their implementations
//  i.e. the members’ declaration is available in interface. Also, 
// anything added to the class will also be added to the interface.

class Store {
    Read(): void {
        console.log("Read Method for Store");
    }
    Write(): void {
        console.log("Write Method for Store");
    }
}
interface IDocStore extends Store {
    //inherited Read and Write methods with declaration only
}
class Doc implements IDocStore {
    //mandatory to implement Read and Write methods of IDocStore
    Read(): void {
        console.log("Read Method for Doc");
    }
    Write(): void {
        console.log("Write Method for Doc");
    }
}
let I1: IDocStore = new Doc();
I1.Read();
I1.Write();