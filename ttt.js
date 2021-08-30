// Tic-tac-toe solver

// DRY UP THIS CODE
function checkWin(grid) {

        let flatGrid = grid.flat();

        let tie = flatGrid.filter((ele) => ele === ' ')

        if (tie.length === 0) {
                return 'T';
        }

        let winningConditions = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
        ];

        for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                let a = flatGrid[winCondition[0]];
                let b = flatGrid[winCondition[1]];
                let c = flatGrid[winCondition[2]];

                if (a === ' ' || b === ' ' || c === ' ') {
                        continue;
                }

                if (a === b && b === c) {
                        if (a === 'X') {
                                return 'X';
                        } 
                        if (a === 'O') {
                                return 'O';
                        }
                }
        }
 
  return false;

}

// TESTS
// DO NOT MODIFY BELOW THIS LINE

let grid;

grid = [[' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be false`);


grid = [['X','X','X'],
        [' ',' ',' '],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ',' ',' '],
        ['O','O','O'],
        [' ',' ',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [[' ',' ',' '],
        [' ',' ',' '],
        ['X','X','X']]

console.log(`${checkWin(grid)} should be X`);



grid = [['X',' ',' '],
        ['X',' ',' '],
        ['X',' ',' ']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ','O',' '],
        [' ','O',' '],
        [' ','O',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [[' ',' ','X'],
        [' ',' ','X'],
        [' ',' ','X']]

console.log(`${checkWin(grid)} should be X`);


grid = [['X',' ',' '],
        [' ','X',' '],
        [' ',' ','X']]

console.log(`${checkWin(grid)} should be X`);

grid = [[' ',' ','O'],
        [' ','O',' '],
        ['O',' ',' ']]

console.log(`${checkWin(grid)} should be O`);


grid = [['X','O','X'],
        ['X','O','O'],
        ['O','X','O']]

console.log(`${checkWin(grid)} should be T`);

grid = [['X','X',' '],
        ['X','O','O'],
        ['O','X','O']]

console.log(`${checkWin(grid)} should be false`);






