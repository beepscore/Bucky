// Module provides a namespace
// separate files improve separation of concerns

function printAvatar() {
    console.log("Avatar: PG-13");
}

function printChappie() {
    console.log("Chappie: R");
}

module.exports.avatar = printAvatar;
