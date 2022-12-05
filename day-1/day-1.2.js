/* 
P: Find the top three Elves carrying the most Calories. How many Calories are those Elves carrying in total?
*/

const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(maxCalories(data))
});

function maxCalories(data) {
  let dataArr = data.split('\n\n');

  let maxCalList = [];

  for (let i = 0; i < dataArr.length; i++) {
    let sum = dataArr[i].split('\n') // make an array of each group of calorie counts
      .map(ele => Number(ele)) // change each number string to a number
      .reduce((prev, curr) => prev + curr); // sum them up

    maxCalList.push(sum);
  }

  maxCalList.sort((a, b) => b - a);
  return maxCalList[0] + maxCalList[1] + maxCalList[2];
}