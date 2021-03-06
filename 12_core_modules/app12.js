// node has many core modules
// don't prepend a path
// file system module
var fs = require('fs');
var path = require('path');

// omit optional third argument
fs.writeFileSync("corn.txt", "Corn is good, corn is life");
// omit optional second argument
var corn = fs.readFileSync("corn.txt").toString();
console.log(corn);

// normalize repairs accidental //
var websiteHome = ".//beepscore//index.html";
console.log(path.normalize(websiteHome));

var websiteAbout = ".//beepscore/about.html";

console.log(path.normalize(websiteAbout));
// beepscore/about.html

console.log(path.dirname(websiteAbout));
// .//beepscore

console.log(path.basename(websiteAbout));
// about.html

// file extension name
console.log(path.extname(websiteAbout));
// .html

////////
// setInterval fires repeatedly, setTimeout fires once
setInterval(function () {
    console.log("beef");
}, 2000);

console.log(__dirname);
// /Users/stevebaker/Documents/projects/javascriptProjects/NodeProjects/Bucky/12_core_modules
console.log(__filename);
// /Users/stevebaker/Documents/projects/javascriptProjects/NodeProjects/Bucky/12_core_modules/app12.js
