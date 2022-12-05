/* 
P: What would your total score be if everything goes exactly according to your strategy guide?

E: 
A - rock 1 point
B - paper 2 points
C - scissors 3 points

A - X draw 3 points + 1 points
A - y win 6 points + 2 points
A - Z lose 0 points + 3 points

B - X lose 0 points + 1 points
B - y draw 3 points + 2 points
B - Z win 6 points + 3 points

C - X win 6 points + 1 points
C - y lose 0 points + 2 points
C - Z draw 3 points + 3 points


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
    'A X': 4, 'A Y': 8, 'A Z': 3,
    'B X': 1, 'B Y': 5, 'B Z': 9,
    'C X': 7, 'C Y': 2, 'C Z': 6
  }
  let dataArr = data.split('\n');
  let sum = 0;
  for (let i = 0; i < dataArr.length; i++) {
    let gameState = dataArr[i]
    sum += scores[gameState];
  }
  return sum;
}
