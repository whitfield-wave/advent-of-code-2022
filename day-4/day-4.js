const fs = require('fs');

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });

function getPairList(data) {
  let dataArr = data.split('\n');
  let pairList = dataArr.map(line => {
    let pairs = line.split(',');
    return pairs.map(pair => pair.split('-').map(str => Number(str)));
  });
  return pairList;
}

function findOverLaps(pairList) {
  let count = 0;
  for (let i = 0; i < pairList.length; i++) {
    let [first, second] = pairList[i];

    if (contains(first, second) || contains(second, first)) {
      count++;
    }
  }

  return count;

  function contains(first, second) {
    return first[0] <= second[0] && first[1] >= second[1];
  }
}

let pairList = getPairList(data);

console.log(findOverLaps(pairList));