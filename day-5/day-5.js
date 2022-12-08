/* 
parsing input:
read input
split at new line character.
starting with last element of new array:
  remove spaces
  create object with each number as key and value as empty array

*/

const fs = require('fs');

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });
let crates = data.split('\n').slice(0, 9);

// splits instructions into numbers only array. 
let moves = data.split('\n').slice(10).map(line => {
  let numStr = line.replace(/\D/g, '');
  if (numStr.length > 3) return [numStr[0] + numStr[1], numStr[2], numStr[3]];
  return numStr.split('');
});

// takes intial crates input and creates object with empty arrays to receive crates
// then it fills in inital crates 
function getStacks(crates) {
  let columns = crates[crates.length - 1].replaceAll(' ', '');
  let stacks = {};
  for (let index in columns) {
    stacks[columns[index]] = [];
  }

  let label = crates[crates.length - 1];
  for (let i = 7; i >= 0; i--) {
    for (let j = 1; j < crates[i].length; j += 4) {
      if (crates[i][j] !== ' ') stacks[label[j]].push(crates[i][j]);
    }
  }
  return stacks;
}

// parses through instructions and applies them to the stacks. 
function moveCrates(moves, stacks) {
  moves.forEach(move => {
    let [count, from, to] = move;
    for (let i = 0; i < count; i++) {
      let crateMoved = stacks[from].pop();
      stacks[to].push(crateMoved);
    }
  });
  return stacks;
}

let stacks = getStacks(crates);

moveCrates(moves, stacks);

// loops through rearranged stacks and records the top layer of crates. 
let topLayer = '';
for (const stack in stacks) {
  topLayer += stacks[stack][stacks[stack].length - 1];
}
console.log(topLayer);
