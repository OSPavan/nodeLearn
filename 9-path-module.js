const path = require('path');
const { text } = require('stream/consumers');

console.log(path.sep);

let filePath= path.join('/content/','subFolder', 'test.txt')

console.log(filePath);

console.log( path.basename(filePath));

const absolute = path.resolve(__dirname,'content','subFolder','text.txt')

console.log(absolute);