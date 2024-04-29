function pop(arr) {

  //  ci - center index of the array

  // cv - center value of the array

  const ci = Math.floor(arr.length / 2); // Find the center index
  const cv = arr[ci]; // Get the value at the center index

  // Update the values to the left of the center index

  for (let i = ci - 1; i >= 0; i--) {
    arr[i] = Math.max(cv - Math.abs(cv - i), 0);
  }

  // Update the values to the right of the center index
  
  for (let i = ci + 1; i < arr.length; i++) {
    arr[i] = Math.max(cv - Math.abs(ci - i), 0);
  }

  return arr;
}

// Test with the example arraym
const a= [0,0,0,0,4,0,0,0,0];
const b=[0,0,0,3,0,0,0];
const c=[0,0,2,0,0];
console.log(pop(a));
console.log(pop(b));
console.log(pop(c));