// Introduction
// --------------------
// A module is a container to a group of related variables, functions, classes, and interfaces etc. Variables,
// functions, classes, and interfaces etc. declared in a module are not accessible outside the module unless
// they are explicitly exported using export keyword. Also, to consume the members of a module, you have
// to import it using import keyword.
// Modules are declarative and the relationship between modules is specified in terms of imports and
// exports at the file level. Modules are also available in ES6/ECMAScript 2015.

//NOTE : From TypeScript 1.5, "Internal modules" are "namespaces" and "External modules" are simply
// "modules" to match ES6 module terminology

// Export
// ------------
// In TypeScript, you can export any declaration such as a variable, function, class, type alias, or interface
// by using export keyword.

//exporting Employee type
export class Employee {
    constructor(private firstName: string, private lastName: string) { }
    showDetails() {
        return this.firstName + ", " + this.lastName;
    }
}
//exporting Student type
export class Student {
    constructor(private rollNo: number, private name: string) { }
    showDetails() {
        return this.rollNo + ", " + this.name;
    }
}

//    Import
//    -----------
//    In TypeScript, you can import an exported declaration by using import keyword. Let’s import the
//    myModule file types within app file as given below:


//importing the exporting types Student and Employee from myModule file
import { Student, Employee } from "./myModule";
let st = new Student(1, "Mohan");
let result1 = st.showDetails();
console.log("Student Details :" + result1);
let emp = new Employee("Shailendra", "Chauhan");
let result2 = emp.showDetails();
console.log("Employee Details :" + result2);

// Re-Export
// -----------
// In TypeScript, sometimes modules extend other modules, and partially expose some of their features. In
// this case, you can re-export some of their features either using their original name or introducing a new
// name. Let’s re-export the myModule file only Student type as show below:

//re-exporting types Student as st from myModule file

export { Student as st } from "./myModule";
export const numberRegexp = /^[0-9]+$/;

// Now, you can import the types form re_export file as given below:
//importing the exporting types from reexport file
import { st as Student, numberRegexp } from "./reExport"; importing st as Student
let st = new Student(1, "Mohan");
let result1 = st.showDetails();
console.log("Student Details :" + result1);