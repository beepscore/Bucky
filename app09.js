// To fix webstorm warning "unresolved function or method require",
// in WebStorm preferences / languages and frameworks / Node.js and npm select enable
var movies = require('./movies09');

// use module namespace
console.log(movies.favMovie);
movies.printAvatar();
