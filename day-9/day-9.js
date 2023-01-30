const fs = require('fs');

let data = fs.readFileSync("./input.txt", { encoding: "utf8" }).split('\n');

let head = { x: 0, y: 0 };
let tail = { x: 0, y: 0 };

let log = new Set([pos(tail)]);


function pos({ x, y }) {
  return `${x},${y}`;
}

function dist({ x: x1, y: y1 }, { x: x2, y: y2 }) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function right(point, count) {
  return { x: point.x + count, y: point.y };
}
function left(point, count) {
  return { x: point.x - count, y: point.y };
}
function up(point, count) {
  return { x: point.x, y: point.y + count };
}
function down(point, count) {
  return { x: point.x, y: point.y - count };
}
/*
.....    .....    .....
.....    ..H..    ..H..
..H.. -> ..... -> ..T..
.T...    .T...    .....
.....    .....    .....
*/
function stepTail(tail, head) {
  if (tail.x < head.x) {
    tail = right(tail, 1);
  } else if (tail.x > head.x) {
    tail = left(tail, 1);
  }
  if (tail.y < head.y) {
    tail = up(tail, 1);
  } else if (tail.y > head.y) {
    tail = down(tail, 1);
  }
  return tail;
}

// for (let i = 0; i < data.length; i++) {
//   let [direction, countstring] = data[i].split(' ');
//   let count = Number(countstring);
//   for (let k = 0; k < count; k++) {
//     switch (direction) {
//       case 'R':
//         head = right(head, 1);
//         break;
//       case 'L':
//         head = left(head, 1);
//         break;
//       case 'U':
//         head = up(head, 1);
//         break;
//       case 'D':
//         head = down(head, 1);
//         break;
//       default:
//         throw new Error('you messed up');
//     }
//     if (dist(head, tail) >= 2) {
//       tail = stepTail(tail, head);
//     }
//     log.add(pos(tail));
//   }
// }
//part 2
let knots = new Array(10);
knots.fill({ x: 0, y: 0 });
//head = position 0
for (let i = 0; i < data.length; i++) {
  let [direction, countstring] = data[i].split(' ');
  let count = Number(countstring);
  for (let k = 0; k < count; k++) {
    switch (direction) {
      case 'R':
        knots[0] = right(knots[0], 1);
        break;
      case 'L':
        knots[0] = left(knots[0], 1);
        break;
      case 'U':
        knots[0] = up(knots[0], 1);
        break;
      case 'D':
        knots[0] = down(knots[0], 1);
        break;
      default:
        throw new Error('you messed up');
    }
    for (let j = 1; j < 10; j++) {
      if (dist(knots[j - 1], knots[j]) >= 2) {
        knots[j] = stepTail(knots[j], knots[j - 1]);
      }
    }
    log.add(pos(knots[9]));
  }
}
console.log(log.size);
