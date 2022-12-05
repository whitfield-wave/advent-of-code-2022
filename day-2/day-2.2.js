/* 
E: 

A - rock 1 point
B - paper 2 points
C - scissors 3 points

X - lose - 0
Y - draw - 3
Z - win - 6 


A - X lose 0 points + 3 points
A - y draw 3 points + 1 point
A - Z win 6 points  + 2 point

B - X lose 0 points + 1 point
B - y draw 3 points + 2 point
B - Z win 6 points + 3 point

C - X lose 0 points + 2 points
C - y draw 3 points + 3 points
C - Z win 6 points +  1 points
*/

const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(getScore(data))
});

function getScore(data) {
  const scores = {
    'A X': 3, 'A Y': 4, 'A Z': 8,
    'B X': 1, 'B Y': 5, 'B Z': 9,
    'C X': 2, 'C Y': 6, 'C Z': 7
  }
  let dataArr = data.split('\n');
  let sum = 0;
  for (let i = 0; i < dataArr.length; i++) {
    let gameState = dataArr[i]
    sum += scores[gameState];
  }
  return sum;
}
