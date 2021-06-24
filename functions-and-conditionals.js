/*
 * Conditionals, Functions, Scopes and Loops
 */

// Conditionals
/* Compare values to decide if something new needs to be done. Commonly used with boolean values.
 */

//Equals
let equ = 1 === 1;  //The triple equals === is the comparison operator for "equals". It's absolute for value and type.

// Equal value for comparing a number to a string is ==
let equiv = 1 == '1';
console.log("Equiv is: ", equiv);  //returns true

/*
//Greater Than
let greaterThan = 5 > 1;

//Less Than
let lessThan = 2 < 10;

//Greater Than or Equal To
let greaterThanEq = 5 >= 5;

//Less Than or Equal To
let lessThanEq = 4 <= 9;

//Not Equals
let notEqual = 5 !== 2;
*/


//Examples

/*let storeA = 31.10;  //formerly 3.10
let storeB = 4.40;
let storeAIsLower = storeA < storeB;
console.log("Store A is Lower: ", storeAIsLower);

// IF block - A Control Statement

if (storeAIsLower) {
    console.log("Store A has the lower price.");
}
else () {
    console.log("Store B has the lower price.");
} */


//let storeA = 6.40;
//let storeB = 7.40;
//let storeAIsLower = storeA < storeB;

/*if (storeAIsLower) {
    console.log("Store A is lower.");
} else if (storeB < storeA) {
    console.log("Store B is lower.")
} else {
    console.log("Their prices are equal!");
} */

//Functions

//A block of reusable code that can be called up multiple times while a program runs.

let storeA = 10.00;
let storeB = 15.00;


function compareStorePrices ( storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A is lower.");
    } else if (storeB < storeA) {
        console.log("Store B is lower.")
    } else {
        console.log("Their prices are equal!");
    }
}  //compare prices rt brace

compareStorePrices(10, 3);  //works as coded!


function squareNum (number) {
    return number * number;
}

let numberSquared = squareNum(5);
console.log(5, " squared is: ", numberSquared);

//SCOPE where variables are accessible.
//Global - anywhere in the file
//Function - only inside a particular function. Variables re-defined in a function override global values.
//Block scope is only within a block, like an if-block.

//JS has lexical scoping, so higher level values can be accessed lower down: global => function => block.

let x = 10;

function addNumbers (m, n, x) {
    console.log("Value of x inside  is: ", x);
    let b;
    if (1===1) {
        b=8;
        console.log("The value of b is: ", b);
    }
    return m+n+x;
}
//Example of global vs functional scope:
let answers = addNumbers (5, 9, 16);
console.log("The answer is: ", answers);
console.log("The value of outside x is: ", x);

//Arrays - data structures that organize information. Arrays are objects that reference data by indexes

// Zero index   0,1,2,3,4
let ourArray = [1,2,3,4,['a','b','c']]; // index 4 element 5 was replaced with an inner array of letters.
console.log("Our array value is: ", ourArray [4][2]); //displays 'c'

//We can make a new array from the inner array at index 4 :

let newArray = ourArray[4];
console.log("The new array value of index 1 is:", newArray[1]);  //displays b

//LOOPS
// 3 elements in a for loop: counter, comparator, incrementor

let theArray = [1, 2, 3, 4, 5];
for (let i = 0; i<5; i++) {
    console.log("At index ", i, " the value is: ", theArray[i]);
}

//To cope with added array elements we modify the for loop.

let nextArray = [1, 2, 3, 4, 5, 6, 7, 8];
let arrLen = nextArray.length;
console.log("nextArray length is: ", arrLen);
for (let i = 0; i<arrLen; i++) {
    console.log("At nextArray index ", i, " the value is: ", nextArray[i]);
}

//WHILE loop
let z = 0;
while (z < 10) {
    console.log("Z is: ", z);
    z++;
}
