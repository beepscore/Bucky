// Module provides a namespace
// separate files improve separation of concerns
// every file implicitly creates an empty module.exports
// module.exports = {};

function printAvatar() {
    console.log("Avatar: PG-13");
}

function printChappie() {
    console.log("Chappie: R");
}

// add to module.exports using assignment = syntax (compare with movies09.js)
module.exports.avatar = printAvatar;
