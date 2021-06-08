const {readFileSync, writeFileSync} = require('fs')
console.log('start');
console.log('read files');
const firstFile = readFileSync('./content/first.txt','utf8')
const secondFile = readFileSync('./content/second.txt','utf8')

console.log(firstFile);
console.log(secondFile);
console.log('write to file');
writeFileSync('./content/result-sync.txt', ` ${firstFile}, ${secondFile}`, {flag:'a'})

console.log('done with the task');
console.log('starting next task');