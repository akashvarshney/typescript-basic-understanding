// The Any type is a supertype of all types which represents any JavaScript value. 
// You can assign any type of value to it. The any keyword is used to define Any type in TypeScript.
// The Any type is useful, when we do not know the type of 
// value (which might come from an API or a 3rd party library) and 
// we want to skip the type-checking on compile time.
function ProcessData(x, y) {
    return x + y;
}
var result;
result = ProcessData(3, 4);
console.log(result);
result = ProcessData("Hello", "World");
console.log(result);
//# sourceMappingURL=anytype.js.map