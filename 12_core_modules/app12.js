// node has many core modules
// don't prepend a path
// file system module
var fs = require('fs');

// omit optional third argument
fs.writeFileSync("corn.txt", "Corn is good, corn is life");
// omit optional second argument
var corn = fs.readFileSync("corn.txt").toString();
console.log(corn);
