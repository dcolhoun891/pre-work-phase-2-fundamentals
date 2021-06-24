/*
* Variables, Data Types, and Typing
 */

/* Variables*/

let  wordData;  //value is undefined.
     wordData = "Word List";
console.log(wordData);  //works great for "word list" and "word data"

let subTotal = 100;
let tax = subTotal * 0.07;
let totalWithTax = subTotal + tax;
console.log(totalWithTax);

/* left hand side of variable statement is called the "declaration". The = is the "assignment operator". */

/* Data Types */

/* 5 "primitive" types (boolean, null, undefined, number, and strings) and 1 "composite" type (object) */

let obj = {         //"key: value" attributes are components of an object.
    key1: "value",
    key2: 4,
    boolean: true,
    obj2: {
        obj2Key1: "value of inner object",
    },
};

console.log(obj.obj2.obj2Key1);

//Typing System - evaluates data types and compares and converts types. Two major kinds: static and dynamic.

//Static system - programmer specifies the data type:

/*let variable: string = "string"; */

// NetStorm says current version of JS doesn't support specifying data types! Runtime error shuts down execution.

//JS is a dynamic language, meaning the computer decides on a variable's type at runtime. No type declaration.

//Typing systems are either "strong" or "weak".
//Strong systems cannot take 2 different types of data and combine them.
//Weak systems can, for example, convert a string of digits into an actual number to use with another number value.

let var1 = "2";
let var2 = 5;
let result = var1 + var2;

console.log(result);  //JS turns var2 into a string and concatenates 2+5 to be "25".


/* OPERATORS - mathematical symbols (+ - * etc) and logic (T or F) */

let add = 1+2;
let sub = 2-1;
let mult = 4*2;
let div = 8/4;
let mod = 5 % 2;  //moDUlo returns the remainder of a division problem

let string = "String1 " + "String2";
console.log(string);
