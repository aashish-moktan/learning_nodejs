const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt', 'utf8');
const third = readFileSync('./content/third.txt', 'utf8');
writeFileSync(
    './content/third.txt',
    `Here is the result : ${first}, ${second}\n`,
    { flag: 'a' }
);

console.log(first.toString());
console.log(second);
console.log(third);