var Bucky = {
    favFood: "bacon",
    favMovie: "Chappie"
};

// Person references Bucky, it's not an independent copy
var Person = Bucky;
// mutating Person also mutates Bucky
Person.favFood = "salad";

console.log(Person);
console.log(Bucky);


// https://stackoverflow.com/questions/5447024/javascript-comparison-operators-identity-vs-equality
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
// == equality, compares value, will coerce type
console.log(19 == '19')
// true

// === identity
// If both operands are objects, then JavaScript compares internal references
// (which are equal when operands refer to the same object in memory)
// compares value and type, won't coerce type
console.log(19 === '19')
// false

