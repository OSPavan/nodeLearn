const fs = require('fs')
// readFileSync
const first=fs.readFileSync('./content/first.txt','utf-8');
const second=fs.readFileSync('./content/second.txt','utf-8');
// writeFileSync
// flag:'a' is to append
fs.writeFileSync('./content/result.txt',`Heer is the result ${first} and1 ${second}`,{flag:'a'})


const result= fs.readFileSync('./content/result.txt','utf-8');

console.log(result);