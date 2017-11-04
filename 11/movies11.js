// module.exports is an object
// here it is also an object factory, i.e. it creates another object
// the created object is an anonymous function that returns a dictionary with key favMovie
module.exports = function () {
    return {
        // default value empty string
        favMovie: ""
    }
};
