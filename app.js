var person = {
    firstName: "Bucky",
    lastName: "Roberts",
    age: 28
};

function addNumbers(a, b) {
    return a + b;
}

function noExplicitReturnReturnsUndefined(a, b) {
}

// right hand side is anonymous function, assign it to variable printBacon
var printBacon = function() {
    console.log("Bacon is healthy. Don't believe the doctors!");
};

console.log(person);
// { firstName: 'Bucky', lastName: 'Roberts', age: 28 }

console.log(addNumbers(7, 3));
// 10

console.log(noExplicitReturnReturnsUndefined());
// undefined

printBacon();

