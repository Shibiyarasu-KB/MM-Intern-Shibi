let numbers = [3, 5, 7]; ///list of numbers

// Math is object available in js , which provides mathematical functions 

// ...variable_name is used to split the list of numbers or items

let max = Math.max(...numbers);
let lcm;

while (true) {
    if (numbers.every(num => max % num === 0)) {

        // numbers.every means , the each number in the list 

        //num => max %num === 0 is the condition for the if statement , which is checked for all the numbers
        
        lcm = max;
        break;
    }
    max++;
}

console.log("LCM:", lcm);
