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

  for (let i = 0; i < dataArr.length; i = i + 3) {
    let [first, second, third] = dataArr.slice(i, i + 3);
    let firstSet = new Set(first);
    let secondSet = new Set(second);
    let thirdSet = new Set(third);
    let [item] = [...intersection(firstSet, secondSet, thirdSet)]
    sum += getPriority(item);
  }
  return sum;

}

function intersection(setA, setB, setC) {
  const _intersection = new Set();
  for (const elem of setA) {
    if (setB.has(elem) && setC.has(elem)) {
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