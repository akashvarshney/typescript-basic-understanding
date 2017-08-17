// ECMAScript 6 or ES6 provides class type to build JavaScript application by using object-oriented 
// class-based approach. TypeScript extends ES6 class type with typed members and access modifiers
// like classes in C# or Java programming languages.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// In TypeScript, you can compile class type down to JavaScript standard ES5 that will work across 
// all major browsers and platforms.
var Student = (function () {
    function Student(_rollNo, _name) {
        this.rollNo = _rollNo;
        this.name = _name;
    }
    Student.prototype.showDetails = function () {
        console.log(this.rollNo + " : " + this.name);
    };
    return Student;
}());
var s1 = new Student(1, "Akash ");
s1.showDetails(); //1 : Akash
var s2 = new Student(2, "Varshney ");
s2.showDetails(); //2 : Varshney 
//     Constructors
// ------------------
// Just like object oriented programming languages C# or Java, TypeScript class type supports
//  two types of constructors - default constructor and parameterized constructor.
// Unlike C# or Java, in typescript constructor, you can make public, private or protected 
// instance members of a class.
var Customer = (function () {
    //instance members with access modifiers
    function Customer(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Customer.prototype.showDetails = function () {
        console.log(this.id + " : " + this.name + " : " + this.address);
    };
    return Customer;
}());
var c1 = new Customer(1, "Akash", "India");
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
var Booklist = (function () {
    function Booklist(name) {
        this.name = name;
        //instance members
        this.books = []; //instance property or instance member
    }
    Booklist.prototype.addBook = function (book) {
        if (this.books.length >= Booklist.maxBookCount) {
            throw new Error('Booklist is full');
        }
        else {
            this.books.push(book);
            Booklist.totalBooksCount++;
        }
    };
    Booklist.totalBooks = function () {
        return Booklist.totalBooksCount;
    };
    //static members
    Booklist.totalBooksCount = 0;
    Booklist.maxBookCount = 20;
    return Booklist;
}());
var booklist = new Booklist('My books');
// acessing instance members using class instance
var listName = booklist.name;
booklist.addBook("TypeScript Training");
booklist.addBook("Angular2 Training");
// accessing static members using class name
var maxBooks = Booklist.maxBookCount; //20
var totalBooks = Booklist.totalBooks(); //2
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
var Foo = (function () {
    function Foo() {
    }
    Foo.prototype.saveData = function (foo) {
        this.x = 1; // ok
        this.y = 1; // ok
        this.z = 1; // ok
        foo.x = 1; // ok
        foo.y = 1; // ok
        foo.z = 1; // ok
    };
    return Foo;
}());
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bar.prototype.getData = function (foo, bar) {
        this.y = 1; // ok
        this.z = 1; // ok
        bar.y = 1; // ok
        bar.z = 1; // ok
        foo.z = 1; // ok
        foo.x = 1; // Error, x only accessible within A
        bar.x = 1; // Error, x only accessible within A
        bar.y = 1; // Error, y only accessible through instance of B
    };
    return Bar;
}(Foo));
// Readonly Modifiers
// ---------------------
// TypeScript supports readonly modifiers on property level by using the readonly keyword. 
// The Readonly properties must be initialized at their declaration or in the constructor.
var Company = (function () {
    function Company(_name) {
        this.country = "India";
        this.name = _name;
    }
    Company.prototype.showDetails = function () {
        console.log(this.name + " : " + this.country);
    };
    return Company;
}());
var c1 = new Company("InnovationSys");
c1.showDetails(); // InnovationSys : India
c1.name = "TCS"; //Error, name can be initialized only within constructor
// Accessors
// ------------
// Just like C# properties accessors, TypeScript supports get/set accessors to access 
// and to set the value to a member of an object. This way give us control over how a 
// member of an object is accessed and set.
var Employee = (function () {
    function Employee(_passcode) {
        this.passcode = _passcode;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (this.passcode == "secret_passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var e1 = new Employee("secret_passcode");
e1.fullName = "Shailendra Chauhan";
if (e1.fullName) {
    console.log(e1.fullName);
}
var e2 = new Employee();
e2.fullName = "Kanishk Puri"; //Error: Unauthorized update of employee
if (e2.fullName) {
    console.log(e1.fullName);
}
//# sourceMappingURL=class.js.map