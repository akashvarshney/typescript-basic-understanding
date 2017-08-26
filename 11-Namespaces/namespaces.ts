Namespaces
--------------
    Namespaces are simply named JavaScript objects in the global scope.Namespaces are used for grouping
    of variables, functions, objects, classes, and interfaces, so that you can avoid the naming collisions.
Namespaces are declared using the namespace keyword.

namespace TypescriptDemo {
    //exporting outside the namespace body
    export class Student {
        constructor(private rollNo: number, private name: string) { }
        showDetails() {
            return this.rollNo + ", " + this.name;
        }
    }
    // Only available inside the namespace body
    let maxCount: number = 100;
    class Employee {
        constructor(private firstName: string, private lastName: string) { }
        showDetails() {
            return this.firstName + ", " + this.lastName;
        }
    }
}
namespace LearnTypescript {
    //accessing TypescriptDemo namespace student class
    import Student = TypescriptDemo.Student;
    export class Person {
        constructor(private firstName: string, private lastName: string) { }
        fullName(): string {
            return this.firstName + " " + this.lastName;
        }
    }
    //creating object of student class
    let st = new Student(1, "Akash");
    st.showDetails();
}

// Important Information
// --------------------------
//  A namespace can be described in multiple files and allow to keep each file to a maintainable size.
//  The members of a module body, you can access only within that module body.
//  To make a member available outside the namespace body, you need to prefix the member with
// the export keyword.



// Export and Import Namespaces
// -----------------------------
// In TypeScript, you can export a namespace by prefixing export keyword and to use its members use
// import keyword. Also, to make a member available outside the namespace body, you need to prefix that
// member with the export keyword.
// Let’s understand the namespace import and export with the help of following example.


export namespace LearnTypescript {
    //exporting outside the namespace body
    export class Student {
        constructor(private rollNo: number, private name: string) { }
        showDetails() {
            return this.rollNo + ", " + this.name;
        }
    }
    // Only available inside the namespace body
    let maxCount: number = 100;
    class Employee {
        constructor(private firstName: string, private lastName: string) { }
        showDetails() {
            return this.firstName + ", " + this.lastName;
        }
    }
}
//    Now, let’s import the LearnTypescript namespace as given below:

//importing the namespace
import { LearnTypescript } from "./namespace";
//accessing LearnTypescript namespace student class
import Student = LearnTypescript.Student;
//creating object of student class
let st = new Student(1, "Akash");
st.showDetails();
