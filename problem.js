function createGrid(letters) {

    const gridSize = 9; // Fixed grid size of 9x9
    //concat function will add two arrays
    //Array - will create a new array

    const paddedLetters = letters.concat(Array(gridSize * gridSize - letters.length).fill('_'));
    const grid = []; // the grid

    for (let i = 0; i < gridSize    /*grid size - 9*/   ; i++) {

        //
        grid.push(paddedLetters.slice(i * gridSize, (i + 1) * gridSize));
    }

    return grid;
}

// Function to display the grid as a single 9x9 matrix
function displayGrid(grid) {
    const gridSize = grid.length;

    for (let i = 0; i < gridSize; i++) {
        console.log(grid[i].join(' '));
    }
}

// Function to find a word in the grid
function findWordInGrid(word, grid) {
    const n = grid.length; // Grid size

    // Iterate through each cell in the grid
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Check if the first letter of the word matches the current cell
            if (grid[i][j].toLowerCase() === word[0].toLowerCase()) {
                // Check if the word can be found starting from this cell in all 8 directions
                if (
                    //checkDirection(word, grid, i, j, -1, -1) || // top left
                    checkDirection(word, grid, i, j, -1, 0) ||  // top
                    checkDirection(word, grid, i, j, -1, 1) ||  // top right
                    checkDirection(word, grid, i, j, 0, -1) ||  // left
                    checkDirection(word, grid, i, j, 0, 1) ||   // right
                    checkDirection(word, grid, i, j, 1, -1) ||  // bottom left
                    checkDirection(word, grid, i, j, 1, 0) ||   // bottom
                    checkDirection(word, grid, i, j, 1, 1)      // bottom right
                ) {
                    return true;
                }
            }
        }
    }

    return false;
}

function checkDirection(word, grid, row, col, dRow, dCol) {
    const n = grid.length; // Grid size
    const wordLength = word.length;

    // Check if the word fits starting from the current cell in the given direction
    for (let i = 0; i < wordLength; i++) {
        // Calculate the new row and column indices based on the direction
        const newRow = row + i * dRow;
        const newCol = col + i * dCol;

        // If the new indices are out of bounds or the letter does not match, return false
        if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= n || grid[newRow][newCol].toLowerCase() !== word[i].toLowerCase()) {
            return false;
        }
    }

    // If all letters match in the given direction, return true
    return true;
}

// Define the grid of letters
const letters = [
    'P', 'S', 'U', 'W', 'H', 'A', 'T', 'S', 'L', 
    'P','A', 'C', 'K', 'A', 'G', 'E', 'N', 'Y', 
    'O', 'L','R', 'D', 'V', 'L', 'F', 'I', 'N', 
    'G', 'E', 'Z','B', 'M', 'I', 'R', 'E', 'H',
    'Q', 'N', 'J', 'O','A', 'T', 'B', 'V', 'G',
    'Y', 'E', 'S', 'J', 'D','U', 'W', 'U', 'E',
    'S', 'T', 'P', 'S', 'T', 'I','C', 'K', 'E',
    'S', 'H', 'I', 'B', 'I', 'Y', 'A','R','A',
    'S','U','T','E','C','H','I','E','K'
];

// Define the list of words to find in the grid
const words = ["shibi", "tech", "what", "btec", "rasu","par","zeg"];

// Create the grid
const grid = createGrid(letters);

// Display the grid
console.log("Grid of letters:");
displayGrid(grid);
console.log("\nWords found in the grid:");
for (const word of words) {
    if (findWordInGrid(word, grid)) {
        console.log(`"${word}"`);
    }
}
