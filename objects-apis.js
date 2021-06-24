/*
 * Objects, Interfaces and API's
 */

// Objects contain data and functions (that are related) in the same "package".

let dog = {
    name: "Steve",          //key: value  structure
    color: "brown",
    breed: "Pug",
    size: "small",
    bark: function () {             //key word "bark" is the function's name
        console.log("Bark!");
    },
}  //dog object rt brace

dog.bark();  //this runs without requiring a variable assignment, like let woof = dog.bark()

//Will assigning bark to a variable work??

let noise  = dog.bark();
console.log(noise);

//Yes! It runs the same as plain old dog.bark() by itself.
//Computer is complaining that there ought not to be an undefined return value for bark... but it works,anyway.


// INTERFACE vs IMPLEMENTATION

//Interface is the function's signature - key plus parameters.   bark: function (typeOfBark)
//Implementation is the code that actually does the job of the function.  console.log(bark);

// !!! When coding, only worry about the qualities of the interface and the return value, not the mechanism
// that accomplishes the function's task.

// API's - APPLICATION PROGRAMMING INTERFACES

//API's are like system drivers that run things. API's are part of application libraries. You use these special
// apps to load and run the various applications in the library. They are furnished by the programmers who made
// the library.
// In the dog object, bark is an API because it gets the computer to printscreen "Bark!".
// In web design, some API's are URL's that call for an app from a separate website.

//PASSING BY VALUE and PASSING BY REFERENCE

// by value - the data is copied to a variable inside the function and participates in the return value (answer),
// but the value (which is declared outside of the variable) isn't touched. It's "reusable". Like global scope.

// by reference - the data storage address of the data is sent to the function. Whatever the function does to that
// value is sent back to that storage address and overwrites the original value. It "updates" the value of the
// variable.

//Demo:

function x(y) {
    y = y+5;
    console.log(" Inside Y is: ", y);
}
let y = 5;
x(y);
console.log("Outside Y is: ", y);

//OBJECTS IN JS ARE PASSED BY *REFERENCE* !!! Example:

let t = {
    name: "Tom",
    num: 10,
}

function f(t) {

    t.num = t.num + 5;
    console.log("Inside t is: ", t);
}

f(t);
console.log("Outside t is: ", t);
// Works the same as the video example.