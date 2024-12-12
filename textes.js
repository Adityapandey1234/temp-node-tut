const { writeFileSync, readFileSync} = require('fs');

const first = readFileSync('./text.txt', 'utf8');

const second = readFileSync('./text.txt','utf8');

writeFileSync(
  './text.txt',`Here is the result:${first}, ${second}`
)