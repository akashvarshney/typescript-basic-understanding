// An Abstract class is a special type of class which cannot be instantiated and acts as a
// base class for other classes. Abstract class members marked as abstract must be implemented 
// by derived classes.

// The purpose of an abstract class is to provide basic or default functionality as 
// well as common functionality that multiple derived classes can share and modify.

// Just like C# or Java, in TypeScript abstract keyword is used to define abstract 
// classes as well as abstract methods within an abstract class. An abstract class 
// cannot be instantiated directly. Unlike an interface, an abstract class may 
// contain non-abstract members.

abstract class Shapes {
    // must be implemented in derived classes
    abstract Area(): number;
}
class Square extends Shapes {
    side: number = 0;
    constructor(n: number) {
        super(); //mandatory to call parent class constructor
        this.side = n;
    }
    // implemented Area method
    Area(): number {
        return this.side * this.side;
    }
}
class Rectangle extends Shapes {
    length: number = 0;
    width: number = 0;
    constructor(length: number, width: number) {
        super(); //mandatory to call parent class constructor
        this.length = length;
        this.width = width;
    }
    // implemented Area method
    Area(): number {
        return this.length * this.width;
    }
}
let s = new Square(4);
s.Area(); //16
let r = new Rectangle(4, 3);
s.Area(); //12