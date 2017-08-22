// Inheritance is an important aspect of object oriented programming languages like C# and Java.
// Inheritance is a mechanism of acquiring the features and behaviors of a class by another class. 
// The class whose members are inherited is called the base class, and the class that inherits those 
// members is called the derived/ child class. Further, in child class you can override or modify the
//  behaviors of its parent class and also can add new one.

//  Traditional JavaScript uses functions and prototype- based inheritance but TypeScript supports 
// object- oriented class-based inheritance.Hence, in TypeScript you can extend the features and 
// behaviors of an existing class into new one through the extends keyword.

// Like C# and Java languages, TypeScript supports only single inheritance and 
// multi- level inheritance.It doesn’t support multiple and hybrid inheritance.

class Person {
    private firstName: string;
    private lastName: string;
    constructor(_firstName: string, _lastName: string) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    }
    fullName(): string {
    return this.firstName + " " + this.lastName;
    }
    }
    class Employee extends Person {
    id: number;
    constructor(_id: number, _firstName: string, _lastName: string) {
    //calling parent class constructor
    super(_firstName, _lastName);
    Page58
    this.id = _id;
    }
    showDetails(): void {
    //calling parent class method
    console.log(this.id + " : " + this.fullName());
    }
    }
    let e1 = new Employee(1, "Akash", "Varshney");
    e1.showDetails();