var movies = require('./movies11');

// movies() instantiates a new object
var emilysMovies = movies();
emilysMovies.favMovie = "The Notebook";

console.log("Emily's favorite movie is: " + emilysMovies.favMovie);
// Emily's favorite movie is: The Notebook