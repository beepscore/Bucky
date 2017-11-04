// Module provides a namespace
// separate files improve separation of concerns
// every file implicitly creates an empty module.exports
// module.exports = {};

// add to module.exports using key:value syntax (compare with movies08.js)
module.exports = {

    favMovie: "The Matrix",

    printAvatar: function () {
        console.log("Avatar: PG-13");
    },

    printChappie: function () {
        console.log("Chappie: R");
    }

}
