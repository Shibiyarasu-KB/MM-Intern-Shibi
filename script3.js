let numbers = [3, 5, 7];
let max = Math.max(...numbers);
let lcm;

while (true) {
    if (numbers.every(num => max % num === 0)) {
        lcm = max;
        break;
    }
    max++;
}

console.log("LCM:", lcm);
