// ECMAScript 6 or ES6 provides class type to build JavaScript application by using object-oriented 
// class-based approach. TypeScript extends ES6 class type with typed members and access modifiers
// like classes in C# or Java programming languages.

// In TypeScript, you can compile class type down to JavaScript standard ES5 that will work across 
// all major browsers and platforms.

class Student {
        private rollNo: number;
        private name: string;
        constructor(_rollNo: number, _name: string) {
        this.rollNo = _rollNo;
        this.name = _name;
        }
        showDetails() { //public : by default
        console.log(this.rollNo + " : " + this.name);
        }
    }

    let s1 = new Student(1, "Akash ");
    s1.showDetails(); //1 : Akash
    let s2 = new Student(2, "Varshney ");
    s2.showDetails(); //2 : Varshney 

//     Constructors
// ------------------

// Just like object oriented programming languages C# or Java, TypeScript class type supports
//  two types of constructors - default constructor and parameterized constructor.

// Unlike C# or Java, in typescript constructor, you can make public, private or protected 
// instance members of a class.


class Customer {
    //instance members with access modifiers
    constructor(private id:number, public name:string, protected address:string) { }
    showDetails() {
    console.log(this.id + " : " + this.name + " : " + this.address);
    }
 }

    let c1 = new Customer(1, "Akash", "India");
    c1.showDetails(); //1 : Akash : India
    
// Instance and Static Members
// ---------------------------

// TypeScript class members are either instance members or static members.
// Instance members are members of the class type and its instance. Within
//  constructors, member functions and accessors, this represents to the instance of the class.

// Static members are declared using the static keyword and are the members of constructor 
// function type. Within static functions and static accessors, this represents to the 
// constructor function type.
// Static members are accessible by using the class name only, not by using the class instance. 
// Inside static method, you can access only static members.

class Booklist {
    //instance members
    private books: string[] = []; //instance property or instance member
    constructor(public name: string) {
    }
    addBook(book: string) { //member function or instance member function
    if (this.books.length >= Booklist.maxBookCount) {
    throw new Error('Booklist is full');
    }
    else {
    this.books.push(book);
    Booklist.totalBooksCount++;
    }
    }
    //static members
    static totalBooksCount: number = 0;
    static maxBookCount: number = 20;
    static totalBooks() { //static methods
    return Booklist.totalBooksCount;
    }
}
    let booklist = new Booklist('My books');
    // acessing instance members using class instance
    let listName = booklist.name;
    booklist.addBook("TypeScript Training");
    booklist.addBook("Angular2 Training");
    // accessing static members using class name
    let maxBooks = Booklist.maxBookCount; //20
    let totalBooks = Booklist.totalBooks(); //2
    console.log(maxBooks);
    console.log(totalBooks);


    // Access Modifiers
    // -----------------
    // TypeScript supports three access modifiers - public, private, and protected.
    // Public - By default, members (properties and methods) of TypeScript class are public - 
    // so you don’t need to prefix members with the public keyword. Public members are accessible
    //  everywhere without restrictions

    // Private - A private member cannot be accessed outside of its containing class.
    // Private members can be accessed only within the class.

    // Protected - A protected member cannot be accessed outside of its containing class.
    // Protected members can be accessed only within the class and by the instance of its 
    // sub/child class.
    class Foo {
        private x: number;
        protected y: number;
        public z: number;
        saveData(foo: Foo): void {
        this.x = 1; // ok
        this.y = 1; // ok
        this.z = 1; // ok
        foo.x = 1; // ok
        foo.y = 1; // ok
        foo.z = 1; // ok
        }
    }

    class Bar extends Foo {
        getData(foo: Foo, bar: Bar) {
        this.y = 1; // ok
        this.z = 1; // ok
        bar.y = 1; // ok
        bar.z = 1; // ok
        foo.z = 1; // ok
        foo.x = 1; // Error, x only accessible within A
        bar.x = 1; // Error, x only accessible within A
        bar.y = 1; // Error, y only accessible through instance of B
        }
    }

    // Readonly Modifiers
    // ---------------------
    // TypeScript supports readonly modifiers on property level by using the readonly keyword. 
    // The Readonly properties must be initialized at their declaration or in the constructor.

    class Company {
        readonly country: string = "India";
        readonly name: string;
        constructor(_name: string) {
            this.name = _name;
        }
        showDetails() {
        console.log(this.name + " : " + this.country);
        }
    }
        let c1 = new Company("InnovationSys");
        c1.showDetails(); // InnovationSys : India
        c1.name = "TCS"; //Error, name can be initialized only within constructor

// Accessors
// ------------
// Just like C# properties accessors, TypeScript supports get/set accessors to access 
// and to set the value to a member of an object. This way give us control over how a 
// member of an object is accessed and set.

class Employee {
    private passcode: string;
    private _fullName: string;
    constructor(_passcode?: string) {
    this.passcode = _passcode;
    }
    get fullName(): string { //accessing value
    return this._fullName;
    
    }
    set fullName(newName: string) { //setting value
    if (this.passcode == "secret_passcode") {
    this._fullName = newName;
    }
    else {
    console.log("Error: Unauthorized update of employee!");
    }
    }
}

let e1 = new Employee("secret_passcode");
e1.fullName = "Shailendra Chauhan";
if (e1.fullName) {
console.log(e1.fullName);
}
let e2 = new Employee();
e2.fullName = "Kanishk Puri"; //Error: Unauthorized update of employee
if (e2.fullName) {
console.log(e1.fullName);
}