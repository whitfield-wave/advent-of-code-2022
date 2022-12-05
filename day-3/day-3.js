/*
declare object of letters to their priority
declare sum to 0
Loop through input
  bissect each line
  find the unique char in each half
  add priority value to sum
  return sum


*/

// Set.intersection()

const fs = require('fs');

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });
let dataArr = data.split('\n').filter(ele => ele.length > 0);

function sumPriority() {
  let sum = 0;

  for (let index in dataArr) {
    let line = dataArr[index];
    let firstHalf = line.slice(0, line.length / 2);
    let secondHalf = line.slice(line.length / 2);
    let firstSet = new Set(firstHalf);
    let secondSet = new Set(secondHalf);

    const [item] = [...intersection(firstSet, secondSet)];
    sum += getPriority(item);
  }
  return sum;

}

function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function getPriority(char) {
  if (char.charCodeAt() >= 97) {
    return char.charCodeAt() - 96;
  } else {
    return char.charCodeAt() - 38;
  }
}

console.log(sumPriority());