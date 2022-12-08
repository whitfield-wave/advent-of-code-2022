const fs = require('fs');

let data = fs.readFileSync("./input.txt", { encoding: "utf8" });



function startOfPacket(data) {
  for (let i = 4; i < data.length; i++) {
    let string = data.slice(i - 4, i);
    let test = new Set(string);
    if (test.size === 4) {
      return i;
    };
  }
}

function startOfMessage(data) {
  for (let i = 14; i < data.length; i++) {
    let string = data.slice(i - 14, i);
    let test = new Set(string);
    if (test.size === 14) {
      return i;
    };
  }
}
console.log(startOfPacket(data));
console.log(startOfMessage(data));
