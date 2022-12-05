/* 
P: Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?

E: 
input:
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000

The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.
The second Elf is carrying one food item with 4000 Calories.
The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.
The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.
The fifth Elf is carrying one food item with 10000 Calories.

The fourth elf is carrying the most calories. 

Data Type: Input is a space delimited list of lists of numbers delimited by new lines to be totalled. An array of arrays would be a good way to keep the groups of numbers together

Algo:
delcare maxCal variable as zero
split input string into array delimited by spaces
Loop through input
  add new line delimited numbers to array
  once it hits a space, sum array elements
    if sum is greater than maxCal, reassign to sum
  
return sum
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
  let maxCal = 0;

  let dataArr = data.split('\n\n');

  for (let i = 0; i < dataArr.length; i++) {
    let sum = dataArr[i].split('\n') // make an array of each group of calorie counts
      .map(ele => Number(ele)) // change each number string to a number
      .reduce((prev, curr) => prev + curr); // sum them up

    if (sum > maxCal) maxCal = sum;
  }

  return maxCal;
}
