// Mutable and Immutable


function immutable_example(value) {
    value += " is immutable"; // Concatenating a string
    console.log("Inside function (immutable):", value);
}

function mutable_example(data) {
    data.push(4); // Modifying an array
    console.log("Inside function (mutable):", data);
}

// Dynamic Properties

function dynamic_properties() {
    const obj = {};
    obj.name = "John";
    obj.age = 30;
    console.log("Dynamic Properties:", obj);
}

// Deep Copy and Shallow Copy

function copy_examples() {
    const originalList = [[1, 2, 3], [4, 5, 6]];

    // Shallow copy

    const shallowCopy = originalList.slice();
    shallowCopy[0][0] = 100;
    console.log("Shallow Copy:", originalList); // Original list is affected

    // Deep copy

    const deepCopy = JSON.parse(JSON.stringify(originalList));
    deepCopy[0][1] = 200;
    console.log("Deep Copy:", originalList); // Original list remains unchanged
}

// Argument and Parameter Passing

function modify_array(array) {
    array.push(4); // Modifying the array
}

// typeof Operator

function typeofOperator_example() {
    const x = 5;
    console.log("Type of x:", typeof x); // Outputs: number
}

// Execution Context and Scope

function scope_example() {
    let x = 10; // Global scope

    function innerFunction() {
        let x = 20; // Local scope
        console.log("Inside inner function:", x);
    }

    innerFunction();
    console.log("Outside inner function:", x);
}

// Scope Chain Augmentation

function scope_chain_augmentation() {
    let x = 10;

    function outerFunction() {
        let x = 20;

        function innerFunction() {
            x = 30;
            console.log("Inside inner function:", x); 
        }

        innerFunction();
        console.log("Inside outer function:", x); 
    }

    outerFunction();
    console.log("Outside outer function:", x); 
}

// No Block-Level Scope

function block_level_scope() {
    for (let i = 0; i < 3; i++) {
        var x = i;
    }
    console.log("Outside loop:", x);
}

// Function calls to demonstrate the concepts

const immutableValue = "JavaScript";
immutable_example(immutableValue);
console.log("Outside function (immutable):", immutableValue); 

const mutableData = [1, 2, 3];
mutable_example(mutableData);
console.log("Outside function (mutable):", mutableData); 

dynamic_properties();

copy_examples();

const array = [1, 2, 3];
modify_array(array);
console.log("Modified Array:", array); 

typeofOperator_example();

scope_example();

scope_chain_augmentation();

block_level_scope();
