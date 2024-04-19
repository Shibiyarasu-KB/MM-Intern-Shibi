/*Garbage Collection (GC):

Garbage collection is the process of automatically reclaiming memory that is no longer in use by the program.

JavaScript uses automatic garbage collection to manage memory. When an object is no longer reachable or referenced by any part of the program, it becomes eligible for garbage collection.

The JavaScript engine periodically runs the garbage collector to reclaim memory occupied by unreachable objects and free up resources.*/

let obj1 = { name: 'John' }; // Object 1
let obj2 = { name: 'Alice' }; // Object 2

obj1 = null; // Object 1 becomes unreachable

console.log(obj1.name); //error as it null

// At this point, object 1 is eligible for garbage collection




/*Memory Allocation & Releasing:

Memory allocation refers to the process of reserving a block of memory for storing data.

In JavaScript, memory allocation is dynamic and managed by the engine. When you create objects, arrays, or other data structures, the engine allocates memory as needed.

Memory releasing, also known as deallocation, occurs when memory that is no longer needed is reclaimed by the garbage collector. This process frees up memory for reuse by the program.*/

function createArray() {
    let arr = new Array(1000000); // Allocate memory for a large array
    // Use the array...
    return arr; // Return the array
}

let myArray = createArray(); // Allocate memory for the array
// Use the array...
myArray = null; // Release the memory occupied by the array



/*Circular Reference:

A circular reference occurs when two or more objects reference each other in a loop, creating a cycle that prevents them from being garbage collected even if they are no longer reachable from the root of the object graph.

Circular references can lead to memory leaks if not properly handled because the objects involved will never be garbage collected despite being unreachable.*/

let obj3 = {}; // Object 3
let obj4 = {}; // Object 4

obj3.ref = obj3; // Object 1 refers to Object 4
obj4.ref = obj4; // Object 2 refers back to Object 3

// Even if obj1 and obj2 are no longer referenced from the root, they won't be garbage collected
// because they reference each other in a circular manner



/*Mark and Sweep Algorithm:

The mark and sweep algorithm is a common garbage collection algorithm used to identify and reclaim memory occupied by unreachable objects.


During the marking phase, the algorithm traverses the object graph starting from the root (global objects, local variables, etc.) and marks all reachable objects as live.

In the sweeping phase, the algorithm scans the entire heap and deallocates memory for objects that were not marked as live during the marking phase.

This algorithm effectively identifies and collects unreachable objects, including those involved in circular references.*/

// Suppose we have a function that creates objects and stores them in an array

function createObjects() {
    let objects = [];
    for (let i = 0; i < 1000; i++) {
        objects.push({ value: i });
    }
    return objects;
}

let myObjects = createObjects(); // Create a large number of objects

myObjects = null; // Set the array to null, making all objects unreachable

// At some point, the garbage collector will run and reclaim the memory occupied by the objects
// using the mark and sweep algorithm
//well set 