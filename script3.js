/*
//LCM of Multiple nubers

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


*/





/*

// NUmber Wars

function war(numbers) {
    let even = 0;
    let odd = 0;

    for (let i of numbers) {
        if (i % 2 === 0) {
            even += i;
        } else {
            odd += i;
        }
    }

    return Math.abs(even - odd);
}

console.log(war([2, 8, 7, 5]));
console.log(war([12, 90, 75])); 
console.log(war([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])); 
*/




/*

//Rail Char


function rail(arr) {
    let previousWord = "";
    let usedWords = new Set();

    for (let i of arr) {
        if (previousWord === "" || previousWord[previousWord.length - 1] === i[0]) {
            if (usedWords.has(i)) {
                return "invalid! - " + i + " has already been exists";
            usedWords.add(i);
            previousWord = i;
        } else {
            return "invalid! - " + i + " should start with \"" + previousWord[previousWord.length - 1] + "\"";
        }
    }

    return "valid!";
}


console.log(rail(["word", "dowry", "yodel", "leader", "righteous", "serpent"])); // ➞ valid!
console.log(rail(["motive", "beach"])); // ➞ invalid! - beach should start with "e"
console.log(rail(["hive", "eh", "hive"])); // ➞ invalid! - "hive" has already been exists
*/





